import React, { useContext } from 'react'
import { EmojiContext } from '../context/EmojiContext'
import { TextField } from '@mui/material';




const Search = () => {

  const { searchEmoji } = useContext(EmojiContext);




  return (
    <div className='flex justify-center w-full pl-10 pr-10 m-2 ' >
      <form className='w-full ' >
        <TextField
          fullWidth
          color='secondary'
          label='Search a Emoji'
          id="fullWidth"
          onChange={searchEmoji} className='border  border-blue-600 p-2  rounded-sm  w-full  type="text" '
        />
      </form>




    </div>
  )
}

export default Search