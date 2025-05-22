import Image from "next/image";
import logo from "@/public/images/logo.svg";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <Image
        src={logo}
        alt={`${APP_NAME} logo`}
        height={48}
        width={48}
        priority
      />
      <div className="p-6 w-1/3 rounded-lg text-center space-y-4">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button variant="outline" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
