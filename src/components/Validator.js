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
   
}

export default Validator;