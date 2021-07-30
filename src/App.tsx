import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

type MyState = { monsters: { name: string; id: number }[] };

class App extends Component<{}, MyState> {
  constructor(props: string) {
    super(props);

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
