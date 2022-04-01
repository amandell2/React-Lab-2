import React from "react";
import { useState } from "react";
import './SocialPosts.css';
import PostInList from "./PostInList";

function SocialPosts(){
    return(
        <div className = "SocialPosts">
            <header>My Thoughts</header>
            <section>
                <button>New Thought</button>
            </section>
            <main className = "SocialPosts_PostList">
                {/*Array of Posts that are dsiplayed*/}
                <PostInList/>
            </main>
        </div>
    );
};

export default SocialPosts;