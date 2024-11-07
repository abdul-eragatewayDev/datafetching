import Image from "next/image";
import { Header } from "./components/Header";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <div className="px-2 w-full">
        <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4 h-dvh">
          <h2 className="text-2xl">Page Not Found</h2>
          <Image
            className="m-0 rounded-xl"
            src="/images/rb_5529.png"
            width={300}
            height={300}
            sizes="300px"
            alt="Page Not Found"
            priority={true}
            title="Page Not Found"
          />
          <Link href={"/"} className="hover:underline underline-offset-4">
            Back Home
          </Link>
        </div>
      </div>
    </>
  );
}
