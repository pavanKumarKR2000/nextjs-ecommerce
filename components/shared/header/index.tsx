import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start gap-3">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
            />
            <h2 className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </h2>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
}
