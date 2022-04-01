import React from "react";
import { useState } from "react";
import './PostForm.css';
import Post from '../models/Post';

interface Props{
    onSubmit: (post: Post) => void;
    onClose: () => void;
}

function PostForm(){
    return(
        <div className = "PostForm">
            <form>

            </form>
        </div>
    )
}