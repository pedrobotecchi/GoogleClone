// Button.stories.js

import React from 'react';

import LoginEmail from '../../app/components/loginEmail';
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Login/Email',
  component: LoginEmail,
  decorators: [withKnobs]
};

const Template = (args) => <LoginEmail {...args}/>;

export const Main = Template.bind({});
Main.args = {
};