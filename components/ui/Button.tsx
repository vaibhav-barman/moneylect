import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-emerald-300",
    secondary:
      "border border-gray-300 bg-white text-gray-900 hover:border-emerald-300 hover:bg-emerald-50",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}