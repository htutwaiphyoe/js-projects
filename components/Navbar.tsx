import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="absolute z-10 w-full">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Logo />
        <Button
          title="Sign up"
          className="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
}
