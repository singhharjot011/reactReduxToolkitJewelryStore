// const API_URL = "http://10.0.0.110:3000/products";

// Hosted on Github
const API_URL = "https://singhharjot011.github.io/storeAPI/storeAPI.json";

//Macbook
// const API_URL = "http://127.0.0.1:5500/storeAPI.json";

export async function getProducts() {
  const res = await fetch(API_URL);
  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting products");

  const { products } = await res.json();

  return products;

  //Macbook
  // return data.products
}

export async function getProductDetails(productCode) {
  const products = await getProducts();
  const productDetails = products.filter(
    (item) => item.productCode === productCode,
  );
  return productDetails;
}

export async function getWishlistProducts(likedItems) {
  const products = await getProducts();
  const filteredWishlistProducts = products.filter((item) =>
    likedItems.some((code) => code === item.productCode),
  );
  return filteredWishlistProducts || [];
}

export async function getCartProducts(cartItems) {
  const products = await getProducts();
  const filterCartProducts = products.filter((item) =>
    cartItems.some((code) => code === item.productCode),
  );
  return filterCartProducts || [];
}

export async function getProductReviews() {
  const res = await fetch(API_URL);
  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting products");

  const { reviews } = await res.json();
  return reviews;
}
