import React from 'react';
import axios from 'axios';
import './SeedForm.scss';
class SeedForm extends React.Component { 

    state = {
        words: [],
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/')
            .then(({data}) => {
                this.setState({
                    words: data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() { 
        return(
            <h1>SeedForm</h1>
        )
    }
}

export default SeedForm;