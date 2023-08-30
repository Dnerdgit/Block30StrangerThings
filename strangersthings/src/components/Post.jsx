import { useEffect, useState } from "react";

const COHORT = "2302-ACC-CT-WEB-PT-A";
const BASE_URL = `https://strangers-things.herokuapp.com/api/2302-acc-ct-web-pt-a/`;

const Posts = ({ token }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAllPosts() {
      try {
        const fetchObj = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };

        if (token) {
          fetchObj.headers["Authorization"] = `Bearer ${token}`;
        }
        console.log(fetchObj);
        const response = await fetch(
          `https://strangers-things.herokuapp.com/api/2302-acc-ct-web-pt-a/posts`,
          fetchObj
        );

        const result = await response.json();
        console.log(result);
        setPosts(result.data.posts);
        console.log(result.data.posts);
      } catch (err) {
        console.error(err);
      }
    }
    fetchAllPosts();
  }, []);

  return (
    <div className="fetchAllPosts">
      {posts.map((post, i) => {
        return (
          <div key={i}>
            <p>
              {post.author.username} <br />
              {post.description} <br />
              {post.location} <br />
              {post.messages}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
