import React from 'react';
import Card from './Card';

export default {
    component: Card,
    title: 'Card',
  };

  const Template = args => <Card {...args} />;

  export const Default = Template.bind({});
  Default.args = {
    data: {
        name: 'Tickets Opened',
        subTitle: 'last 7 days',
        current: 123,
        values: [123,321,123,123],
    },
  };
  
//   export const Pinned = Template.bind({});
//   Pinned.args = {
//     task: {
//       ...Default.args.task,
//       state: 'TASK_PINNED',
//     },
//   };
  
//   export const Archived = Template.bind({});
//   Archived.args = {
//     task: {
//       ...Default.args.task,
//       state: 'TASK_ARCHIVED',
//     },
//   };