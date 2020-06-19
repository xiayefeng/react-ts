import * as React from "react";
import List from "./todolist/list";
import Action from "./todolist/action";
import { FriendItem } from "./todolist/types";

interface IState {
  value: string;
  list: Array<FriendItem>;
}

class App extends React.Component<Object, IState> {
  public constructor(props: Object) {
    super(props);
    this.state = {
      value: "10",
      list: [
        { name: "anyuxuan", age: 32, id: 1 },
        { name: "react", age: 5, id: 2 },
        { name: "vue", age: 4, id: 3 },
      ],
    };
  }
  render() {
    const { value, list } = this.state;
    return (
      <>
        <List
          list={list}
          onDel={(index: number) => {
            console.log(index);
            list.splice(index, 1);
            this.setState({
              list,
            });
          }}
        />
        <Action
          value={value}
          onAdd={(value: string) => {
            // console.log(value)
            list.push({
              name: value,
              age: 10,
              id: list.slice(-1).length > 0 ? list.slice(-1)[0].id + 1 : 0,
            });
            this.setState({
              list,
              value: "",
            });
          }}
          onChange={(value: string) => {
            // console.log(value)
            this.setState({
              value,
            });
          }}
        />
      </>
    );
  }

  public componentDidMount() {
    // console.log('hello')
  }
}

export default App;
