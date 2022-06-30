const axios = require('axios')

class Busquedas {
  historial = ['Tegusigalpa', 'Madrid', 'San Jose']
  constructor ( ) {

  }
  get paramsMapBox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: 'es'
    }
  }

  async ciudad ( lugar = '' ) {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapBox
      })
      const resp = await instance.get()
      console.log(resp.data)
    
    } catch (error) {
      return []
    }
    
  }
}

module.exports = Busquedas