import React from 'react'

const Map = () => (
    <div className="map">
      <div className="google-map">
      <iframe id="property-map-iframe" title="Custom Location Map" src="https://www.google.com/maps/d/u/1/embed?mid=1hkKRMvh-kRWiDQrr8zKSfgcTR5X259ZS"></iframe>
      </div>
    </div>
  )

class PropertyMap extends React.Component {
    render() {
       return <Map />
    }
  }

export default PropertyMap;