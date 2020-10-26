import {TEST_ACTION, DiscoverState, ConfigActionTypes} from './types';

const initialState = {
  content: {
    standard: [
      {
        id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
        title: 'Cornhole hexagon four dollar toast master cleanse',
        subTitle: 'Lorem ipsum dolor amet chicharrones punk meditation af marfa, cred green juice bluesy bottle',
        user: {
          id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
          name: 'Tom Fullylove',
        },
        date: '3 hours ago',
        type: 'Article'
      },
      {
        id: 'c38d5280-667e-47e8-ad52-d983970c6ff2',
        title: 'Cornhole hexagon four dollar toast master cleanse',
        subTitle: 'Lorem ipsum dolor amet chicharrones punk meditation af marfa, cred green juice bluesy bottle',
        user: {
          id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
          name: 'Tom Fullylove',
        },
        date: '2 days ago',
        type: 'Review'
      },
    ],
    featured: [
      {
        title: 'New releases for you',
        previews: [
          {
            id: 'c38d5280-667e-47e9-ad52-d980970c6ff2',
            title: 'Cornhole hexagon four dollar toast master cleanse',
            subTitle: 'Lorem ipsum dolor amet chicharrones punk meditation af marfa, cred green juice bluesy bottle',
            user: {
              id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
              name: 'Tom Fullylove',
            },
            type: 'Review'
          },
          {
            id: 'c38d5280-667e-47e9-ad52-d980970c6ff4',
            title: 'Cornhole hexagon four dollar toast master cleanse',
            subTitle: 'Lorem ipsum dolor amet chicharrones punk meditation af marfa, cred green juice bluesy bottle',
            user: {
              id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
              name: 'Tom Fullylove',
            },
            type: 'Review'
          },
        ],
      },
    ],
  }
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
