import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function FooterColumn({ cName, children, path, headerName }) {
   const { link, header, column } = cName;

   return (
      <div className={column}>
         <Link
            to={path}
            className={`${link} ${header}`}
         >
            {headerName}
         </Link>
         {children}
      </div>
   )
}

FooterColumn.propTypes = {
   path: PropTypes.string.isRequired,
   headerName: PropTypes.string.isRequired,
   cName: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default FooterColumn
