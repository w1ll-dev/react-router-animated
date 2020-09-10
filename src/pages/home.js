import React from 'react'

const Home = ({ history }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
      fontFamily: 'sans-serif'
    }}>
      <div>Home</div>
      <button onClick={() => history.push('/About')}>go to page About</button>
    </div>
  )
}


export default Home