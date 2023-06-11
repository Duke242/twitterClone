import React from 'react'
import './Post.css'; 
import { RxAvatar } from 'react-icons/rx';
import { GoVerified } from 'react-icons/go';
import { BsRepeat } from 'react-icons/bs'
import { ImBubble } from 'react-icons/im'
import { MdOutlineFavoriteBorder, MdPublish } from 'react-icons/md'

function Post({
    displayName,
    username,
    verified,
    avatar,
    text,
    image
}) {
  return (
    <div className='post'>
      <div className='post__avatar '>
        <RxAvatar size={40}/>
      </div>
      <div className='post__body'>
        <div className='post__header'>
            <div className='post__headerText'>
                <h3>
                    Rafeh Qazi 
                    <span className='post__headerSpecial'>
                        <GoVerified  className='post__badge'/> @cleverProgrammer
                    </span>
                </h3>
            </div>
            <div className='post__headerDescription'>
                <p>I challenge you to build a twitter clone</p>
            </div>
        </div>
        <img src='https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif' alt='GIP'/>
        <div className='post__footer'>
            <BsRepeat className='post__icon'/>
            <MdOutlineFavoriteBorder className='post__icon'/>
            <MdPublish className='post__icon'/>
            <ImBubble className='post__icon'/>
        </div>
      </div>
    </div>

  )
}

export default Post
