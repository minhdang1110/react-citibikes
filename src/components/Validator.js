import React from "react";
import _ from 'lodash';

class Validator extends React.Component {
    state = {
        choice: "",
        isAvailable : false
    };

    handleChange = (e) => {
        this.setState({
            choice: e.target.value,
        });
    };
   
    handleClick = async (e) => {
        //get necessary data from cityBike API
        const data = await this.props.validateFunction();
   
        //create array of lower case info of data
        let options = []
        data.map(d => options.push(d.toLowerCase()))
        let isAvailable = false;
   
        //checking loop
        for (let i=0; i < options.length; i++) {
            if (_.isEqual(this.state.choice.toLowerCase(), options[i])) {
                isAvailable = true;
                break;
            }
        }
   
        this.setState({
            isAvailable : isAvailable
        })
    };
   
}

export default Validator;