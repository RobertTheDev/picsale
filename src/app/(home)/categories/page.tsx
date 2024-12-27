import { categories } from './categories';
import CategoryCard from './components/CategoryCard';

export default function CategoriesPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white">Categories</h1>
      <div className="mt-8 grid grid-cols-2 gap-8">
        {categories.map((category) => {
          return <CategoryCard category={category} key={category.id} />;
        })}
      </div>
    </div>
  );
}
