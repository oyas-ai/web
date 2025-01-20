import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-black border-b border-primary/10">
      <Link href="/" className="text-2xl font-bold text-primary">
        oyas-ai
      </Link>
      <nav className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <Link href="#features">特徴</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="#pricing">料金</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="#contact">お問い合わせ</Link>
        </Button>
      </nav>
    </header>
  );
}
