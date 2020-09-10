import React from 'react'

const About = ({ history }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
      fontFamily: 'sans-serif',
      background: '#b8b8b8'
    }}>
      <div>About</div>
      <button onClick={() => history.push('/')}>go to page Home</button>
    </div>
  )
}

export default About