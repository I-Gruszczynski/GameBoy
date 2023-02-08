var input = document.getElementById("search_input");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch();
    }
  });

async function onSearch() {
    let value = input.value;
    window.location.href = "/product/search.php?search=" + value;
}