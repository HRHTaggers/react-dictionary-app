import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [word, setWord] = useState(props.defaultKeyword);
    let [results, setResults] = useState("");
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleWord (event) {
        setWord(event.target.value);
    }

    function handleResponse(response) {
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
      //documentation https://api.dictionaryapi.dev
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      axios.get(apiUrl).then(handleResponse);

      let pexelsApiKey = `563492ad6f91700001000001b3bbd295eb784d3fb88c2d12a60ca500`;
      let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=4`;
      let headers = { Authorization: `Bearer ${pexelsApiKey}` };
      axios.get(pexelsApiUrl, {headers: headers,}).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {

    return (
        <div className="Dictionary">
            <form className="Dictionary__form" onSubmit={handleSubmit}>
                <input 
                    className="Dictionary__form--input" 
                    type="search" 
                    defaultValue={word}
                    onChange={handleWord} />
            </form>
            <div className="row">
                <div className="col-sm-8">
                <Results results={results}/>
                </div>
                <div className="col-sm-4">
                <Photos photos={photos} />
                </div>
            </div>
        </div>
    );
}  else {
    load();
    return ("Loading...");
}
}