import React from 'react';

export default function Button(props) {
  return <div className="pa3 flex justify-between">
      <div>
      <a href={"http://twitter.com/intent/tweet?text="+ props.quote + " - " +props.author}>
          <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib ">
            Tweet
          </button>
        </a>

        <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib ">
          Tumblr
        </button>
      </div>
    <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib " onClick={() =>{ 
      props.onToggleQuote()
      props.onToggleColor()}}>
        New Quote
      </button>
    </div>;
}
