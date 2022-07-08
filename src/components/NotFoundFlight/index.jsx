import LoadingGif from '../../assets/images/system/loading-animated.gif'

const NotFoundFlight = () => {
  return (
    <img
      style={{
        display: 'block',
        margin: 'auto',
        maxWidth: '100%',
        objectFit: 'contain',
      }}
      src={LoadingGif}
      alt="Loading GIF"
    />
  )
}

export default NotFoundFlight
