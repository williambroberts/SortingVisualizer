import React from 'react'

const FlexCol = ({children,gap,width,bgColor}) => {
  return (
    <div className="flex-col" style={{width:width,gap:gap,backgroundColor:bgColor}}>{children}</div>
  )
}

export default FlexCol