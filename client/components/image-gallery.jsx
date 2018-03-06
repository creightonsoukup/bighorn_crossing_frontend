import React from 'react';


export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageUrl:'',
                  position: 0,
                  initialLoad: true
                }
    this.changeUrl = this.changeUrl.bind(this)
  }

  componentWillMount() {
    this.setState({imageUrl: this.props.images[0].imageUrl, position: this.props.images[0].position, kenBurns: 'imageContainer'})
  }
  componentDidMount() {
    setInterval(this.changeUrl, 5000);
  }

  changeUrl() {
    if (this.state.initialLoad == true) {
      this.setState({initialLoad: false})
      return
    }
    if (this.state.position === 0) {
      this.setState({imageUrl: this.props.images[1].imageUrl, position: this.props.images[1].position})
      return
    }
    if (this.state.position === 1 && this.props.images[2]) {
      this.setState({imageUrl: this.props.images[2].imageUrl, position: this.props.images[2].position})
      return
    } else {
      this.setState({imageUrl: this.props.images[0].imageUrl, position: this.props.images[0].position})
      return
    }
    if (this.state.position === 2) {
      this.setState({imageUrl: this.props.images[0].imageUrl, position: this.props.images[0].position})
      return
    }
  }


  render() {
    return (
      <div className='image-gallery'>
        <img src={ this.state.imageUrl } />
        
      </div>
    )
  }
}
