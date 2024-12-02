export  async function getElementByIdFromApi(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await response.json();
  }