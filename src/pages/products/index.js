import React, { Component } from 'react';

import './styles.css'

import api from '../../services/api'

export default class products extends Component {
    state={
       product: {}
    };

    async componentDidMount(){

        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data })
    }

    render() {
        const { product } = this.state;

        return (
            <div className='product-info'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <p>
                    URL: <a _blank href={product.url} target="_blank">{product.url}</a>
                </p>
            </div>
        )
    }
}
