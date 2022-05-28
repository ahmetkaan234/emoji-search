import React from 'react'
import Footer from './components/Footer'
import EmojiList from './components/EmojiList'
import EmojiContextProvider from './context/EmojiContext'


const App = () => {
  return (
    <div  className='h-screen'>
    <Footer/>
    <EmojiContextProvider>
    <EmojiList/>
    </EmojiContextProvider>
    </div>



  )
}

export default App
