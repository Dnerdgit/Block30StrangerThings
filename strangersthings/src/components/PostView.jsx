//IMPORT FETCH POSTS FUNCTION and required hooks
import fetchPosts from "../API/apiurl";
import { useState, useEffect } from "react";
import { useNavigate ,useParams } from "react-router-dom";


export default function PostView() {
    //using useState hook, create variables to hold posts and set players
    const [posts, setPosts] = useState([]);
    const [searchPost, setSearchPost] = useState(""); //store searched words in the post search bar in this state
    const newPostNav = useNavigate(); //navigate to add new post form
    const { id } = useParams; //getId post id

    //Matched a post to the search bar word
    function postSame(post, word) {
        //return true if any of the fields include the text
        if(word && word.trim().length > 0) {
            word = word.trim().toLowerCase();

            //shows all posts when search bar is empty, otherwise, display the matching fields
            return word === '' ? post : post.title.toLowerCase().includes(word);
        }
    }

    const filteredPosts = posts.filter((post) => postSame(post, searchPost));
    //if there is a text in the search bar, show filteredPosts else show all posts 
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
                <h1> Posts </h1> 
                <input className="posts-search-bar" value={searchPost} onChange={(e) => setSearchPost(e.target.value)} placeholder="Search Posts"  />
                <button className="add-post" /* onClick={ () => newPostNav(`/posts/${}`) } */> Add Post </button>  
            </div>
        
            {/* MAP OVER THE POSTS ARRAY AND RENDER IT */}
                {
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
                } 
    </>
    )


}
