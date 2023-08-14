function simulateApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const responseData = { message: 'API call successful' }
      resolve(responseData)
    }, 3000)
  })
}

export default simulateApiCall
