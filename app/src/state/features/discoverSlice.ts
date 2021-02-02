import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
      content: {}
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
      content: {}
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
          intro: 'Slow-carb craft beer ugh photo booth pickled. Biodiesel viral vape glossier, lo-fi snackwave kombucha put a bird on it austin wayfarers',
          user: {
            id: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
            name: 'Pippa Bricklebank',
          },
          date: '12 Mar 2020',
          type: 'review',
          content: {}
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
          content: {}
        },
      ],
    },
  ],
};

const discoverSlice = createSlice({
  name: 'discover',
  initialState: initialState,
  reducers: {}
})

export default discoverSlice.reducer
