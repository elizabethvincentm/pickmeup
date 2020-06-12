import React from 'react'
import GoogleMapReact from 'google-map-react'

export const Map = ({ location, onMapLoad, children }) => {
  const data = {
    center: {
      lat: 51.509865,
      lng: -0.118092,
    },
    zoom: 3,
  }

  const apiIsLoaded = (map, maps) => {
    if (map) {
      onMapLoad(map)
    }
  }

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBKopTHXlrh5Q2usCMUbcouxCaEgJx9ygg' }}
      defaultCenter={data.center}
      defaultZoom={data.zoom}
      yesIWantToUseGoogleMapApiInternals={true}
      onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
    >
      {location &&
        React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            location,
          })
        })}
    </GoogleMapReact>
  )
}
