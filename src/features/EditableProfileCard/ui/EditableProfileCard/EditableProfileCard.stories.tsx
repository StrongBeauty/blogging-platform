import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { EditableProfileCard } from './EditableProfileCard';

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {},
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = () => <EditableProfileCard />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const WithError = Template.bind({});
WithError.args = {
  error: 'error',
};
WithError.decorators = [StoreDecorator({ profile: { error: 'error' } })];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({ profile: { isLoading: true } })];
