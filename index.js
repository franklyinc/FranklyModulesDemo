import React, { Component, PropTypes } from 'react';
import Image from 'components/Image';

class ModuleDemo extends Component {
  render(){
    return (
      <div className='FranklyModulesDemo'>
	
	  <h2 className='demo_text'>{this.props.text}</h2>
	
	  <p>The header above can be edited in the CMS (AMS)!</p>
	
	  <p>The image below is a core Image Module embedded within this Custom Module!</p>

	  <Image height={180} width={600} src={'https://franklydemo.images.worldnow.com/images/15208935_G.jpeg'} alt={'Fire Photo'} />

      </div>
    );
	  
  }
}

export default ModuleDemo;
