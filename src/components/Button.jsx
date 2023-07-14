
export const Button = ({name, width,marginTop,marginBottom}) => {
  return (
    <button style={{width: width, alignSelf: 'center', marginTop: marginTop, marginBottom: marginBottom}} className='btn button'>{name}</button>
  )
}
