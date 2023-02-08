var input = document.getElementById("search_input");

var oldProducts = "";

const params = new URLSearchParams(window.location.search);

if (params.has("search")) {
  onSearch(params.get("search"));
} else {
  onSearch();
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    onSearch();
  }
});

async function onSearch(search) {
  let value;
  if (typeof search === "string") {
    value = search;
  } else {
    value = document.getElementById("search_input").value;

    //window.location.search = "?search=" + value;
  }
  let response = await fetchAsync(value);
  displayProducts(response["products"]);
}

function displayProducts(products) {
  oldProducts = products;
  const element = document.getElementById("search_results");
  element.innerHTML = "";

  let response = sortProducts(products);

  response.forEach((product) => {
    const item = document.createElement("div");
    item.id = "item";

    item.appendChild(generateImage(product["icon"]));
    item.appendChild(
      generateText(product["title"], product["released"], product["price"])
    );
    item.appendChild(
      generateButton(
        "cokolwiek co będzie potrzebne do przejscia do strony produktu"
      )
    );
    element.appendChild(item);
  });
}

function searchSpecial() {
  let currentColor = document.getElementById("special_offers").style.color;

  if (currentColor == "rgb(251, 107, 107)") {
    document.getElementById("special_offers").style.color = "#FFFFFF";
  } else {
    document.getElementById("special_offers").style.color = "#FB6B6B";
  }
}

function sortProducts(products) {
  let orderBy = document.getElementById("sort_order").value;
  if (orderBy === "lowest") {
    products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else {
    products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }

  return products;
}

function changeSort() {
  displayProducts(oldProducts);
}

function generateImage(img) {
  const imageWrapper = document.createElement("div");
  imageWrapper.id = "image_wrapper";
  const image = document.createElement("img");
  image.id = "item_photo";
  image.src = img;
  imageWrapper.appendChild(image);
  return imageWrapper;
}

function generateText(title, date, price) {
  const _textWrapper = document.createElement("div");
  _textWrapper.id = "text_wrapper";

  const _title = document.createElement("p");
  const _price = document.createElement("p");
  const _date = document.createElement("p");
  _title.classList.add("title_p");
  _date.classList.add("title_p");
  _price.classList.add("title_p");

  _title.id = "name";
  _title.innerHTML = title;

  _date.id = "date";
  _date.innerHTML = "Data premiery: " + date;

  _price.id = "price";
  _price.innerHTML = price + " PLN";

  _textWrapper.appendChild(_title);
  _textWrapper.appendChild(_date);
  _textWrapper.appendChild(_price);
  return _textWrapper;
}

function generateButton(id) {
  const buttonWrapper = document.createElement("div");
  buttonWrapper.id = "button_wrapper";

  const button = document.createElement("input");
  button.id = "product_btn";
  button.value = "Przejdź";
  button.type = "button";

  buttonWrapper.appendChild(button);
  return buttonWrapper;
}

async function fetchAsync(name) {
  let url = createUrl(name);
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

function createUrl(name) {
  let rates = document.getElementById("genres");
  let selectedGenre = rates.elements["genre"].value;
  let promoOffer = document.getElementById("special_offers").style.color;
  let minPrice = document.getElementById("priceFrom").value;
  let maxPrice = document.getElementById("priceTo").value;

  let releaseYear = document.getElementById("year").value;

  var url = new URL("http://146.59.44.209/api/product/search.php");

  url.searchParams.append("title", name);
  if (selectedGenre != "") {
    url.searchParams.append("category", selectedGenre);
  }
  if (promoOffer == "rgb(251, 107, 107)") {
    url.searchParams.append("discounted", true);
  }
  if (releaseYear != "" && releaseYear != "Wybierz rok") {
    url.searchParams.append("released", releaseYear);
  }
  if (minPrice != "") {
    url.searchParams.append("min_price", minPrice);
  }
  if (maxPrice != "") {
    url.searchParams.append("max_price", maxPrice);
  }

  return url;
}

let year_start = 1990;
let year_end = new Date().getFullYear(); // current year

let option = "";
option = "<option selected:'selected'>Wybierz rok</option>"; // first option

for (let i = year_start; i <= year_end; i++) {
  option += '<option value="' + i + '"' + ">" + i + "</option>";
}

document.getElementById("year").innerHTML = option;
