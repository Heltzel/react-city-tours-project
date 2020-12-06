import React, { Component } from 'react'
import './Tour.scss'
import { FaWindowClose } from 'react-icons/fa'
import { FaCaretSquareDown } from 'react-icons/fa'

export default class index extends Component {
  render() {
    const { city, name, img, info } = this.props.tour
    return (
      <article className="tour">
        <div className="image-container">
          <img src={img} alt={name} />
          <span className="close-btn">
            <FaWindowClose />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span>
              <FaCaretSquareDown />
            </span>
          </h5>
          <p>{info}</p>
        </div>
      </article>
    )
  }
}
