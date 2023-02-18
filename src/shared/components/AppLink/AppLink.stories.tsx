import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },

} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: 'Text',
  theme: 'primary',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  theme: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator('dark')];

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
  children: 'Text',
  theme: 'secondary',
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  theme: 'secondary',
};
SecondaryDark.decorators = [ThemeDecorator('dark')];
