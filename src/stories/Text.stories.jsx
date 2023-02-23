import React from 'react';
import { Text } from './Text';

export default {
  title: 'Mat/Text',
  component: Text
};

const Template = (args) => <Text {...args} />;

export const TextBody = Template.bind({});