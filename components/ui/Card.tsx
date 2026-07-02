import Link from "next/link";
import { ReactNode } from "react";

type CardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
};

export default function Card({
  title,
  description,
  icon,
  href,
}: CardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[28px] border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-emerald-500 hover:shadow-lg"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition duration-300 group-hover:scale-110 group-hover:bg-emerald-100">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-emerald-600">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-gray-600">
        {description}
      </p>
    </Link>
  );
}