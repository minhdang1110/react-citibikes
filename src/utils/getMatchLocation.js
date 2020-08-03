import axios from 'axios'; 
import _ from 'lodash';
import {getNetworkData} from './common';

export const getStationIdThatMatchCountryAndCitySearch = async (
    country = "",
    city = ""
) => {
        let data = await generateStationIdWithCountryandCitySpecifically();
        let matches = [];

        _.map(data, (d) => {
            if (
                d.country.toLowerCase() === country.toLowerCase() &&
                d.city.toLowerCase() === city.toLowerCase()
            ) {
                console.log(d.country.toLowerCase(), country, d.city.toLowerCase(), city);
                matches.push(d);
            }
        });
        
        let id = [];
        _.map(matches, (match) => {
            id.push(match.id);
        });
        
        console.log("in getid country and city", id);
        return id;
    };
   
 
export const generateStationIdWithLocation = async () => {
    const network = await getNetworkData();
    let stationIdWithLocation = [];
    _.map(network, ({id, location}) => {
        stationIdWithLocation.push({id, location})
    })
    // console.log(network);
    return stationIdWithLocation;
}

export const generateStationIdWithCountryandCitySpecifically = async () => {
    const network = await getNetworkData();
    let stationIdWithCountryandCity = [];
    _.map(network, ({id, location}) => {
        stationIdWithCountryandCity.push({id, country: location.country, city: location.city})
    })
    console.log(stationIdWithCountryandCity);
    return stationIdWithCountryandCity
} 
