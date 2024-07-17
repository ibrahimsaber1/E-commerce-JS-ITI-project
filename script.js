function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => {
      if (!res.ok) {
        throw Error("Error");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data.products); //to display the whole products in html
      let html = data.products
        .map((product) => {
          //
          return `
        <div class = "single_p">
          <p><img calss="img_p" style="width: 6em;" src="${product.images[0]}"  alt="${product.title}"/></p>
          <p>title:${product.title}</p>
          <p>category:${product.category}</p>
          <p>price:${product.price}</p>
          <p>rating:${product.rating}</p>
          </div>
          `;
        })
        .join("");
      console.log(html);
      document.querySelector("#dataDisplay").insertAdjacentHTML(
        "afterbegin",
        `
          ${html}
          `
      );
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchProducts();
