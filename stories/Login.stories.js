// Button.stories.js

import React from 'react';

import Teste from '../app/components/teste';

export default {
  title: 'Example/Test',
  component: Teste
};

const Template = (args) => <Teste {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  email: '',
};