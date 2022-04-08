import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [word, setWord] = useState("");

    function handleWord (event) {
        setWord(event.target.value);
    }

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${word}...`);

        //documentation https://api.dictionaryapi.dev
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" placeholder="Enter word" onChange={handleWord} />
            </form>
        </div>
    );
}