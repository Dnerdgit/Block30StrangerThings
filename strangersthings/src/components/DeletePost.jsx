const deletePost = async (token) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2302-acc-ct-web-pt-a/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
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
  <button className="delete" type="button">
    Delete
  </button>
);
