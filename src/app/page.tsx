import Link from "next/link";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1 className="text-[3rem]">Welcome to My Next.js Project 🚀</h1>
      <nav style={{ marginTop: "1rem" }}>
        <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>{" "}
        | <Link href="/blog">Blog</Link>
      </nav>
    </main>
  );
}
