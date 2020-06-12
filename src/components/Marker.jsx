import React from 'react'

import Card from 'react-bootstrap/Card'

import { ReactComponent as MarkerIcon } from '../assets/markerIcon.svg'

export const Marker = ({ location }) => {
  return (
    <>
      <div className="text-danger">
        <MarkerIcon className="svg" />
      </div>
      <Card className="my-2 card">
        <Card.Body>
          <Card.Title>My Location</Card.Title>
          <Card.Text>
            Latitude: {location.lat}
            <br />
            Longitude: {location.lng}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
