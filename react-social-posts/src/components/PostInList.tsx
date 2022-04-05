import React from "react";
import { useState } from "react";
import './PostInList.css';
import Post from '../models/Post';
import PostForm from './PostForm'
import SocialPosts from './SocialPosts';

interface Props{
    post: Post;
    onDelete: ()=> void;
}

function PostInList({post, onDelete}: Props){
    
    return(
        <div className="PostInList__Container">
                <h1 className="PostInList--title">{post.title}</h1>
                <p className="PostInList--thought">{post.thought}</p>
                <button className = "PostInList--trash" onClick={onDelete}>
                    <i className="fa-solid fa-trash"></i>
                </button>
                
        </div>
    )
};

export default PostInList;
