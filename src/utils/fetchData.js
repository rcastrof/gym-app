export const exerciseOptions ={
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '850b3f04a6msh943f88b97ceaf22p19d5bfjsn16b874e80aa6',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}
export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json()
  return data
}
