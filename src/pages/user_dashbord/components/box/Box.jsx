import React from 'react'

import './box.scss'

const Box = props => {
    const className = {
        Box: 'Box',
        purple: props.purple && 'Box-purple',
        fullheight: props.fullheight && 'Box-fullheight'
    }
  return (
    <div className={Object.values(className).join(' ')}>
        {props.children}
        
    </div>
  )
}

export default Box
