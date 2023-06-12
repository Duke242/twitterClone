import React, { useState, useEffect } from 'react';
import './Feed.css'
import Tweetbox from './Tweetbox';
import Post from './Post';
import db from './db';
import { collection, getDocs } from 'firebase/firestore';

function Feed(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getDocs(collection(db, "posts")).then((querySnapshot) => {
            const posts = querySnapshot.docs.map((doc) => doc.data());
            setPosts(posts);
        });
        }, []);


    return(
        <div className='feed'>
            <div className='feed__header'>
                <h2>Home</h2>
            </div>
            <Tweetbox />

            {posts.map(post => (
                <Post 
                displayName={post.displayName}
                username={post.username}
                image={post.image}
                text={post.text}
                verified={post.verified}
                avatar={post.avatar}
                />
            ))}

        </div>
    )
}

export default Feed;