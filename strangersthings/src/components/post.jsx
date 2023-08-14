import { useState, useEffect } from "react";
// import { PostsData } from "./App.jsx"

export default function SearchPosts() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function getNotes() {
            const response = await PostsData();

            setNotes(response);
        }
        getNotes();
    }, [])
    console.log(notes, "notes")


    return (
        <div className="fetchPosts">
                {notes.map((note) => {
                    return (
                        <form method="GET">
                            <div key = {note._id}>
                                 <ul className='postedNoted'>
                                    <h2>{note.title}</h2><br/>
                                    <p>{note.description}</p><br/>
                                    <li>Sales Person: {note.author.username}</li><br/>
                                    <li>Asking Price: {note.price}</li><br/>
                                    <li>Meeting Location: {note.location}</li>
                                </ul>   
                            </div>
                        </form>
                        )
                    }
                )
            }
        </div>
    )
}
