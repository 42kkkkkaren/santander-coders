let bookArray = []

class Booklist{
  constructor(nextBook, nowBook, lastBook, currentBook){
    this.allBooks = []
    this.nBooksRead = []
    this.nBooksNotRead = []
    this.nextBook = nextBook
    this.nowBook = nowBook
    this.lastBook = lastBook
    this.currentBook = currentBook
    }

    //Método ler (definir se um livro foi lido ou não) -> Ter ações sobre um livro que já tá na lista 
    //Se eu to finalizando o livro, tenho que iniciar (finishcurrent book, lugar pro current)
    addBook(book){
      if(book.read===true){
          this.nBooksRead = [...this.nBooksRead, book.title]
      } else{
          this.nBooksNotRead = [...this.nBooksNotRead, book.title]
      }
      this.allBooks = [... this.allBooks, book.title]
    }
    finishCurrentBook(){
        let theBookIndex = this.findCurrentBook();
        if(theBookIndex > -1){
            this.books[theBookIndex].read = true;
            this.books[theBookIndex].date = new Date();
            this.previousBook = this.books[theBookIndex];           
            this.currentBook = this.nextBook;
            this.read++;
            this.unread--;
        }     
        this.nextBook = this.books.find(book => !book.read && book.title != this.currentBook.title)
}

class Book {
  constructor(title, genre, author,read,readDate) {
    this.title = title
    this.genre = genre
    this.author = author
    this.read = read
    this.readDate = readDate;
  }
}

let book = new Book("Hora da Estrela",'Ficção', 'Clarice Lispector', true, '2020'); 
let book2 = new Book("O guia do mochileiro das galáxias",'Ficção', 'Douglas Adams', false, '2020');
let listBook = new Booklist(0,0,0,0)
listBook.addBook(book)
listBook.addBook(book2)
console.log(listBook);