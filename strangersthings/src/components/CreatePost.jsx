import { useState } from "react";

const createNewPost = async () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2302-acc-ct-web-pt-a/posts`,
      {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify({}),
      }
    );

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
return (
  <>
    <article>
      <h1>Create New Post</h1>
      <form action="" target="_blank" method="post">
        <label for="post">New Post:</label>
        <input type="text" id="post" name="post" value="" />
        <br />
        <input type="submit" value="submit" /> <br />
      </form>
    </article>
  </>
);
