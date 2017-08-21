export const localStorageUtils = {
  collectionName: 'products',
  add(data) {
    return new Promise((resolve, reject) => {
      if (window['localStorage'] === null && localStorage === undefined) {
        reject('localStorage not suport in you browser!');
      }

      if (localStorage.getItem(this.collectionName) === null) {
        localStorage.setItem(this.collectionName, JSON.stringify([]));
      }

      let allItems = JSON.parse(localStorage.getItem(this.collectionName));
      allItems.push(data)

      localStorage.setItem(this.collectionName, JSON.stringify(allItems));

      resolve(data);
    });
  },

  remove(id){
    return new Promise((resolve, reject) => {
      if (window['localStorage'] === null && localStorage === undefined) {
        reject('localStorage not suport in you browser!');
      }

      if (localStorage.getItem(this.collectionName) === null) {
        resolve(`Collection ${this.products} does not exist`);
        return;
      }

      let allItems = JSON.parse(localStorage.getItem(this.collectionName));

      localStorage.setItem(this.collectionName, JSON.stringify(
        allItems.filter((item) => {
          return id !== item.id;
        })
      ));

      resolve('Ok');
    });
  },

  get(){
    return new Promise((resolve, reject) => {
      if (window['localStorage'] === null && localStorage === undefined) {
        reject('localStorage not support in you browser!');
      }

      if (localStorage.getItem(this.collectionName) === null) {
        resolve([]);
      }

      let allItems = JSON.parse(localStorage.getItem(this.collectionName));

      resolve(allItems);
    });
  },

  del(){
    return new Promise((resolve, reject) => {
      if (window['localStorage'] === null && localStorage === undefined) {
        reject('localStorage not support in you browser!');
      }

      localStorage.removeItem(this.collectionName);

      resolve('Ok');
    });
  }
}