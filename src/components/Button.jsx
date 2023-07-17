
export const Button = ({name, width, marginTop, marginBottom, fontSize, marginRight}) => {
  return (
    <button 
      style=
      {{
        alignSelf: 'center', 
        marginTop: marginTop, 
        marginBottom: marginBottom, 
        fontSize: fontSize, 
        marginRight: marginRight, 
        border:'none', width:width
      }} 
      className='button'
    >
          
      {name}

    </button>
  )
}
