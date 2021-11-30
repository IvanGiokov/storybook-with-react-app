import React from 'react';
import CardList from './CardList';
import * as CardStories from './Card.stories'

export default {
    component: CardList,
    title: 'CardList',
    //   decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = args => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in task.stories.js.
    zendesk: [
        {
            ...CardStories.Default.args.data,
            name: 'Tickets Opened',
            subTitle: 'last 7 days',
            current: 123,
            values: [123, 321, 123, 123],
        },
        {
            ...CardStories.Default.args.data,
            name: 'Tickets Closed',
            subTitle: 'last 7 days',
            current: 123,
            values: [123, 321, 123, 123],
        },
        {
            ...CardStories.Default.args.data,
            name: 'Average Solved Time',
            subTitle: 'last 7 days',
            current: 123,
            values: [123, 321, 123, 123],
        },
        {
            ...CardStories.Default.args.data,
            name: 'Average First Response',
            subTitle: 'last 7 days',
            current: 123,
            values: [123, 321, 123, 123],
        },
        {
            ...CardStories.Default.args.data,
            name: 'Tickets With Activity',
            subTitle: 'last 7 days',
            current: 123,
            values: [123, 321, 123, 123],
        },
        {
            ...CardStories.Default.args.data,
            name: 'Tickets Opened And Closed',
            subTitle: 'last 7 days',
            current: 123,
            values: [123, 321, 123, 123],
        },
    ],
};
