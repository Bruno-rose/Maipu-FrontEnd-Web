import axios from 'axios';

// Define an async function
export async function getCars () {
  try {
    // Make a GET request
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    // Handle success response
    console.log(response.data);
  } catch (error) {
    // Handle error
    console.error(error);
  }
}

export const constGenericQuery = (params) => {
  return axios.get(params.endopoint, params.params) };


  // "userId": 1,
  // "id": 1,
  // "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  // "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
