// fetch example

const carouselSectionElement = document.getElementById("carousel-section");

// fetch

// local file stored on server
// can access by "<relative path> or <./<relative path>>"
const getProducts = () => {
  fetch("./data/products.json")
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

// async await
const asyncGetProductsJson = async () => {
  const response = await fetch("./data/products.json");
  const data = await response.json();
  console.log(data);
  // everything return from async and await is promise
};

asyncGetProductsJson();
