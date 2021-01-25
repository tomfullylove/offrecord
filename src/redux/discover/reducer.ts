import {TEST_ACTION, DiscoverState, ConfigActionTypes} from './types';

const initialState = {
  standard: [
    {
      id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
      title: 'Cornhole hexagon four dollar toast master cleanse',
      intro: 'Lorem ipsum dolor amet chicharrones punk meditation af marfa, cred green juice bluesy bottle',
      user: {
        id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
        name: 'Tom Fullylove',
      },
      date: '22 Apr 2020',
      type: 'article',
      content: {}
    },
    {
      id: 'c38d5280-667e-47e8-ad52-d983970c6ff2',
      title: 'Cornhole hexagon four dollar toast master cleanse',
      intro: 'Lorem ipsum dolor amet chicharrones punk meditation af marfa, cred green juice bluesy bottle',
      user: {
        id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
        name: 'Tom Fullylove',
      },
      date: '17 Apr 2020',
      type: 'review',
      content: {}
    },
    {
      id: 'c38d5280-667e-48e8-ad52-d983970c6ff2',
      title: 'Cornhole hexagon four dollar toast master cleanse',
      intro: 'Lorem ipsum dolor amet chicharrones punk meditation af marfa, cred green juice bluesy bottle',
      user: {
        id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
        name: 'Tom Fullylove',
      },
      date: '17 Apr 2020',
      type: 'interview',
      content: {}
    },
  ],
  featured: [
    {
      title: 'New releases for you',
      previews: [
        {
          id: 'c38d5280-667e-47e9-ad52-d980970c6ff2',
          title: 'Cornhole hexagon four dollar toast master cleanse',
          intro: 'Lorem ipsum dolor amet chicharrones punk meditation af marfa, cred green juice bluesy bottle',
          user: {
            id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
            name: 'Tom Fullylove',
          },
          type: 'review'
        },
        {
          id: 'c38d5280-667e-47e9-ad52-d980970c6ff4',
          title: 'Cornhole hexagon four dollar toast master cleanse',
          intro: 'Lorem ipsum dolor amet chicharrones punk meditation af marfa, cred green juice bluesy bottle',
          user: {
            id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
            name: 'Tom Fullylove',
          },
          type: 'article',
          content: {}
        },
      ],
    },
  ],
};

function discover(state = initialState, action: ConfigActionTypes) {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        test: action.value,
      };
    default:
      return state;
  }
}

export default discover;
