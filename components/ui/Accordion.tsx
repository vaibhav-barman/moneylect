"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type Props = {
  question: string;
  answer: string;
};

export default function Accordion({
  question,
  answer,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        rounded-[28px]
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:shadow-md
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-7 text-left"
      >
        <h3 className="text-xl font-bold text-gray-900">
          {question}
        </h3>

        <div className="rounded-full bg-gray-100 p-2">
          {open ? (
            <Minus size={18} />
          ) : (
            <Plus size={18} />
          )}
        </div>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-7 pb-7 leading-8 text-gray-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}