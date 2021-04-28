import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  content: {
    standard: [
      {
        id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
        title: 'Fixie meggings williamsburg chambray authentic, aesthetic cray cred ramp',
        intro: 'Thundercats viral enamel pin, williamsburg hella blog bicycle rights before they sold out fam hell of. Vape messenger bag blue bottle pug fam fingerstache beard unicorn.',
        user: {
          id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
          name: 'Tom Fullylove',
        },
        date: '22 Apr 2020',
        type: 'article',
        content: [
          {"type": "text", "text": "Truffaut austin chia thundercats selfies. Echo park dreamcatcher 3 wolf moon mustache. Pickled sriracha try-hard la croix shaman pop-up plaid slow-carb subway tile. Man braid +1 scenester yuccie unicorn. Iceland jean shorts church-key XOXO man braid"},
          {"type": "subTitle", "text": "Fixie meggings williamsburg chambray authentic, aesthetic cray cred."},
          {"type": "text", "text": "Tote bag etsy chambray, waistcoat post-ironic mlkshk shabby chic taiyaki irony you probably haven't heard of them cray. Offal leggings cornhole pour-over 3 wolf."},
          {"type": "text", "text": "Master cleanse venmo irony raw denim palo santo, heirloom kale chips deep v chia slow-carb. Cliche cornhole mlkshk paleo put a bird on it. Bicycle rights semiotics brooklyn vaporware art party, roof party lyft. Slow-carb craft beer ugh photo booth pickled. Biodiesel viral vape glossier, lo-fi snackwave kombucha put a bird on it austin wayfarers."},
          {"type": "subTitle", "text": "Fixie meggings williamsburg chambray authentic, aesthetic cray cred."},
          {"type": "text", "text": "Thundercats viral enamel pin, williamsburg hella blog bicycle rights before they sold out fam hell of."},
          {"type": "text", "text": "Vape messenger bag blue bottle pug fam fingerstache beard unicorn. You probably haven't heard of them wolf la croix semiotics heirloom fingerstache."}
        ]
      },
      {
        id: 'c38d5280-667e-47e8-ad52-d983970c6ff2',
        title: 'Master cleanse venmo irony raw denim palo santo, heirloom kale',
        intro: 'Activated charcoal seitan mlkshk, letterpress wolf +1 raw denim. Church-key cred four loko plaid drinking vinegar. Helvetica pinterest bushwick bicycle rights.',
        user: {
          id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
          name: 'Dan Gilman',
        },
        date: '17 Apr 2020',
        type: 'review',
        content: [
          {"type": "text", "text": "Master cleanse venmo irony raw denim palo santo, heirloom kale chips deep v chia slow-carb. Cliche cornhole mlkshk paleo put a bird on it. Bicycle rights semiotics brooklyn vaporware art party, roof party lyft. Slow-carb craft beer ugh photo booth pickled."},
          {"type": "subTitle", "text": "Fixie meggings williamsburg chambray authentic, aesthetic cray cred."},
          {"type": "text", "text": "Humblebrag 90's pour-over actually af master cleanse umami hashtag truffaut. Activated charcoal seitan mlkshk, letterpress wolf +1 raw denim."},
          {"type": "text", "text": "Master cleanse venmo irony raw denim palo santo, heirloom kale chips deep v chia slow-carb. Cliche cornhole mlkshk paleo put a bird on it. Craft beer ugh photo booth pickled. Biodiesel viral vape glossier, lo-fi snackwave kombucha put a bird on it austin wayfarers."},
          {"type": "subTitle", "text": "Fixie meggings williamsburg chambray authentic, aesthetic cray cred."},
          {"type": "text", "text": "Thundercats viral enamel pin, williamsburg hella blog bicycle rights before they sold out fam hell of."},
          {"type": "text", "text": "Vape messenger bag blue bottle pug fam fingerstache beard unicorn. You probably haven't heard of them wolf la croix semiotics heirloom fingerstache."}
        ]
      },
      {
        id: 'c38d5280-667e-48e8-ad52-d983970c6ff2',
        title: 'Cloud bread snackwave live-edge, prism chia la croix',
        intro: 'Godard kogi heirloom pabst raw denim yuccie selfies retro franzen cronut humblebrag flexitarian lomo squid man bun. Lomo VHS unicorn typewriter, literally pickled readymade.',
        user: {
          id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
          name: 'Tyler Lewis',
        },
        date: '12 Mar 2020',
        type: 'article',
        content: [
          {"type": "text", "text": "Master cleanse venmo irony raw denim palo santo, heirloom kale chips deep v chia slow-carb. Cliche cornhole mlkshk paleo put a bird on it. Bicycle rights semiotics brooklyn vaporware art party, roof party lyft. Slow-carb craft beer ugh photo booth pickled."},
          {"type": "subTitle", "text": "Fixie meggings williamsburg chambray authentic, aesthetic cray cred."},
          {"type": "text", "text": "Humblebrag 90's pour-over actually af master cleanse umami hashtag truffaut. Activated charcoal seitan mlkshk, letterpress wolf +1 raw denim."},
          {"type": "text", "text": "Master cleanse venmo irony raw denim palo santo, heirloom kale chips deep v chia slow-carb. Cliche cornhole mlkshk paleo put a bird on it. Bicycle rights semiotics brooklyn vaporware art party, roof party lyft. Slow-carb craft beer ugh photo booth pickled. Biodiesel viral vape glossier, lo-fi snackwave kombucha put a bird on it austin wayfarers."},
          {"type": "subTitle", "text": "Fixie meggings williamsburg chambray authentic, aesthetic cray cred."},
          {"type": "text", "text": "Thundercats viral enamel pin, williamsburg hella blog bicycle rights before they sold out fam hell of."},
          {"type": "text", "text": "Vape messenger bag blue bottle pug fam fingerstache beard unicorn. You probably haven't heard of them wolf la croix semiotics heirloom fingerstache."}
        ]
      },
    ],
    featured: [
      {
        title: 'New releases for you',
        previews: [
          {
            id: 'c38d5280-667e-47e9-ad52-d980970c6ff2',
            title: 'Cornhole hexagon four dollar toast master cleanse',
            intro: 'Slow-carb craft beer ugh photo booth pickled. Biodiesel viral vape glossier, lo-fi snackwave kombucha put a bird on it austin wayfarers',
            user: {
              id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
              name: 'Pippa Bricklebank',
            },
            date: '12 Mar 2020',
            type: 'review',
            content: [
              {"type": "text", "text": "Master cleanse venmo irony raw denim palo santo, heirloom kale chips deep v chia slow-carb. Cliche cornhole mlkshk paleo put a bird on it. Bicycle rights semiotics brooklyn vaporware art party, roof party lyft. Slow-carb craft beer ugh photo booth pickled."},
              {"type": "subTitle", "text": "Fixie meggings williamsburg chambray authentic, aesthetic cray cred."},
              {"type": "text", "text": "Humblebrag 90's pour-over actually af master cleanse umami hashtag truffaut. Activated charcoal seitan mlkshk, letterpress wolf +1 raw denim."},
              {"type": "text", "text": "Master cleanse venmo irony raw denim palo santo, heirloom kale chips deep v chia slow-carb. Cliche cornhole mlkshk paleo put a bird on it. Bicycle rights semiotics brooklyn vaporware art party, roof party lyft. Slow-carb craft beer ugh photo booth pickled. Biodiesel viral vape glossier, lo-fi snackwave kombucha put a bird on it austin wayfarers."},
              {"type": "subTitle", "text": "Fixie meggings williamsburg chambray authentic, aesthetic cray cred."},
              {"type": "text", "text": "Thundercats viral enamel pin, williamsburg hella blog bicycle rights before they sold out fam hell of."},
              {"type": "text", "text": "Vape messenger bag blue bottle pug fam fingerstache beard unicorn. You probably haven't heard of them wolf la croix semiotics heirloom fingerstache."}
            ]
          },
          {
            id: 'c38d5280-667e-47e9-ad52-d980970c6ff4',
            title: 'Humblebrag 90s pour-over actually af master cleanse umami hashtag truffaut',
            intro: 'Meditation leggings biodiesel VHS, locavore bicycle rights sartorial sustainable echo park poutine deep v butcher health goth mixtape. Thundercats viral enamel pin.',
            user: {
              id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
              name: 'Grace May',
            },
            date: '12 Mar 2020',
            type: 'article',
            content: [
              {"type": "text", "text": "Master cleanse venmo irony raw denim palo santo, heirloom kale chips deep v chia slow-carb. Cliche cornhole mlkshk paleo put a bird on it. Bicycle rights semiotics brooklyn vaporware art party, roof party lyft. Slow-carb craft beer ugh photo booth pickled."},
              {"type": "subTitle", "text": "Fixie meggings williamsburg chambray authentic, aesthetic cray cred."},
              {"type": "text", "text": "Humblebrag 90's pour-over actually af master cleanse umami hashtag truffaut. Activated charcoal seitan mlkshk, letterpress wolf +1 raw denim."},
              {"type": "text", "text": "Master cleanse venmo irony raw denim palo santo, heirloom kale chips deep v chia slow-carb. Cliche cornhole mlkshk paleo put a bird on it. Bicycle rights semiotics brooklyn vaporware art party, roof party lyft. Slow-carb craft beer ugh photo booth pickled. Biodiesel viral vape glossier, lo-fi snackwave kombucha put a bird on it austin wayfarers."},
              {"type": "subTitle", "text": "Fixie meggings williamsburg chambray authentic, aesthetic cray cred."},
              {"type": "text", "text": "Thundercats viral enamel pin, williamsburg hella blog bicycle rights before they sold out fam hell of."},
              {"type": "text", "text": "Vape messenger bag blue bottle pug fam fingerstache beard unicorn. You probably haven't heard of them wolf la croix semiotics heirloom fingerstache."}
            ]
          },
        ],
      },
    ],
  },
  loading: true,
  error: null
};

const discoverSlice = createSlice({
  name: 'discover',
  initialState: initialState,
  reducers: {
    getDiscoverContentStart(state) {
      state.error = null
      state.loading = true
    },
    getDiscoverContentSuccess(state, action) {
      const { content } = action.payload
      state.content = content
      state.loading = false
    },
    getDiscoverContentFailure(state, action) {
      const { error } = action.payload
      state.error = error
      state.loading = false
    }
  }
})

export const {
  getDiscoverContentStart,
  getDiscoverContentFailure,
  getDiscoverContentSuccess
} = discoverSlice.actions

export const getDiscoveryContent = () => async dispatch => {
  const user_id = '123';
  const url = `http://localhost:3000/dev/content/discovery/${user_id}`;

  dispatch(getDiscoverContentStart());
  fetch(url, {method: 'GET'}).then(response => response.json())
  .then(data => {
    dispatch(getDiscoverContentSuccess({content: data.content}));
  })
  .catch((error) => {
    dispatch(getDiscoverContentFailure(error));
  });
}

export default discoverSlice.reducer
