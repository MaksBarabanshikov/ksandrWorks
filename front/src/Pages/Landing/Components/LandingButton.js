const LandingButton = ({children, width , height}) => {

    const style = {
        width: width,
        height: height
    }

  return(
      <button
          style={style}
          className='landing-btn'
      >
          {children}
      </button>
  )
}

export default LandingButton