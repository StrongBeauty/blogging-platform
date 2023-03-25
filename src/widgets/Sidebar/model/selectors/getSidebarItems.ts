import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/route/routeConfig';
import MainPageIcon from 'shared/assets/icons/main_page.svg';
import AboutPageIcon from 'shared/assets/icons/about_page.svg';
import ProfilePageIcon from 'shared/assets/icons/profile_page.svg';
import ArticlePageIcon from 'shared/assets/icons/article_page.svg';
import { SidebarItemType } from '../../model/types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
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

    ];
    if (userData) {
      sidebarItemsList.push(
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
      );
    }
    return sidebarItemsList;
  },
);
