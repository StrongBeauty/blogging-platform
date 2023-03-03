import { SVGProps, VFC } from 'react';
import AboutPageIcon from 'shared/assets/icons/about_page.svg';
import MainPageIcon from 'shared/assets/icons/main_page.svg';
import ProfilePageIcon from 'shared/assets/icons/profile_page.svg';

export type SidebarItemType = {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  // ToDo: paths
  {
    path: '/',
    Icon: MainPageIcon,
    text: 'links.main',
  },
  {
    path: '/about',
    Icon: AboutPageIcon,
    text: 'links.about',
  },
  {
    path: '/profile',
    Icon: ProfilePageIcon,
    text: 'links.profile',
  },
];
