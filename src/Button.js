import React from 'react';

export default function Button(props) {
  return (
    <div>
      <div>
        <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green">
          Tweet
        </button>

        <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green">
          Tumblr
        </button>
      </div>
      <button
        className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green"
        onClick={() => props.onToggleQuote}
      >
        New Quote
      </button>
    </div>
  );
}
