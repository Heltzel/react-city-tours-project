import React, { Component } from 'react'
import './TourList.scss'
import Tour from '../Tour'
import { tourData } from '../../tourData'

export default class TourList extends Component {
  constructor() {
    super()
    this.state = {
      tours: tourData,
    }
  }

  removeTour = (id) => {
    const { tours } = this.state
    const filteredTours = tours.filter((tour) => {
      return tour.id !== id
    })
    this.setState({ tours: filteredTours })
  }

  render() {
    const { tours } = this.state
    return (
      <section className="tour-list">
        {tours.map((tour) => {
          return (
            <Tour tour={tour} key={tour.id} removetours={this.removeTour} />
          )
        })}
      </section>
    )
  }
}
