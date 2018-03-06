import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this)
  }

  renderList(item) {
    return (
        <li key={this.props.content.listItems.indexOf(item)}>{`${item}`}</li>
    )
  }

  render() {
    return (
      <div className={this.props.style}>
        <h3>{this.props.content.title}</h3>
        <p>{this.props.content.paragraph1}</p>
        <ul>
          {this.props.content.listItems.map(this.renderList)}
        </ul>
      </div>
    )
  }
}
