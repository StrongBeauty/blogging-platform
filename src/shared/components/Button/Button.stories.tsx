import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: 'outline',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: 'outline',
};
OutlineDark.decorators = [ThemeDecorator('dark')];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: 'background',
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  children: 'Text',
  theme: 'background',
};
BackgroundDark.decorators = [ThemeDecorator('dark')];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: 'background_inverted',
};

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  children: 'Text',
  theme: 'background_inverted',
};
BackgroundInvertedDark.decorators = [ThemeDecorator('dark')];

export const SizeM = Template.bind({});
SizeM.args = {
  children: 'Text',
  theme: 'outline',
  size: 'size_m',
};

export const SizeL = Template.bind({});
SizeL.args = {
  children: 'Text',
  theme: 'outline',
  size: 'size_l',
};

export const SizeXL = Template.bind({});
SizeXL.args = {
  children: 'Text',
  theme: 'outline',
  size: 'size_xl',
  isSquare: false,
};

export const Square = Template.bind({});
Square.args = {
  children: '+',
  theme: 'background_inverted',
  isSquare: true,
};

export const SizeMSquare = Template.bind({});
SizeMSquare.args = {
  children: '+',
  theme: 'background_inverted',
  isSquare: true,
  size: 'size_m',
};

export const SizeLSquare = Template.bind({});
SizeLSquare.args = {
  children: '+',
  theme: 'background_inverted',
  isSquare: true,
  size: 'size_l',
};

export const SizeXLSquare = Template.bind({});
SizeXLSquare.args = {
  children: '+',
  theme: 'background_inverted',
  isSquare: true,
  size: 'size_xl',
};
