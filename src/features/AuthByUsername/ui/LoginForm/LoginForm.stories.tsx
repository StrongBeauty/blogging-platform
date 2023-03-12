import { Text } from 'shared/components/Text/Text';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginForm from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
  title: 'shared/LoginForm',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'asd' },
})];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'asd', error: 'error' },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  loginForm: { isLoading: true },
})];
