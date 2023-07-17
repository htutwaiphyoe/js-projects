import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center">
      <Image
        src="/logo.svg"
        alt="Car Hub Logo"
        width={118}
        height={18}
        className="object-contain"
      />
    </Link>
  );
}
