import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
    console.log(props.results);
    if(props.results) {
    return (
        <div className="Results">
            <h2 className="Results__word">{props.results.word}
            </h2>
            <div className="Results__phonetics">
            <h3 className="Results__phonetics--heading">Pronunciation:</h3>
                {props.results.phonetics.map((phonetic,index) => {
                    return(
                        <div key={index}>
                            <Phonetic phonetic={phonetic} />
                        </div>
                    );
                })}
            </div>
            <br />
            {props.results.meanings.map((meaning,index) => {
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>    
                )      
            })}
        </div>
    );
    } else {
        return (null);
    }
}