'use client';

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
    title: 'Nature & Wildlife',
    description:
      'Explore stunning visuals of animals, landscapes, and the beauty of nature.',
    slug: 'nature-wildlife',
    icon: <LuSquirrel size={24} />,
  },
  {
    id: 2,
    title: 'Lifestyle & People',
    description:
      'Capture moments of human connection, fashion, and daily life.',
    slug: 'lifestyle-people',
    image: 'lifestyle-people.jpg',
    icon: <LuUsers size={24} />,
  },
  {
    id: 3,
    title: 'Business & Technology',
    description:
      'Innovative images showcasing corporate culture and the latest in tech.',
    slug: 'business-technology',
    icon: <LuLaptop size={24} />,
  },
  {
    id: 4,
    title: 'Food & Drink',
    description: 'Delicious images of food, beverages, and culinary delights.',
    slug: 'food-drink',
    icon: <LuPizza size={24} />,
  },
  {
    id: 5,
    title: 'Travel & Landmarks',
    description:
      'Wanderlust-inducing scenes of famous landmarks and outdoor adventures.',
    slug: 'travel-landmarks',
    icon: <LuLuggage size={24} />,
  },
  {
    id: 6,
    title: 'Art & Design',
    description:
      'Creative artworks, patterns, and cultural designs for inspiration.',
    slug: 'art-design',
    icon: <LuPalette size={24} />,
  },
  {
    id: 7,
    title: 'Health & Wellness',
    description: 'Images promoting health, fitness, and medical care.',
    slug: 'health-wellness',
    icon: <LuHeartPulse size={24} />,
  },
  {
    id: 8,
    title: 'Sports & Recreation',
    description:
      'Action-packed visuals of athletes, sports, and recreational activities.',
    slug: 'sports-recreation',
    icon: <LuVolleyball size={24} />,
  },
  {
    id: 9,
    title: 'Education & Learning',
    description:
      'Resources and imagery focused on education, learning, and growth.',
    slug: 'education-learning',
    icon: <LuGraduationCap size={24} />,
  },
  {
    id: 10,
    title: 'Holidays & Celebrations',
    description: 'Festive images celebrating holidays and special occasions.',
    slug: 'holidays-celebrations',
    icon: <LuGift size={24} />,
  },
];

export default function PhotoFilterMenu() {
  return (
    <div className="flex flex-col overflow-hidden overflow-y-scroll px-4">
      <div className="mt-6 flex flex-col gap-3">
        {categories.map((category) => {
          return (
            <Link
              href={`/categories/${category.slug}`}
              key={category.slug}
              className="flex h-12 w-full items-center gap-4 overflow-hidden rounded-lg px-4 py-4 text-base hover:bg-gray-800"
            >
              <div className="relative">{category.icon}</div>
              <p className="text-base font-medium">{category.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
