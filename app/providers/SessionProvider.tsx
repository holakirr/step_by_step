import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";

export async function getServerSideProps(context: GetServerSidePropsContext) {
	// const session: Session | null = await getServerSession(
	//   context.req,
	//   context.res,
	//   authOptions
	// );
	const session: Session | null = null;

	if (!session) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {
			session,
		},
	};
}
