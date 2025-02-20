import Link from "next/link";
import Image from "next/image";


export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo.png" alt="Ares Legal" width={20} height={20} />
      <span className="text-xl font-bold font-mono">Ares</span>
    </Link>
  );
}
