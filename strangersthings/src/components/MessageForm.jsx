import { useState } from "react";

const COHORT_NAME = "2209-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function MessageForm({ token, setToken }) {
  // useState Hook captures the values of what users put on our form.
  const [content, setContent] = useState("");


  // handleSubmit captures when user submits a form
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        `${BASE_URL}/posts/POST_ID/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            message: {
              content: content            },
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setToken(result.token);
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="form-container">
      {/* Msg Form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="message"> Message: </label>

        <textarea
          name="message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="username"
          cols="44"
          rows="10"
          placeholder="Type message..."
          id="message"
        />
        {/* Submit button */}

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
