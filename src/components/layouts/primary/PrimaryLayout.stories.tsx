import { Meta, StoryFn } from '@storybook/react';
import PrimaryLayout, { IPrimaryLayout } from './PrimaryLayout';
import { mockPrimaryLayoutProps } from './PrimaryLayout.mocks'; 

export default {
  title: 'layouts/PrimaryLayout',
  component: PrimaryLayout,
  argTypes: {},
} as Meta<typeof PrimaryLayout>;

const Template: StoryFn<typeof PrimaryLayout> = (args) => (
  <PrimaryLayout {...args}/>
);

export const Base = Template.bind({});

Base.args = {
  ...mockPrimaryLayoutProps.base,
} as IPrimaryLayout;
