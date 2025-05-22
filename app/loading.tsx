import Image from "next/image";
import loader from "@/assets/loader.gif";

export default function LoadingPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Image src={loader} width={120} height={120} alt="Loading..." />
    </div>
  );
}
