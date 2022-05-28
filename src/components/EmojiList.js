import React, { useContext } from 'react'
import Search from './Search';
import { EmojiContext } from '../context/EmojiContext';



const EmojiList =  () => {

  const {emoji,searchQuery} = useContext(EmojiContext);

  console.log(searchQuery)

  const filteredEmoji =  emoji.filter(
      (emo)=>{
        const a = emo.title.toLowerCase().search(searchQuery.toLowerCase());
        if(a !== -1)
          return emo;
      }

  )

  console.log(filteredEmoji)




  return (
    <div className='flex flex-col justify-center w-full pl-10 pr-10 m-2' >
        <Search/>
    
      {
          filteredEmoji.map((emoj,id) =>(
            <div key={id}   className='flex border-b cursor-pointer hover:bg-slate-200  p-1 bg-slate-100'  >

              <a  href='#' className='text-4xl '  >{emoj.symbol} </a>
              <a  href='#' className='text-xl'  >{emoj.title} </a>
          
              
            </div>


          ) )


      }
      


    </div>
  )
}

export default EmojiList;