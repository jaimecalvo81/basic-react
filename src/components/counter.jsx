import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  // 	super();
  // 	this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  // 	console.log('clickewd');
  // }
  // this code is replaced by = () =>

  // handleIncrement = () => {
  // 	this.setState({ value: this.state.value + 1 });
  // };

  componentDidUpdate(prevProps, PrevState) {
    //console.log(prevProps);
    //console.log(PrevState);
    // if (prevProps.counter.value !== this.props.counter.value) {
    // value has changed to something, maybe a Ajax.
    //}
  }

  componentWillUnmount() {
    // clean values with delete
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onhandleIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
