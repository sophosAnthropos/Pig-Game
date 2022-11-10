import React from 'react'

export const ModalHeader = ({children}: {children: string}) => {
  return (
    <>
        <h2>
            {children}
        </h2>
    </>
  )
}