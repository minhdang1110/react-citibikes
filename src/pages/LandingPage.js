import React from "react";
import "../styles/LandingPage.css";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            longitude: 0,
            latitude: 0,
            city: "",
        };
    }
   
    componentDidMount = () => {
        let state = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log("in nat", this);
                let lat = position.coords.latitude;
                let long = position.coords.longitude;
   
                state.setState({
                longitude: long,
                latitude: lat,
                });
            });
        } 
        else {
            alert("Geolocation is not supported by this browser");
        }
    };
   

    render() {
        return (
            <div className="container">
                <h3>Welcome to FindACityBike</h3>
                
                <p className="inform-paragraph">
                    Please turn on your Wifi and input the city where you want to find a
                    nearest citybike station. If error occurs, please reload and enable
                    location asking.
                </p>
                
                {/* Input field */}
                <div className="dashboard-input">
                    <input type="text" placeholder="City Name. Ex: New York" />
                </div>
         
                {/* Search button */}
                <button className="dashboard-search-button"> <i class="prefix material-icons">search</i>Search</button>
            </div>
        );
    }
}

export default LandingPage;