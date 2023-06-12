import React from 'react'
import './Tweetbox.css'
import { RxAvatar } from "react-icons/rx"
import { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import db from './db';

//const docRef = await addDoc(collection(db, "cities"), {
//     name: "Tokyo",
//     country: "Japan"
//   });
//   console.log("Document written with ID: ", docRef.id);

function Tweetbox() {

  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')

  const sendTweet = (e) => {
      e.preventDefault()

      addDoc(collection(db, "posts"), {
        username: '00Duke',
        displayName: 'Duke',
        verified: true,
        message: tweetMessage,
        image: tweetImage,
      })

      setTweetMessage('')
      setTweetImage('')
    }

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
            <RxAvatar size={40}/> 
            <input 
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} 
            type='text' 
            placeholder="What's happening?" 
            />
        </div>
        <input
        value={tweetImage} 
        onChange={(e) => setTweetImage(e.target.value)}
        className='tweetBox__imageInput' 
        type='text' 
        placeholder="Optional: Enter image URL" 
        />
        <button 
        className='tweetBox__tweetButton' 
        type='submit'
        onClick={sendTweet}
        >Tweet</button>
      </form>
    </div>
  )
}

export default Tweetbox

