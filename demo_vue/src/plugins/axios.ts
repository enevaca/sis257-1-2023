import Axios from 'axios'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_ENDPOINT,
  headers: { 
    'Content-type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImlhdCI6MTY4Mzk5NzA1MCwiZXhwIjoxNjgzOTk3MTEwfQ.zwrkdwlCw40EEib1aFY7sJExjWvLcyR-aU19sLvS6Sk' 
  }
})

export default axios
