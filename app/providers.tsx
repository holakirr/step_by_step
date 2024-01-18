"use client";

import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

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

const Providers = ({
  children,
  props,
}: {
  children: ReactNode;
  props?: { session: Session | null | undefined };
}) => {
  const session: Session = {
    ...props?.session,
    expires: props?.session?.expires
      ? props.session.expires
      : Date.now().toString(),
  };
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Providers;
