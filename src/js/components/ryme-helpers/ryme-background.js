const bgConfig = {
  noRepeat: (image) => {
    return {
      background: `url(./public/content/images/${image}) no-repeat`
    }
  },

  repeat: (image) => {
    return {
      background: `url(./public/content/images/${image})`
    }
  }
}

export default bgConfig;
