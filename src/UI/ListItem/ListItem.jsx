import React from 'react'
import PropTypes from 'prop-types'

ListItem.propTypes = {
   cName: PropTypes.string.isRequired,
   clickEvent: PropTypes.func,
   children: PropTypes.node
}

function ListItem({ cName, children, clickEvent = false }) {
   return (
      <li className={cName} onClick={clickEvent || null}>
         {children}
      </li>
   )
}

export default ListItem
