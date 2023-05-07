import type { Meta, StoryObj } from '@storybook/react';

import GamePlaceholder from './GamePlaceholder';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof GamePlaceholder> = {
  title: 'Example/GamePlaceholder',
  component: GamePlaceholder,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof GamePlaceholder>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
