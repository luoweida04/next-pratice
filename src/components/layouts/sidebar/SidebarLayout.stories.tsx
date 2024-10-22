import { Meta, StoryFn } from '@storybook/react';
import SidebarLayout, { ISidebarLayout } from './SidebarLayout';
import { mockSidebarLayoutProps } from './SidebarLayout.mock'; 

export default {
  title: 'layouts/SidebarLayout',
  component: SidebarLayout,
  argTypes: {},
} as Meta<typeof SidebarLayout>;

const Template: StoryFn<typeof SidebarLayout> = (args) => (
  <SidebarLayout {...args}/>
);

export const Base = Template.bind({});

Base.args = {
  ...mockSidebarLayoutProps.base,
} as ISidebarLayout;
