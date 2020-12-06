import React, { Component } from 'react'
import './TourList.scss'
import Tour from '../Tour'

export default class TourList extends Component {
  render() {
    return (
      <section className="tour-list">
        <Tour />
      </section>
    )
  }
}
