import Image from "next/image";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <div className="relative h-[218px] w-full">
          <Image src="/welcome.png" fill alt="Welcome image" />
        </div>
        <h1 className="pt-5 px-4 pb-3 text-3xl font-bold">
          Pick every product that you want!
        </h1>
        <div className="pt-1 px-4 pb-3">
          Determine your financial planning. Everything is right on track, no
          problem, guys!
        </div>
      </div>
      <div className="py-3 px-4">
        <Link className="w-full" href="/auth">
          <Button className="w-full">Next feature</Button>
        </Link>
      </div>
    </div>
  );
}
