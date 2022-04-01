import React from "react";
import { useState } from "react";
import './PostInList.css';
import Post from '../models/Post';

interface Props{
    post: Post;
    onDelete: ()=> void;
}

function PostInList(){
    return(
        <div className="PostInList">

        </div>
    );
};

export default PostInList;
