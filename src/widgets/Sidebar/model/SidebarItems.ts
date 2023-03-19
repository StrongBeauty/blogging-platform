import { RoutePath } from 'shared/config/route/routeConfig';
import { SVGProps, VFC } from 'react';
import AboutPageIcon from 'shared/assets/icons/about_page.svg';
import MainPageIcon from 'shared/assets/icons/main_page.svg';
import ProfilePageIcon from 'shared/assets/icons/profile_page.svg';
import ArticlePageIcon from 'shared/assets/icons/article_page.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainPageIcon,
    text: 'links.main',
  },
  {
    path: RoutePath.about,
    Icon: AboutPageIcon,
    text: 'links.about',
  },
  {
    path: RoutePath.profile,
    Icon: ProfilePageIcon,
    text: 'links.profile',
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: ArticlePageIcon,
    text: 'links.article',
    authOnly: true,
  },
];
