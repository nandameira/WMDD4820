
// LIST OF BOOKS ON DATABASE

let books = [
  {author: 'Thomas Pynchon', title: 'Bleeding Edge', genre: 'Romance', borrow: 'no'},
  {author: 'Haruki Murakami', title: '1Q84', genre: 'Suspense', borrow: 'yes'},
  {author: 'John D MacDonald', title: 'Nightmare in Pink', genre: 'Terror', borrow: 'no'},
  {author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6', genre: 'Romance' , borrow: 'yes'},
]

// LIST OF USERS ON DATABASE

let users=[
  {login:'fernanda', password:'12345', card:'1234'}
]

let name = [] //global variable


// START LOGIN AUTENTICATION 

function authLogin () {

  let login = document.getElementById('userName').value
  let password = document.getElementById('password').value


  for(let i=0;i<users.length;i++)
  {

    if(users[i].login === login && users[i].password === password)

    { 
      document.getElementById('library-search').style.display='initial'
      document.getElementById('login').style.display='none'

      document.getElementById('welcome').innerHTML = "Welcome  " + users[i].login + "  |  CARD#: " + users[i].card
      break;
    }
  }
  
} 

function authNewLogin () {
  document.getElementById('login-new').style.display='initial'
  document.getElementById('login').style.display='none'

} 


function newLogin () {
  document.getElementById('login-new').style.display='none'
  document.getElementById('library-search').style.display='initial'


  let newUser = {login: document.getElementById('new-user').value , password: document.getElementById('new-password').value, card: Math.floor((Math.random () * 1000) + 1)}

  document.getElementById('welcome').innerHTML = "Welcome " + newUser.login + "! | #: " + newUser.card

}


// START SEARCH BY TITLE AND/OR GENRE

function authSearch () {
  let result = document.getElementById('result').innerHTML = ''
  let aName = document.getElementById('titleSearch').value
  let aGenre = document.getElementById('genreSearch').value 

  if (aName != "" && aGenre != "") 
  {
     name = books.filter((x) => (RegExp(aName.toUpperCase()).test(x.title.toUpperCase())) 
    && RegExp(aGenre.toUpperCase()).test(x.genre.toUpperCase()))
  }

  else if (aName != "")
    {
     name = books.filter((x) => RegExp(aName.toUpperCase()).test(x.title.toUpperCase()))
  }

  else if (aGenre != "") 
    {
     name = books.filter((x) => RegExp(aGenre.toUpperCase()).test(x.genre.toUpperCase()))
  }
 


  try {
    for(let i=0;i<name.length;i++) {

      if(name[i].borrow=='no')
      {
     
        if (aName != "" && aGenre != "")
        {
         let result = document.createElement('li')
         let textnode = document.createTextNode(name[i].title + " by " + name[i].author + " | Genre: " + name[i].genre + " - AVAILABLE") 
         
         result.appendChild(textnode)
         document.getElementById('result').appendChild(result)
       }
       else if (aName != "") 
       {
        let result = document.createElement('li')
        let textnode = document.createTextNode(name[i].title + " by " + name[i].author + " | Genre: " + name[i].genre + " - AVAILABLE") 

        result.appendChild(textnode)

        document.getElementById('result').appendChild(result)

      }

      else if (aGenre != "") 
      {

        let result = document.createElement('li')
        let textnode = document.createTextNode(name[i].title + " by " + name[i].author + " | Genre: " + name[i].genre + " - AVAILABLE") 
        result.appendChild(textnode)
        document.getElementById('result').appendChild(result)
      }

    }

    else{

      if (aName != "" && aGenre != "")
        {
         let result = document.createElement('li')
         let textnode = document.createTextNode(name[i].title + " by " + name[i].author + " | Genre: " + name[i].genre + " - BORROWED") 
         
         result.appendChild(textnode)
         document.getElementById('result').appendChild(result)
       }
       else if (aName != "") 
       {
        let result = document.createElement('li')
        let textnode = document.createTextNode(name[i].title + " by " + name[i].author + " | Genre: " + name[i].genre + " - BORROWED")

        result.appendChild(textnode)

        document.getElementById('result').appendChild(result)

      }

      else if (aGenre != "") 
      {

        let result = document.createElement('li')
        let textnode = document.createTextNode(name[i].title + " by " + name[i].author + " | Genre: " + name[i].genre + " - BORROWED") 
        result.appendChild(textnode)
        document.getElementById('result').appendChild(result)
      }

    }
  }
    if (name.length == 0) {
      document.getElementById('result').innerHTML = "Sorry, I can't find what you are looking for. Please make a new search."
    }
    
  }
  catch (err) {

    document.getElementById('result').innerHTML = "Sorry, I can't find what you are looking for. Please make a new search."
  }
}


// START ADD BOOK TO LIBRARY

function addBook (book) {
  let aTitle = document.getElementById('addTitle').value
  let aAuthor = document.getElementById('addBook').value
  books.push({author: aAuthor , title: aTitle })
  showAllBooks ()
}

function showAllBooks () {
  document.getElementById('allTheBooks').innerHTML = ''
  for (var i = 0; i < books.length; i++) {
    if(books[i].borrow=='no'){
      let listItem = document.createElement('li')
      let textnode = document.createTextNode(books[i].author + ' - ' + books[i].title)
      let checkbox = document.createElement('input')

      checkbox.type="checkbox"
      checkbox.name="book"
      checkbox.value=i


      listItem.appendChild(textnode)
      listItem.appendChild(checkbox)
      document.getElementById('allTheBooks').appendChild(listItem)
    }
  }

}

// START BORROW BOOK & BOOK AVAILABILITY

function borrowBook(){
  let book = document.querySelectorAll('input[name="book"]:checked')
 
  for (var i = 0; i < books.length; i++) {
    for(let j = 0; j<book.length;j++){
     
      if(book[j].value==i){
       books[i].borrow = "yes"
       document.getElementById('borrow-ok').innerHTML = ' The book ' + books[i].title + ' was successfully borrowed'
     }
   }

 } 

   showAllBooks()

}


