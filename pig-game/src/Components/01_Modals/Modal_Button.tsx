export const ModalButton = (
  {children, onClick}:{children:string, onClick: any}
): JSX.Element => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

