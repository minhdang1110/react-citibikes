import axios from 'axios'; 
import _ from 'lodash';

const getNetworkData = async () => {
    const data = await axios.get('http://api.citybik.es/v2/networks');
    return data.data.networks;
}
