import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
    if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <a
          className="Phonetic__audio"
          href={props.phonetic.audio}
          target="_blank"
        >
          <i class="fa-solid fa-ear-listen"></i>
        </a>
        {" "}{" "}
        {props.phonetic.text}
      </div>
    );
    } else {
        return (null);
    }
}