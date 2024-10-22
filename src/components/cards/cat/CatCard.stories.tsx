import { Meta, StoryFn } from '@storybook/react';
import CatCard, { ICatCard } from './CatCard';
import { mockCatCardProps } from './CatCard.mocks'; 

export default {
  title: 'cards/CatCard',
  component: CatCard,
  argTypes: {},
} as Meta<typeof CatCard>;

const Template: StoryFn<typeof CatCard> = (args) => (
  <CatCard {...args}/>
);

export const Base = Template.bind({});

Base.args = {
  ...mockCatCardProps.base,
} as ICatCard;
