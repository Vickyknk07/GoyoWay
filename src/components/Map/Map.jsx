import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';


const Map = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width: 600px)')
    const coordinates = { lat: 0, lng: 0 }
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCIChylF3z77H0l4wFcIs0QyaYV_GAL81A' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
             
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map
