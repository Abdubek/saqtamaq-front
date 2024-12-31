import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col gap-3 p-3">
      <div className="text-lg font-bold">Too Good To Go</div>
      <div className="h-[100px]" />
      <Link className="w-full" href="/auth/login">
        <Button className="w-full">Login</Button>
      </Link>
      <Button variant="secondary">Sign Up</Button>
    </div>
  );
}
