import axios from 'axios'
const baseURL = 'http://localhost:3000'

class AddToDoService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }
  addToDo = data => {
    return this.service
      .post('/add', data)
      .then(({ data }) => data)
      .catch(err => err)
  }
  getToDo = () => {
    return this.service
      .get('/')
      .then(({data}) => data)
      .catch(err => err)
  }
  deleteToDo = data => {
    return this.service
      .post('/', data)
      .then(({data}) => data)
      .catch(err => console.log(err))
  }
}

export default AddToDoService