import React, {Component} from 'react';
import './box.css';
import './Button';
import Button from './Button';
//import {quotes} from './quotes';

class Box extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      counter: 1,
      loading: true,
      color:'',
    };
    this.handleNewQuote = this.handleNewQuote.bind(this);
    this.handleNewColor = this.handleNewColor.bind(this);
  }
  componentDidMount() {
    fetch(
      'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    )
      .then(response => response.json())
      .then(quote => {
        console.log(quote);
        this.setState({
          quotes: quote,
          loading: false
        });
        console.log('Counter before ', this.state.counter);
        this.handleNewQuote();
        
        console.log('Counter after ', this.state.counter);
        console.log('State was set', this.state.quotes.quotes[1].quote);
      });

   
  }
  
  handleNewQuote() {
    console.log('hey');

    let newCounter = this.state.counter;
    console.log(newCounter);
    newCounter = Math.floor(Math.random() * 102 + 1);
    this.setState({
      counter: newCounter
    });
  }

  handleNewColor(){
    let color;
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(color);
    this.setState({
      color:color,
    })
  }

  render() {
    if (this.state.loading === true) {
      return (
       <div>
        <h1>Loading</h1>
       </div>
      )
    }
    let quote = this.state.quotes.quotes[this.state.counter].quote;
    let author = this.state.quotes.quotes[this.state.counter].author;
    let color = {
      color: this.state.color,
    };
    return(
      <div >
        <div id="quote-box" className={"centerMe indie ba dib"} style={ color }>
          <p id="text" className="tc">
            "{quote}"
          </p>
          <p id="author" className="tr pr4">
            - {author}
          </p>
          <Button quote={quote} author={author} onToggleQuote={this.handleNewQuote} onToggleColor={this.handleNewColor} />
        </div>
      </div>
    )
  }
}
export default Box;
