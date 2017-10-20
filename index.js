import React, { Component, PropTypes } from 'react';

class ModuleDemo extends Component {

  render(){
	  
    return (
      <div className='demo_text'>
	<h2>{this.props.text}</h2>
	<h3>This text from code</h3>
      </div>
    );
	  
  }
}

export default ModuleDemo;
