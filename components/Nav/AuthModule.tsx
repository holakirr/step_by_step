import { useSession } from "next-auth/react";
import { Button } from "../";

export const AuthModule = () => {
  const session = useSession();

  return session.data?.user && session.status === "authenticated" ? (
    <div className="flex items-center justify-end gap-x-4">
      <span className="text-sm font-semibold leading-6 rounded-lg px-1 py-1 hover:text-indigo-500">
        {session.data?.user?.name}
      </span>
      <Button>Log out</Button>
    </div>
  ) : (
    <>
      <Button>Log in</Button>
      <Button>Sign up</Button>
    </>
  );
};
