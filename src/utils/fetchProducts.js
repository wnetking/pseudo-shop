export function fetchProducts() {
  return fetch('/data.json').then(function (response) {
    return response.json();
  });
}