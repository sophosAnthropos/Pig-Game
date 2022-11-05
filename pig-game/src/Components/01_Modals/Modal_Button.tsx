import React from 'react'

function Modal_Button (
  {children, onClick}:{children: string, onClick: any}
): JSX.Element {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default Modal_Button