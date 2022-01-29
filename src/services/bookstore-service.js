export default class BookstoreService {
  data = [
    {
      id: 1,
      name: 'First book',
      author: 'First book`s author',
      price: 24,
      cover: `https://www.oreilly.com/library/view/production-ready-microservices/9781491965962/assets/cover.png`
    },
    {
      id: 2,
      name: 'Second book',
      author: 'Second book`s author',
      price: 34,
      cover: `https://balka-book.com/files/2018/02_22/08_16/u_files_store_3_694640.jpg`
    }
  ]
  
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
      }, 700)
    })
  }
}