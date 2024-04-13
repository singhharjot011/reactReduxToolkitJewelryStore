const API_URL = "http://localhost:3000/products";

export async function getProducts() {
  const res = await fetch(API_URL);
  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting products");

  const  data  = await res.json();
  return data;
}
