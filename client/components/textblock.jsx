import React from 'react';

export default class Textblock extends React.Component {
  constructor(props) {
    super(props);
    this.style = 'text-block'
  }

  render() {
    return (
      <div className={this.props.style}>
        {
          this.props.content.title &&
          <h2>{this.props.content.title}</h2>
        }
        <h3>{this.props.content.paragraph1}</h3>
        { this.props.content.paragraph2 &&
          <h3>{this.props.content.paragraph2}</h3>
        }
        {this.props.content.paragraph3 &&
          <h3>{this.props.content.paragraph3}</h3>
        }
      </div>
        )
  }
}
