import Link from "next/link";
import { Scale } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Scale className="h-6 w-6" />
      <span className="text-xl font-bold">Ares</span>
    </Link>
  );
}
