export default function addToStorage(data) {
  let collectionName = 'products';

  return new Promise((resolve, reject) => {
    if (window['localStorage'] === null && localStorage === undefined) {
      reject('localStorage not suport in you browser!');
    }

    if (localStorage.getItem(collectionName) === null) {
      localStorage.setItem(collectionName, JSON.stringify([]));
    }

    let allItems = JSON.parse(localStorage.getItem(collectionName));
    allItems.push(data)

    localStorage.setItem(collectionName, JSON.stringify(allItems));

    resolve(data);

  });
}