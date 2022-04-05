import React from "react";
import { useState } from "react";
import './SocialPosts.css';
import PostInList from "./PostInList";
import PostForm from "./PostForm";
import Post from "../models/Post";

function SocialPosts(){
    const [posts, setPosts] = useState<Post[]>([
        {title:"Omg, it Works!", thought:"This was difficult but it finally works!"},
        {title: "Don't give up", thought:"It's okay to not know, but it's not okay to not try."}]);
    function handleAdd(post:Post){
        setPosts(prevPosts=>[...prevPosts, post]);
        setShowForm(false);
    }

    function handleDelete(i: number){
        setPosts(prevPosts=>[...prevPosts.slice(0,i), ...prevPosts.slice(i+1)]);
    }
    
    const [showForm, setShowForm] = useState(false);

    return(
        <div className = "SocialPosts">
            <header>My Thoughts</header>
            <section>
                <button className="SocialPosts_ThoughtBtn"onClick={()=>setShowForm(true)}>New Thought</button>
            </section>
            <main className = "SocialPosts_PostList">
                {/*Array of Posts that are dsiplayed*/}
                {posts.map((post, i)=> <PostInList post={post} onDelete={()=> handleDelete(i)}/>)}
                
            </main>
            <div>
                {showForm && <PostForm onSubmit={handleAdd} onClose={()=>setShowForm(false)}/>}
            </div>
        </div>
    );
};

export default SocialPosts;