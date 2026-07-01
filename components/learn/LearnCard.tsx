import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { slugify } from "@/lib/slug";

type Props = {
  title: string;
  description: string;
  lessons: number;
};

export default function LearnCard({
  title,
  description,
  lessons,
}: Props) {
  return (
    <Link
      href={`/learn/${slugify(title)}`}
      className="group block rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-emerald-500 hover:shadow-2xl"
    >
      <div className="flex items-center justify-between">

        <h2 className="text-3xl font-bold text-gray-900">
          {title}
        </h2>

        <ArrowRight
          className="text-emerald-600 transition group-hover:translate-x-2"
        />

      </div>

      <p className="mt-6 leading-8 text-gray-600">
        {description}
      </p>

      <div className="mt-8 flex items-center justify-between">

        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          {lessons} Lessons
        </span>

        <span className="text-gray-500">
          Beginner
        </span>

      </div>

    </Link>
  );
}