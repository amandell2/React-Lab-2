import React from "react";
import { FormEvent, useState } from "react";
import './PostForm.css';
import Post from '../models/Post';


interface Props{
    onSubmit: (post: Post) => void;
    onClose: () => void;
}


function PostForm({onSubmit, onClose}: Props){
    const [titleForm, setTitleForm] = useState('');
    const [thoughtForm, setThoughtForm] = useState('');

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        console.log("submitted")
        onSubmit({title:titleForm, thought:thoughtForm});
    }

    return(
        <div className = "PostForm__Container">
            <form onSubmit={handleSubmit}>
            <span>
            <button className="PostForm__closeButton" onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
                </button>
                <label htmlFor="PostForm__Title">Title</label>
            </span>
                <input id='PostForm__Title' required value ={titleForm}
                    onChange={e=>setTitleForm(e.target.value)}/>
                <label htmlFor="PostForm__thoughts">Thoughts</label>
                <input id="PostForm__thoughts" required value = {thoughtForm}
                    onChange = {e=>setThoughtForm(e.target.value)}/>
                <button className="PostForm__submitBtn" type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default PostForm;