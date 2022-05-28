import React from 'react'
import Emoji from 'react-emojis';

const Footer = () => {
  return (
    <div  className='flex justify-center  m-4'>
        <Emoji  size='35'  emoji="grinning-cat" />
        <h1  className='text-4xl' >Emoji Search</h1>
        <Emoji  size='35'  emoji="smiling-cat-with-heart-eyes" />

    </div>
  )
}

export default Footer