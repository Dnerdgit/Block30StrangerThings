//API urls
const COHORT_NAME = '2302-ACC-CT-WEB-PT-A';

const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

//posts url
const allPosts = `${BASE_URL}/posts`;

/* FUNCTION TO FETCH POSTS FROM THE API AND RETURNS AN ARRAY OF POST OBJECTS*/
export default async function fetchPosts() {
    try {
        const response = await fetch(allPosts);
        const postsObjects = await response.json();
        console.log("POSTS in fetch", postsObjects.data.posts);
        return postsObjects.data.posts;
    }
    catch(error) {
        console.log("Problem fetching posts");
    }
}