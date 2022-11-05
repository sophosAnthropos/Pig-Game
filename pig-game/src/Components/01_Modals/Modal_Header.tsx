import React from 'react'

export default function Modal_Header({children}: {children: string}): JSX.Element {
  return (
    <>
        <h2>
            {children}
        </h2>
    </>
  )
}