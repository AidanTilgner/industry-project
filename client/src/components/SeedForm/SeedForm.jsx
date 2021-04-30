import React, { Component } from 'react';
import axios from 'axios';
import './SeedForm.scss';
import './server/library.json';

export default class SeedForm extends Component { 

    state = {
        words: [],
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080')
            .then((data) => {
                this.setState({
                    words: data
                })
            })
    }
}