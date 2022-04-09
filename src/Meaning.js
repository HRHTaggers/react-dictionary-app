import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map((definition, index) => {
            return (
                <div key={index}>
                    <p>
                        {definition.definition}
                    </p>
                    <p className="Meaning__example">
                        <em>{definition.example}</em>
                    </p>
                    <Synonyms synonyms={definition.synonyms} />
                    <br />
                </div>
            );
        })}
      </div>
    );
}