import React, { Component } from "react";
import "./error-boundary.styles.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) return <h1>Can't load cards.</h1>;

    return this.props.children;
  }
}

export default ErrorBoundary;
