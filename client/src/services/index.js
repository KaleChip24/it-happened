import axios from "axios"

export const BASE_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_API_BASE}/films`
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
  }
}

export const grabFilms = async () => {
  const res = await axios.get(BASE_URL, config)
  return res.data.records
}

export const postFilms = async (body) => {
  const res = await axios.post(BASE_URL, { fileds: body }, config)
  return res.data.records
}