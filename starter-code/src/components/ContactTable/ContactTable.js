import React, {Component} from 'react';
import './ContactTable.css';
import FunctionButton from '../FunctionButton/FunctionButton';

export default class Table extends Component{

    render(){
        return(
            <table>
                <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.contactsProp.map((element, index) => {
                        return <tr key={index}>
                            <td><img className='img-table' src={element.pictureUrl} alt={element.name}/></td>
                            <td>{element.name}</td>
                            <td>{element.popularity.toFixed(2)}</td>
                            <td><FunctionButton functionProp={() => this.props.deleteProp(element.name)}>Delete</FunctionButton></td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    };
};
