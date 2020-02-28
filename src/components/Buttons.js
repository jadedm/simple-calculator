import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Buttons.css';
import Button from './Button.js';
import { ButtonElements } from './../utils/ButtonElements';
import { addElement, clearScreen, calculateValue } from './../actions';

export class Buttons extends Component {
  
  handleClick = (el) => {
    switch(el) {
      case 'Clear':
        this.props.clearScreen();
        break;

      case '=':
        this.props.calculateValue(this.props.value)
        break;

      default:
        this.props.addElement(el)
    }
  }

  render(){
    return (
      <div className="button-wrapper">        
        {ButtonElements.map(row => {
          return row.map((button, index) => (
            <Button key={button} buttonEl={button} onButtonClick={this.handleClick}/>
          ))
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return { value: state.calculator.value }
}

export default connect(mapStateToProps, { addElement, clearScreen, calculateValue  })(Buttons);