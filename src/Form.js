import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      formData: {
        gender: '',
        name: '',
        age: '',
        date: '',
        country: ''
      },
      isSubmit: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isSubmit: true
    });
  };

  handleChange = (e) => {
    console.log(e.target.value);

    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value }
    });
    this.setState({
      isSubmit: false
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <p>Select a gender:</p>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={this.handleChange}
              required
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={this.handleChange}
              required
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              value={this.state.formData.age}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="countries">Date:</label>
            <input
              name="date"
              id="date"
              type="date"
              value={this.state.formData.date}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="country">Choose a country:</label>
            <select
              name="country"
              id="country"
              onChange={this.handleChange}
              required
            >
              <option disabled selected value>
                {' '}
                -- select an option --{' '}
              </option>

              <option value="france">France</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="tunisia">Tunisia</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          {this.state.isSubmit && (
            <table>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Dream Country</th>
                <th>Gender</th>
                <th>Date</th>
              </tr>
              <tr>
                <td>{this.state.formData.name}</td>
                <td>{this.state.formData.age}</td>
                <td>{this.state.formData.country}</td>
                <td>{this.state.formData.gender}</td>
                <td>{this.state.formData.date}</td>
              </tr>
            </table>
          )}
        </div>
      </>
    );
  }
}

export default Form;
