
<<<<<<< HEAD
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
=======
>>>>>>> a66f3d1d5167ca79ca8034975d25c0b43d6d8fec
