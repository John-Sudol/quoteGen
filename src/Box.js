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
      loading: true
    };
    this.handleNewQuote = this.handleNewQuote.bind(this);
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

    //console.log(this.state.quotes);
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

  render() {
    if (this.state.loading === true) {
      return <h1>Loading</h1>;
    }
    return (
      <div id="quote-box" className="centerMe roboto ba dib">
        <p id="text" className="tc">
          " {this.state.quotes.quotes[this.state.counter].quote} "
        </p>
        <p id="author" className="tr pr4">
          - {this.state.quotes.quotes[this.state.counter].author}
        </p>
        <div className="pa3 flex justify-between">
          <Button onToggleQuote={this.handleNewQuote} />
        </div>
      </div>
    );
  }
}
export default Box;
