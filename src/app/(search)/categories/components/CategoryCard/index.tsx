import Link from 'next/link';
import { JSX } from 'react';

export default function CategoryCard({
  category,
}: {
  category: { slug: string; icon: JSX.Element; title: string };
}) {
  return (
    <Link
      className="flex flex-col items-center rounded-xl bg-neutral-800 p-6"
      href={`/categories/${category.slug}`}
    >
      {category.icon}
      <p className="mt-4 text-center">{category.title}</p>
    </Link>
  );
}
