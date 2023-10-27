export const getGifs = async (category) => {
  const URL_GIFT = `https://api.giphy.com/v1/gifs/search?api_key=w92pMQsDLBxWPsMMztbK2aAnoCSl6JCu&q=${category}&limit=5`

  const response = await fetch(URL_GIFT)
  const { data } = await response.json()  
  return data
}