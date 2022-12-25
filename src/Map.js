import * as React from 'react';
import  mapboxgl from 'mapbox-gl';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';


mapboxgl.accessToken='pk.eyJ1Ijoic2hyYWs0IiwiYSI6ImNsYzNlY3BiNTIydGczeG81NTg5dDRzZmUifQ.DEZGqqc9v2mR1xggCBk9ww';


const daata =
    [{
        "id": 1,
        "region": "US",
        "data": 290
    }, {
        "id": 2,
        "region": "US",
        "data": 490
    }, {
        "id": 3,
        "region": "AT",
        "data": 790
    }, {
        "id": 4,
        "region": "SE",
        "data": 590
    }, {
        "id": 5,
        "region": "AT",
        "data": 290
    }, {
        "id": 6,
        "region": "SE",
        "data": 390
    }]


class Map extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lng:-74,
            lat:40.7128,
            zoom:10
        }
    }
    componentDidMount(){
        const map = new mapboxgl.Map({
            container:this.mapContainer,
            style : 'mapbox://styles/mapbox/streets-v11',
            center:[this.state.lng, this.state.lat],
            zoom:this.state.zoom
        });
        
        daata.forEach((location)=>{
            console.log(location)
            const marker = new mapboxgl.Marker()
                                    .setLngLat([location.id,location.id])
                                    .setPopup(new mapboxgl.Popup({offset:30})
                                    .setHTML('<h3>' + location.data  +  '</h3>' + '<h4>' + location.region + '</h4>')
                                    )
                                    
                                    .addTo(map);
        });
    };
    render(){
        return(
            <div>
                <div ref={el => this.mapContainer = el} style={
                    {width:'100%' , height:'100vh'}
                }/>
            </div>
        )
    }
}
export default Map;