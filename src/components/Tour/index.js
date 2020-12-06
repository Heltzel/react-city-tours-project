import React, { Component } from 'react'
import './Tour.scss'
import { FaWindowClose } from 'react-icons/fa'
import { FaCaretSquareDown } from 'react-icons/fa'

export default class index extends Component {
  render() {
    return (
      <article className="tour">
        <div className="image-container">
          <img
            src="https://images.pexels.com/photos/5683079/pexels-photo-5683079.jpeg?cs=srgb&dl=pexels-boris-krstic-5683079.jpg&fm=jpg"
            alt="name"
          />
          <span className="close-btn">
            <FaWindowClose />
          </span>
        </div>
        <div className="tour-info">
          <h3>city</h3>
          <h4>name</h4>
          <h5>
            info{' '}
            <span>
              <FaCaretSquareDown />
            </span>
          </h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            eligendi!
          </p>
        </div>
      </article>
    )
  }
}
