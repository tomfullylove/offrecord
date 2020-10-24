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
          name: 'Tom Fully',
        },
        date: '22-04-2020',
        type: 'Article'
      },
      {
        id: 'c38d5280-667e-47e8-ad52-d983970c6ff2',
        title: 'Cornhole hexagon four dollar toast master cleanse',
        subTitle: 'Lorem ipsum dolor amet chicharrones punk meditation af marfa, cred green juice bluesy bottle',
        user: {
          id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
          name: 'Tom Fully',
        },
        date: '22-04-2020',
        type: 'Article'
      },
    ],
    featured: [
      {
        title: 'New releases in Cardiff',
        previews: [
          {
            id: 'c38d5280-667e-47e9-ad52-d980970c6ff2',
            title: 'Cornhole hexagon four dollar toast master cleanse',
            subTitle: 'Lorem ipsum dolor amet chicharrones punk meditation af marfa, cred green juice bluesy bottle',
            user: {
              id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
              name: 'Tom Fully',
            },
            type: 'Review'
          },
          {
            id: 'c38d5280-667e-47e9-ad52-d980970c6ff4',
            title: 'Cornhole hexagon four dollar toast master cleanse',
            subTitle: 'Lorem ipsum dolor amet chicharrones punk meditation af marfa, cred green juice bluesy bottle',
            user: {
              id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
              name: 'Tom Fully',
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
