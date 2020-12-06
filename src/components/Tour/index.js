import React, { Component } from 'react'
import './Tour.scss'
import { FaWindowClose } from 'react-icons/fa'
import { FaCaretSquareDown } from 'react-icons/fa'

export default class Tour extends Component {
  state = {
    showInfo: false,
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    })
  }

  render() {
    const { id, city, name, img, info } = this.props.tour
    const { removetours } = this.props
    return (
      <article className="tour">
        <div className="image-container">
          <img src={img} alt={name} />
          <span className="close-btn" onClick={() => removetours(id)}>
            <FaWindowClose />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.handleInfo}>
              <FaCaretSquareDown />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    )
  }
}
