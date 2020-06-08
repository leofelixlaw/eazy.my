export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

//Fetch call and we're using a function instaed of an object
//to set up our action. We're fetching data from req.res.io
// and returning the data to our payload. 

const fetchProducts = (dispatch) => {
    fetch('https://5b35ede16005b00014c5dc86.mockapi.io/list')
    .then(res => res.json())
    .then(res => dispatch({type:FETCH_PRODUCTS,payload:res.data}))
};

export default fetchProducts;