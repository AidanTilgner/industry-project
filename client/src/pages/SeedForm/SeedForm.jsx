import React from 'react';
import axios from 'axios';
import './SeedForm.scss';
import './server/library.json';

export default class SeedForm extends React.Component { 

    state = {
        words: [],
    }

    componentDidMount() {
        console.log('hello')
        axios
        .get('http://localhost:8080/words')
        .then(res => { 
                console.log(res)
                this.setState({
                    words: res.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
} 