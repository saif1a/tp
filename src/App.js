import React from 'react';
import axios from 'axios';
import Form from './Form';
import Main from './components/Main';

function List(props) {
  let items = props.items
    ? props.items.map((item) => <ListItem key={item} text={item} />)
    : [];
  return <ol>{items}</ol>;
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
    // this.handleClick = this.handleClick.bind(this);
  }

  getUsers = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      console.log('response.data.results', response.data);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount = async () => {
    let users = await this.getUsers();
    console.log(users);
    this.setState({
      users
    });
  };

  componentWillUnmount() {}

  handleClick = (event) => {
    event.preventDefault();
    // console.log(event)
    this.setState((state) => ({
      count: state.count + 1
    }));
  };

  handleInputChange = (event) => {
    event.preventDefault();
    // console.log(e);
    this.setState({ value: event.target.value.toUpperCase() });
  };
  render() {
    let items = this.state.users
      ? this.state.users.map((user) => user.name.first)
      : [];
    console.log(items);
    return (
      <React.Fragment>
        <input value={this.state.value} onChange={this.handleInputChange} />
        <br />
        Hi! This is test. It has {this.state.count} elements. &nbsp;
        <button onClick={this.handleClick}>-1</button>
        &nbsp;
        <button onClick={this.handleClick}>+1</button>
        <List items={items} {...this.state} />
      </React.Fragment>
    );
  }
}

function App() {
  return <Main />;
  // return <Form />;
  // return <MyComponent count={10} />;
}

export default App;
