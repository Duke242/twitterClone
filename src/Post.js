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
                    {displayName} 
                    <span className='post__headerSpecial'>
                        {verified && <GoVerified  className='post__badge'/>} {username}
                    </span>
                </h3>
            </div>
            <div className='post__headerDescription'>
                <p>{text}</p>
            </div>
        </div>
        <img src={image} alt='GIP'/>
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
