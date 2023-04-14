// Import axios library
const axios = require('axios');

// Define an async function
export async function getCars() {
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
