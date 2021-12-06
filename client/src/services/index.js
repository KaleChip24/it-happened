import axios from "axios"


export const COMMENT_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_API_BASE}/comments`
export const FEAT_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_API_BASE}/features`
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
  const res = await axios.post(BASE_URL, { fields: body }, config)
  return res.data
}
export const editFilms = async (body, id) => {
  const res = await axios.put(`${BASE_URL}/${id}`, { fields: body }, config)
  return res.data
}

export const deleteFilms = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`, config)
  return res.data
}

//features

export const grabFeatures = async () => {
  const res = await axios.get(FEAT_URL, config)
  return res.data.records
}

//comments
export const postComment = async (body) => {
  const res = await axios.post(COMMENT_URL, { fields: body }, config)
  return res.data
}