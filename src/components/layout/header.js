import React from 'react';
import { Link } from 'react-router-dom';

export default function header() {
    return (
        <div>
            <header style={headerStyle}>
                <h1>Grocery List</h1>
                <Link style = {linkStyle} to = "/">Home</Link> | <Link style = {linkStyle} to = "/about">About</Link>
            </header> 
        </div>
    )
}

const headerStyle = {
    background: '#8428d4',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#faeb1e',
    textDecoration: 'none'
}