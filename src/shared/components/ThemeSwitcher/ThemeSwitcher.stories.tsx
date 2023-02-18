import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args: {}) => <ThemeSwitcher {...args} />;

// ToDo
export const Light = Template.bind({});
Light.args = {};
