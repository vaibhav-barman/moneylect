import Link from "next/link";

import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation/navigation";

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

            {navigation.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="font-medium text-gray-600 transition hover:text-emerald-600"
                >
                  {link.title}
                </Link>
              </li>
            ))}

          </ul>

          {/* CTA */}

          <Link
            href="/learn"
            className="rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:shadow-emerald-300"
          >
            Start Learning →
          </Link>

        </nav>
      </Container>
    </header>
  );
}