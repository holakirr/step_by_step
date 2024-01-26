import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";

export const Logotype = () => {
  return (
    <Link href="#">
      <span className="sr-only">Your Company</span>
      <Image width={32} height={32} src={Logo} alt="" />
    </Link>
  );
};
