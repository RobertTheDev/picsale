import Link from 'next/link';
import {
  LuGift,
  LuGraduationCap,
  LuHeartPulse,
  LuLaptop,
  LuLuggage,
  LuPalette,
  LuPizza,
  LuSquirrel,
  LuUsers,
  LuVolleyball,
} from 'react-icons/lu';

const categories = [
  {
    id: 1,
    title: 'Nature',
    description:
      'Explore stunning visuals of animals, landscapes, and the beauty of nature.',
    slug: 'nature-wildlife',
    icon: <LuSquirrel size={44} />,
  },
  {
    id: 2,
    title: 'Lifestyle',
    description:
      'Capture moments of human connection, fashion, and daily life.',
    slug: 'lifestyle-people',
    image: 'lifestyle-people.jpg',
    icon: <LuUsers size={44} />,
  },
  {
    id: 3,
    title: 'Technology',
    description:
      'Innovative images showcasing corporate culture and the latest in tech.',
    slug: 'business-technology',
    icon: <LuLaptop size={44} />,
  },
  {
    id: 4,
    title: 'Food & Drink',
    description: 'Delicious images of food, beverages, and culinary delights.',
    slug: 'food-drink',
    icon: <LuPizza size={44} />,
  },
  {
    id: 5,
    title: 'Travel',
    description:
      'Wanderlust-inducing scenes of famous landmarks and outdoor adventures.',
    slug: 'travel-landmarks',
    icon: <LuLuggage size={44} />,
  },
  {
    id: 6,
    title: 'Art & Design',
    description:
      'Creative artworks, patterns, and cultural designs for inspiration.',
    slug: 'art-design',
    icon: <LuPalette size={44} />,
  },
  {
    id: 7,
    title: 'Health',
    description: 'Images promoting health, fitness, and medical care.',
    slug: 'health-wellness',
    icon: <LuHeartPulse size={44} />,
  },
  {
    id: 8,
    title: 'Sports',
    description:
      'Action-packed visuals of athletes, sports, and recreational activities.',
    slug: 'sports-recreation',
    icon: <LuVolleyball size={44} />,
  },
  {
    id: 9,
    title: 'Education',
    description:
      'Resources and imagery focused on education, learning, and growth.',
    slug: 'education-learning',
    icon: <LuGraduationCap size={44} />,
  },
  {
    id: 10,
    title: 'Holidays',
    description: 'Festive images celebrating holidays and special occasions.',
    slug: 'holidays-celebrations',
    icon: <LuGift size={44} />,
  },
];

export default function CategoriesPage() {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-2xl font-bold text-white">Categories</h1>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-8">
        {categories.map((category) => {
          return (
            <Link
              className="flex flex-col items-center rounded-xl bg-neutral-800 p-6"
              key={category.id}
              href={`/categories/${category.slug}`}
            >
              {category.icon}
              <p className="mt-4 text-center">{category.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
