import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Listitem extends Component {

    getStyle = () => {
        return {
            background: '#80baed',
            padding: '11px',
            borderBottom: '1px dotted',
            textDecoration: this.props.list.completed ? 'line-through' : 'none'
        }
    }

  

    render() {
        const  { id, title } = this.props.list;
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type ="checkbox" onChange = {this.props.markComplete.bind(this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.deleteList.bind(this, id)} style ={btnStyle}> x </button>
                </p>
            </div>
        )
    }
}

//creating proptypes
Listitem.propTypes = {
    list: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '1px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default Listitem
