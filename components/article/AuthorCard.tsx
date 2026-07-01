type Props = {
  author: string;
};

export default function AuthorCard({ author }: Props) {
  return (
    <div className="mt-16 rounded-3xl border border-gray-200 bg-gray-50 p-8">
      <h3 className="font-bold text-gray-900">
        Written by
      </h3>

      <p className="mt-3 text-gray-600">
        {author}
      </p>
    </div>
  );
}