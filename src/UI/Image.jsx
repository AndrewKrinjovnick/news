import React from 'react';
import PropTypes from 'prop-types'

function Image({ className = '', src, alt, circle }) {
   let classN = className;

   if (circle) {
      classN += " circle";
   }

   return (
      <img
         className={classN ? classN.trim() : null}
         src={src}
         alt={alt}
      />
   )
}

Image.propTypes = {
   className: PropTypes.string,
   src: PropTypes.string.isRequired,
   alt: PropTypes.string.isRequired,
}

export default Image
