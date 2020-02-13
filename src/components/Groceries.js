import React, { Component } from 'react';
import Listitem from './Listitem';
import PropTypes from 'prop-types';


class Groceries extends Component {


    render() {    
        return this.props.list.map((groceryOrder) => (
            <Listitem key={groceryOrder.id} list={groceryOrder} markComplete={this.props.markComplete} deleteList={this.props.deleteList} />
        ));
    }
}


//creating proptypes
Groceries.propTypes = {
    list: PropTypes.array.isRequired
}

export default Groceries;

