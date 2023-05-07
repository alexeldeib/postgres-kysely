import type { Meta, StoryObj } from '@storybook/react';

import Board from './Board';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Board> = {
  title: 'Example/Board',
  component: Board,
  tags: ['autodocs'],
  argTypes: {
    setFoundWords: {
      table: {
        disable: true
      }
    },
    setCurrentLetters: {
      table: {
        disable: true
      }
    },
  },
};

export default meta;
type Story = StoryObj<typeof Board>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
