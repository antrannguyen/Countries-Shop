export const fetchCountries = async () => {
  const url = 'https://restcountries.eu/rest/v2/all'
  try {
    const cache = await caches.open('getCountriesData')
    let cacheReponse = await cache.match(url)

    if (!cacheReponse || !cacheReponse.ok) {
      await cache.add(url)
      cacheReponse = await cache.match(url)
    }
    const reponse = await cacheReponse?.json()
    return reponse
  } catch (e) {
    return e
  }
}
