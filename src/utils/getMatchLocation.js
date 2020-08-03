import axios from 'axios'; 
import _ from 'lodash';
import {getNetworkData} from './common';

export const getStationIdThatMatchCountrySearch = (choice) => {

}

export const generateStationIdWithLocation = async () => {
    const network = await getNetworkData();
    let stationIdWithLocation = [];
    _.map(network, ({id, location}) => {
        stationIdWithLocation.push({id, location})
    })
    // console.log(network);
    return stationIdWithLocation;
}
