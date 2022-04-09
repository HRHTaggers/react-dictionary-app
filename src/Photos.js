import React from "react";

export default function Photos(props) {
    if (props.photos) {
        return (
            <div className="Photos">
                <div className="Photos__row row">
                    {props.photos.map((photo, index) => {
                        return (
                            <img 
                                className="Photos__row--photo"
                                src={photo.src.landscape} 
                                key={index} 
                            />
                        );
                    })}
                </div>
            </div>
        );
    } else {
        return (null);
    }
}