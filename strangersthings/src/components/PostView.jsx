//IMPORT FETCH POSTS FUNCTION and required hooks
import fetchPosts from "../API/apiurl";
import { useState, useEffect } from "react";

export default function PostView() {
    //using useState hook, create variables to hold posts and set players
    const [posts, setPosts] = useState([]);
    const [searchPost, setSearchPost] = useState(""); //store search words in the post search bar in this state

    //Matched a post to the search bar word
    function postSame(post, word) {
        //return true if any of the fields include the text
    }

    const filteredPosts = posts.filter((post) => postSame(post, searchPost));
    const postsToShow = searchPost.length ? filteredPosts : posts;

    //call useEffect hook 
    useEffect( () => {
        //Async function to call fetch posts
        async function Posts() {
            //fetch and return an array of objects
            try {
                //gets array of post objects returned from fetch posts
                const postObj = await fetchPosts();
                //set the state
                setPosts(postObj);
                console.log("POSTS", postObj);
            }
            catch(error) {
                console.log("Error setting posts state", error);
            }
        }
            Posts();
    }, []);

    return (
    <>
            {/* FORM TO SEARCH FOR A POST */}
            <div className="posts-navbar">
                <form>
                    <label className="search-form-label">
                        <h2> Posts </h2> 
                        <input className="posts-search-bar" value={searchPost} onChange={(e) => setSearchPost(e.target.value)} placeholder="Search Posts"  /> 
                    </label><br/>
                </form>
            </div>

        {/* MAP OVER THE POSTS ARRAY AND RENDER IT */}
        <div className="posts-container"> 
            { /* start of js */

                postsToShow.map((post, key) => {
                    //return this div
                    return (
                        <div key={key} className="post">
                            <h2> {post.title} </h2>
                            <p> {post.description} </p>
                            <p id="post-keys">Price: {post.price} </p>
                            <p id="post-keys"> Seller: {post.author.username} </p>
                            <p id="post-keys"> Location: {post.location} </p>

                        </div>
                    )
                }) 
                /* end of js */
            } 
        </div>

    </>
    )


}
