import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleEditPageLazy } from './ArticleEditPageLazy';

export default {
  title: 'shared/ArticleEditPage',
  component: ArticleEditPageLazy,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleEditPageLazy>;

const Template: ComponentStory<typeof ArticleEditPageLazy> = (args) => <ArticleEditPageLazy {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
