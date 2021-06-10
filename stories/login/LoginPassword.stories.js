// Button.stories.js

import React from 'react';

import LoginPassword from '../../app/components/loginPassword';
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Login/Password',
  component: LoginPassword,
  decorators: [withKnobs]
};

const Template = (args) => 
  <LoginPassword {...args} 
    email={text('Email', 'pbotecchi@daitan.com')}
    showPassword={boolean('showPassword', false)}
  />;

export const Main = Template.bind({});
Main.args = {
};