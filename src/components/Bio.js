import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Amelia Riely`}
          style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Short posts written by <strong>Amelia Riely</strong> from <a href="https://Recurse.com">Recurse Center</a>.{' '}
        <a href="https://twitter.com/ameliariely">
          You should follow her on Twitter
        </a>
      </p>
    )
  }
}

export default Bio
