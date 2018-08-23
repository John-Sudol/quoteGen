import React from 'react';
import './box.css';

const Box = ({quote, author}) => {
  return (
    <div id="quote-box" className="centerMe roboto ba dib">
      <p id="text" className="tc">
        " {quote}
      </p>
      <p id="author" className="tr pr4">
        - {author}
      </p>
      <div className="pa3 flex justify-between">
        <div className="">
          <button
            id="tweet-quote"
            className="f6 link dim br2 ph3 pv2 mb2 dib white bg-blue"
          >
            Tweet
          </button>
          <button
            id="tweet-quote"
            className="f6 link dim br2 ph3 pv2 mb2 dib white bg-blue"
          >
            Tumblr
          </button>
        </div>
        <button
          id="new-quote"
          className="f6 link dim br2 ph3 pv2 mb2 dib white bg-blue"
        >
          New Quote
        </button>
      </div>
    </div>
  );
};
export default Box;
