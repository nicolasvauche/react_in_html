const e = React.createElement

export const Title = ({text}) => {
  React.useEffect(() => {
    console.log('coucou');
  }, [])

  return e(
    'h2',
    {},
    text
  )
}
