import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  icon: string;
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
      className="group block rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-emerald-600">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-600">
        {description}
      </p>
    </Link>
  );
}