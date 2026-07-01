import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-4">

        <div>

          <h2 className="text-3xl font-bold text-emerald-600">
            Moneylect
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Helping Indian students master personal finance before earning
            their first salary.
          </p>

        </div>

        <div>

          <h3 className="font-bold">
            Learn
          </h3>

          <ul className="mt-6 space-y-3 text-gray-600">

            <li><Link href="/articles">Articles</Link></li>

            <li><Link href="/roadmap">Roadmap</Link></li>

            <li><Link href="/tools">Tools</Link></li>

          </ul>

        </div>

        <div>

          <h3 className="font-bold">
            Company
          </h3>

          <ul className="mt-6 space-y-3 text-gray-600">

            <li>About</li>

            <li>Contact</li>

            <li>Privacy</li>

          </ul>

        </div>

        <div>

          <h3 className="font-bold">
            Newsletter
          </h3>

          <p className="mt-5 text-gray-600">
            Weekly finance lessons.
          </p>

        </div>

      </div>

      <div className="border-t border-gray-200 py-8 text-center text-gray-500">

        © 2026 Moneylect. All rights reserved.

      </div>

    </footer>
  );
}