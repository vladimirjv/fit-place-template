import { StarterKit } from '@tiptap/starter-kit';
import { CalendarCheck, HomeIcon, PersonStanding, Settings } from 'lucide-react';
// import StarterKit from '@tiptap/starter-kit';
// import dayjs from 'dayjs';

type HeaderConfig = {
  title: string;
  description?: string;
  keywords?: string;
  href: string;
};
type HeaderConfigMobile = HeaderConfig & {
  icon: React.ReactNode;
}

export const headerConfig: HeaderConfig[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Generate WOD',
    href: '/wod',
  }
];
export const mobileNavConfig: HeaderConfigMobile[] = [
  {
    title: 'feed',
    href: '/',
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    title: 'sessions',
    href: '/sessions',
    icon: <CalendarCheck className="h-5 w-5" />,
  },
  {
    title: 'wods',
    href: '/wods',
    icon: <PersonStanding className="h-5 w-5" />,
  },
  {
    title: 'profile',
    href: '/profile',
    icon: <Settings className="h-5 w-5" />,
  }
];
export const extensionsEditor = [
  StarterKit.configure({
    heading: {
      HTMLAttributes: {
        class: "tiptap-typography",
      },
      levels: [1, 2, 3],
    },
  }),
];
