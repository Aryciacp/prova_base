import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <div>
      <h1>Bem vindo ao Portal de Receitas</h1>
      <Link href="/recipes">Receitas</Link>
    </div>
  );
}