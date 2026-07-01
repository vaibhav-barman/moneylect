import Link from "next/link";
import Container from "@/components/ui/Container";

const navLinks = [
  {
    name: "Learn",
    href: "/learn",
  },
  {
    name: "Roadmap",
    href: "/roadmap",
  },
  {
    name: "Tools",
    href: "/tools",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="text-3xl font-bold tracking-tight text-emerald-600"
          >
            Moneylect
          </Link>

          {/* Navigation */}

          <ul className="hidden items-center gap-8 md:flex">

            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="font-medium text-gray-600 transition hover:text-emerald-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}

          </ul>

          {/* CTA */}

          <Link
            href="/learn"
            className="rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Start Learning →
          </Link>

        </nav>
      </Container>
    </header>
  );
}