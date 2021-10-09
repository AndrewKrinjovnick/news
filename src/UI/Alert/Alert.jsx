import React from 'react'
import MyPortal from '../MyPortal/MyPortal'
import './Alert.scss'

function Alert({ children }) {
    return (
        <MyPortal>
            <div className="alert">
                <div className="alert_body">
                    {children}
                </div>
            </div>
        </MyPortal>
    )
}

export default Alert