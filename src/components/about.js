import React from 'react';
import Rainbow from '../hoc/rainbow';

const About = () =>{
  return(
    <div className = 'container'>
      <h4 className = 'center'>About</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula tortor urna, non aliquet arcu fringilla eget. Vivamus ac vestibulum ipsum, at dignissim diam. Suspendisse dictum arcu id felis cursus eleifend. Integer et tortor turpis. Fusce accumsan ipsum eu elit egestas euismod. Donec at lectus neque.</p>
    </div>
  );
}

export default Rainbow(About);
