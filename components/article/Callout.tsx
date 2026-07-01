type Props = {
  children: React.ReactNode;
};

export default function Callout({ children }: Props) {
  return (
    <div className="my-10 rounded-3xl bg-emerald-50 p-8">
      {children}
    </div>
  );
}