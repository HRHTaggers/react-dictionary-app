import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [word, setWord] = useState("");

    function handleWord (event) {
        setWord(event.target.value);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${word}...`);
    }
    
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" placeholder="Enter word" onChange={handleWord} />
            </form>
        </div>
    );
}