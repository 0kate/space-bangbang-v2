import React from 'react';

import TitleScene from '../components/scenes/TitleScene/TitleScene';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Scenes/TitleScene',
  component: TitleScene,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template = (args) => <TitleScene />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'TitleScene',
};

/* export const Secondary = Template.bind({});
* Secondary.args = {
*     label: 'TitleScene',
* };
*
* export const Large = Template.bind({});
* Large.args = {
*     size: 'large',
*     label: 'TitleScene',
* };
*
* export const Small = Template.bind({});
* Small.args = {
*     size: 'small',
*     label: 'TitleScene',
* }; */
