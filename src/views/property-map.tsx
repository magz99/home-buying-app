import React from 'react'

const Map = () => (
    <div className="map">
      <div className="google-map">
      <iframe id="property-map-iframe" title="Custom Location Map" src="https://www.google.com/maps/d/u/0/embed?mid=1vSuowlfHVSHBXrOwUG9AWRsnoHasNmJG"></iframe>
      </div>
    </div>
  )

class PropertyMap extends React.Component {
    render() {
       return <Map />
    }
  }

export default PropertyMap;