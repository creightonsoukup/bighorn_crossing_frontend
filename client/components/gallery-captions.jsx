import React from 'react';
import galleries from '../content/images';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: '',
      position: 0,
      caption: ''
    }

    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  componentWillMount() {
    this.setState({imageUrl: this.props.images[0].imageUrl, position: this.props.images[0].position, caption: this.props.images[0].caption})
  }

  nextImage() {
    let lastPosition = this.props.images.length - 1
    if (this.state.position === lastPosition) {
      this.setState({
        imageUrl: this.props.images[0].imageUrl,
        position: this.props.images[0].position,
        caption: this.props.images[0].caption
      })
      return
    }
    let nextPosition = this.state.position + 1
      this.setState({
        imageUrl: this.props.images[nextPosition].imageUrl,
        position: this.props.images[nextPosition].position,
        caption: this.props.images[nextPosition].caption
      })
    return
  }

  previousImage() {
    let lastPosition = this.props.images.length - 1
    if (this.state.position === 0) {
      this.setState({
        imageUrl: this.props.images[lastPosition].imageUrl,
        position: this.props.images[lastPosition].position,
        caption: this.props.images[lastPosition].caption
      })
    return
    }
    let previousPosition = this.state.position - 1
    this.setState({
        imageUrl: this.props.images[previousPosition].imageUrl,
        position: this.props.images[previousPosition].position,
        caption: this.props.images[previousPosition].caption
    })
    return
  }


  render() {
    return(
      <div className='gallery-captions'>
        <div className='gallery-controls'>
          <span onClick={this.previousImage}><img  className='arrows' src={require('./../assets/arrow-left.png')}/></span>
          <div className='images'>
            <img src={this.state.imageUrl}/>
          </div>
          <span onClick={this.nextImage}><img className='arrows'  src={require('./../assets/arrow-right.png')}/></span>
        </div>
        <div className='caption'>
          <p>{this.state.caption}</p>
        </div>
      </div>
    )
  }
}
