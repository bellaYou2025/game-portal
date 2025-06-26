import Link from 'next/link';
import {
  HomeIcon,
  FireIcon,
  PuzzlePieceIcon,
  TruckIcon,
  BoltIcon,
  UserGroupIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

const menuItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Popular', href: '/popular', icon: FireIcon },
  { name: 'Puzzle', href: '/category/puzzle', icon: PuzzlePieceIcon },
  { name: 'Racing', href: '/category/racing', icon: TruckIcon },
  { name: 'Action', href: '/category/action', icon: BoltIcon },
  { name: 'Multiplayer', href: '/category/multiplayer', icon: UserGroupIcon },
  { name: 'Sports', href: '/category/sports', icon: TrophyIcon },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <item.icon className="mr-3 h-6 w-6" />
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
