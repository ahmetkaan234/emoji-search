import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
export const EmojiContext = createContext();



const EmojiContextProvider = (props) => {
    const [emoji, setEmoji] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")


    const getData = async () => {
        await axios.get("http://localhost:3000/emoji")
            .then(response => {
                setEmoji(response.data)
            }
            )
    }

    useEffect(() => {

        getData();

    }, [])

    const searchEmoji = (e)=>{
        setSearchQuery(e.target.value)


    }

  



    return (
        <EmojiContext.Provider value={{ emoji,searchEmoji,searchQuery }} >
            {props.children}
        </EmojiContext.Provider>

    )




}

export default EmojiContextProvider;