"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export const Providers = ({
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
