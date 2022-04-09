import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
    if (props.synonyms) {
    return (
            <ul className="Synonyms__list">
                {props.synonyms.map((synonym, index) => {
                    return (
                        <li className="Synonyms__list-item" key={index}>
                            {synonym}
                        </li>
                    );
                })}
            </ul>
    );
    } else {
        return (null);
    }
}