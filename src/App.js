import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

import "./App.css";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 4 }, { id: 2, value: 0 }, { id: 3, value: 0 }],
    tags: ["tag1", "tag2", "tag3", "#"],
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 14
  };

  constructor(props) {
    super(props);
    // console.log('will run first');
    //this.state = this.props.something;
  }

  componentDidMount() {
    // Ajax Call to get variable
    // this.setState({ variable })
    // console.log('will run last');
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>no tags</p>;
    }
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    // console.log('will run second');

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
          {this.state.tags.length === 0 && "Please create tag"}
          {this.renderTags()}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
