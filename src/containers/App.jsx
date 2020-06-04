import React, { Component } from "react";
import CardList from "../components/card-list/card-list.component";
import Header from "../components/header/header.component";
import SearchBox from "../components/search-box/search-box.component";
import Scroll from "../components/scroll/scroll.component";
import ErrorBoundary from "../components/error-boundary/error-boundary.component";
import "./App.css";

import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../redux/actions";

// What pieces of state I should listen to
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

// What props that are actions to be dispatched should I listen to
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     // searchField: "",
  //   };
  // }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => this.setState({ robots: users }));

    this.props.onRequestRobots();
  }

  // onSearchChange = (e) => {
  //   this.setState({
  //     searchField: e.target.value,
  //   });
  // };

  render() {
    // const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} searchField={searchField} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );

    // return !robots.length ? (
    //   <h1>Loading...</h1>
    // ) : (
    //   <div className="tc">
    //     <Header />
    //     <SearchBox searchChange={onSearchChange} />
    //     <Scroll>
    //       <ErrorBoundary>
    //         <CardList robots={filteredRobots} searchField={searchField} />
    //       </ErrorBoundary>
    //     </Scroll>
    //   </div>
    // );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
