class Book{
  constructor(title, genre, author, read){
    this.title = title
    this.genre = genre
    this.author = author
    this.read = read === true ? read : false
    //Se livro já criado -> Data de criação
    this.readDate = this.read === true ? new Date(Date.now()) : null
  }
}
  
class BookList{
  constructor(){
    this.allBooks = []
    this.nBooksRead = 0
    this.nBooksNotRead = 0
    this.nextBook = null
    this.nowBook = null
    this.lastBook = null
  }   

  //Função para adicionar livros em seus respectivos vetores
  addBook (book){
    this.allBooks = [...this.allBooks , book]

    if(book.read===true) this.nBooksRead++
    else this.nBooksNotRead++
    
    this.setNextBook()   
  }

  setNextBook(){
    //Determina o próximo livro
    this.nextBook = this.allBooks.find(book => book.read === false && book !== this.nowBook)
    //Primeiro livro não lido != atual
  }
  
  startCurrentBook(){
    //Seleciona o primeiro livro não lido
    this.nowBook = this.allBooks.find(book => book.read === false)
    
    this.setNextBook() 
  }
  
  finishCurrentBook(){
    //Alterna o livro para lido
    this.nowBook.read = true
    //Determina quando o livro foi terminado
    this.nowBook.readDate = new Date(Date.now())

    //Adiciona o livro no vetor livros e retira do vetor não lidos
    this.nBooksRead++
    this.nBooksNotRead--

    //O livro que acabou de ser lido passa a ser o ultimo e é selecionado o próximo a ser lido
    this.lastBook = this.nowBook
    this.startCurrentBook()
  }
}

  let book1 = new Book("Eragon",'Fantasia', 'Christopher Paolini', false); 
  let book2 = new Book("O guia do mochileiro das galáxias", "Ficção", "Douglas Adams", false);
  let book3 = new Book("24 Horas na Vida de uma Mulher", "Ficção", "Stefan Zweig", true);
  let book4 = new Book("Mindset: A Nova Psicologia do Sucesso", "Psicologia", "Carol S. Dweck", true);
  let book5 = new Book("Inteligência emocional: A teoria revolucionária que redefine o que é ser inteligente", "Psicologia", "Daniel Goleman", true);

  const bookList = new BookList()
  bookList.addBook(book1)
  bookList.addBook(book2)
  bookList.addBook(book3)
  bookList.addBook(book4)
  bookList.addBook(book5)
  console.log(bookList)
  
  console.log("Listando CurrentBook:")
  bookList.startCurrentBook()
  console.log(bookList)
  
  console.log("Listando finishCurrentBook:")
  bookList.finishCurrentBook()
  console.log(bookList)

  //Livros a serem adicionados por via de teste
  let book6 = new Book("Nunca foi sorte", "Autoajuda", "Adriana Sant'Anna")
  let book7 = new Book("Cosmos", "Astronomia", "Carl Sagan", false)
  let book8 = new Book("Uma Breve História do Tempo", "Física", "Stephen Hawking", true)

  bookList.addBook(book6)
  bookList.addBook(book7)
  bookList.addBook(book8)
  console.log(bookList)