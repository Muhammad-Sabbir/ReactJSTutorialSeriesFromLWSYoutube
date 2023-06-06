import React from 'react';

export default class Form extends React.Component {
  state = {
    title: 'JavaScript',
    text: 'JavaScript is Awesome',
    library: 'React',
    isAwesome: true,
  };
  handleChange = (e) => {
    // another smart example to check type:
    // this.setState({ [e.target.name]: e.target.value });

    //In details
    if (e.target.type === 'text') {
      console.log(e.target.value);
      this.setState({ title: e.target.value });
    }
    if (e.target.type === 'textarea') {
      console.log(e.target.value);
      this.setState({ text: e.target.value });
    }
    if (e.target.type === 'select-one') {
      console.log(e.target.value);
      this.setState({ library: e.target.value });
    }
    if (e.target.type === 'checkbox') {
      console.log(e.target.checked);
      this.setState({ isAwesome: e.target.checked });
    } else {
      console.log(e.target.value);
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { title, text, library, isAwesome } = this.state;
    console.log(title, text, library, isAwesome);
  };
  render() {
    const { title, text, library, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            name='title'
            type='text'
            placeholder='Enter title'
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea name='text' value={text} onChange={this.handleChange} />
          <br />
          <br />
          <select value={library} onChange={this.handleChange}>
            <option value='React'>React </option>
            <option value='Angular'>Angular </option>
          </select>
          <br />
          <br />
          <input type='checkbox' checked={isAwesome} onChange={this.handleChange} />
          <br />
          <br />
          <input type='submit' value='Submit' />
        </form>
        <p>{title}</p>
        <p>{text}</p>
      </div>
    );
  }
}
