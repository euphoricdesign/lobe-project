
export const Button = ({name, width, marginTop, marginBottom, fontSize, marginRight}) => {
  return (
    <button style={{width: width, alignSelf: 'center', marginTop: marginTop, marginBottom: marginBottom, fontSize: fontSize, marginRight: marginRight}} className='btn button'>{name}</button>
  )
}
