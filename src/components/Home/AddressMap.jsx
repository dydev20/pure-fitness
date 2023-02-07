import React from "react"
import {Map,Marker, ZoomControl} from "pigeon-maps"

export default function AddressMap(){
    return(
        <Map height={300} defaultCenter={[55.8549983, -4.2091831]} defaultZoom={17} zoomSnap={false}>
            <Marker width={35} anchor={[55.8549983, -4.2091831]} />
            <ZoomControl />
        </Map>
    )
}