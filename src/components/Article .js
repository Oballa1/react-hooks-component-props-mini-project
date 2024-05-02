
import React from 'react';


const Article = ({ title, date, preview }) => {
    return (
        <article>
            <h3> {title} </h3>
            <small>{date ? date : 'April 16, 2000'}</small>
            <p> {preview} </p>
        </article>
    )
};

export default Article;
