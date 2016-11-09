let books = [
  {author: 'Thomas Pynchon', title: 'Bleeding Edge'},
  {author: 'Haruki Murakami', title: '1Q84'},
  {author: 'John D MacDonald', title: 'Nightmare in Pink'},
  {author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6'}
]

function authSearch () {
  let aName = document.getElementById('authorSearch').value
  let name = books.filter((x) => x.author === aName)
  try {
    document.getElementById('result').innerHTML = 'yes we have at least one book by ' + name[0].author
  }
  catch (err) {
    document.getElementById('result').innerHTML = 'sorry no books by ' + aName
  }
}

function addBook (book) {
  let aTitle = document.getElementById('addTitle').value
  let aAuthor = document.getElementById('addBook').value
  books.push({author: aAuthor , title: aTitle })
  showAllBooks ()
}

function showAllBooks () {
  document.getElementById('allTheBooks').innerHTML = ''
  for (var i = 0; i < books.length; i++) {
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(books[i].author + ' - ' + books[i].title)
    listItem.appendChild(textnode)
    document.getElementById('allTheBooks').appendChild(listItem)
  }

}
