import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { FindMe, Marker, Map } from './components'
import './App.css'

export default function App() {
  const [map, setMap] = useState(null)
  const [status, setStatus] = useState(false)
  const [myLocation, setMyLocation] = useState(null)

  return (
    <Container fluid className="vw-100 vh-100">
      <Map location={myLocation} onMapLoad={setMap}>
        <Marker />
      </Map>
      <FindMe
        status={status}
        onLocationFind={() => {
          setStatus(true)
          navigator.geolocation.getCurrentPosition(
            (result) => {
              const coord = result.coords
              setMyLocation({
                lat: coord.latitude,
                lng: coord.longitude,
              })
              if (map) {
                map.setCenter({
                  lat: coord.latitude,
                  lng: coord.longitude,
                })
              }
              setStatus(false)
            },
            (error) => {
              alert(error?.message || 'Location Access denied!')
              setStatus(false)
            }
          )
        }}
      />
    </Container>
  )
}
