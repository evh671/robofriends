import React, { Component } from "react";
import CardList from "../components/card-list/card-list.component";
import Header from "../components/header/header.component";
import SearchBox from "../components/search-box/search-box.component";
import Scroll from "../components/scroll/scroll.component";
import ErrorBoundary from "../components/error-boundary/error-boundary.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    const { searchField, robots } = this.state;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} searchField={searchField} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
