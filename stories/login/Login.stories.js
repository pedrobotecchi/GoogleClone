// Button.stories.js

import React from 'react';

import Login from '../../app/pages/login';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Login/Login',
  component: Login,
  decorators: [withKnobs]
};

const Template = (args) => <Login {...args}/>;

export const Main = Template.bind({});
Main.args = {
};

// Knobs as dynamic variables.
export const asDynamicVariables = () => {
  const name = text('Name', 'James');
  const age = number('Age', 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};