import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Country';
import { Theme } from 'shared/contexts/theme';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  profile: {
    data: {
      lastname: 'Волкова',
      firstname: 'Анастасия',
      age: 18,
      city: 'M',
      currency: Currency.EUR,
      country: Countries.USA,
      username: 'admin',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGPqFm5aVs_zycDn7bf7lvQo02Fk6VDqyFw&usqp=CAU',
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    data: {
      lastname: 'Волкова',
      firstname: 'Анастасия',
      age: 18,
      city: 'M',
      currency: Currency.EUR,
      country: Countries.USA,
      username: 'admin',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGPqFm5aVs_zycDn7bf7lvQo02Fk6VDqyFw&usqp=CAU',
    },
  },
})];
