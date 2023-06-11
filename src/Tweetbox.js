import React from 'react'
import './Tweetbox.css'
import { RxAvatar } from "react-icons/rx"

function Tweetbox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
            <RxAvatar size={40}/> 
            <input type='text' placeholder="What's happening?" />
        </div>
        <input className='tweetBox__imageInput' type='text' placeholder="Optional: Enter image URL" />
        <button className='tweetBox__tweetButton' type='submit'>Tweet</button>
      </form>
    </div>
  )
}

export default Tweetbox
