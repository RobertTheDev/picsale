'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
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
    icon: <LuSquirrel size={20} />,
  },
  {
    id: 2,
    title: 'Lifestyle & People',
    description:
      'Capture moments of human connection, fashion, and daily life.',
    slug: 'lifestyle-people',
    image: 'lifestyle-people.jpg',
    icon: <LuUsers size={20} />,
  },
  {
    id: 3,
    title: 'Business & Technology',
    description:
      'Innovative images showcasing corporate culture and the latest in tech.',
    slug: 'business-technology',
    icon: <LuLaptop size={20} />,
  },
  {
    id: 4,
    title: 'Food & Drink',
    description: 'Delicious images of food, beverages, and culinary delights.',
    slug: 'food-drink',
    icon: <LuPizza size={20} />,
  },
  {
    id: 5,
    title: 'Travel & Landmarks',
    description:
      'Wanderlust-inducing scenes of famous landmarks and outdoor adventures.',
    slug: 'travel-landmarks',
    icon: <LuLuggage size={20} />,
  },
  {
    id: 6,
    title: 'Art & Design',
    description:
      'Creative artworks, patterns, and cultural designs for inspiration.',
    slug: 'art-design',
    icon: <LuPalette size={20} />,
  },
  {
    id: 7,
    title: 'Health & Wellness',
    description: 'Images promoting health, fitness, and medical care.',
    slug: 'health-wellness',
    icon: <LuHeartPulse size={20} />,
  },
  {
    id: 8,
    title: 'Sports & Recreation',
    description:
      'Action-packed visuals of athletes, sports, and recreational activities.',
    slug: 'sports-recreation',
    icon: <LuVolleyball size={20} />,
  },
  {
    id: 9,
    title: 'Education & Learning',
    description:
      'Resources and imagery focused on education, learning, and growth.',
    slug: 'education-learning',
    icon: <LuGraduationCap size={20} />,
  },
  {
    id: 10,
    title: 'Holidays & Celebrations',
    description: 'Festive images celebrating holidays and special occasions.',
    slug: 'holidays-celebrations',
    icon: <LuGift size={20} />,
  },
];

export default function PhotoFilterMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="flex max-h-[80vh] flex-col overflow-hidden overflow-y-scroll">
      <div>
        <h2 className="text-lg font-bold">Categories</h2>
      </div>
      <div className="mt-8 flex flex-col gap-8">
        {categories.map((category) => {
          return (
            <button
              key={category.slug}
              className="flex items-center gap-4 hover:bg-gray-300"
              onClick={() => {
                router.push(
                  pathname + '?' + createQueryString('category', category.slug),
                );
              }}
            >
              <div className="relative flex size-10 items-center justify-center rounded-full bg-gray-300">
                {category.icon}
              </div>
              {category.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
