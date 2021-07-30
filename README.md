# BookWorm Project

# Description

-   Bookworm is an application that allows users to leave notes/review/stars/favorite quotes on any books they have read. The app allows users to view, update, and delete their previous reviews. The app also keeps track of statistics of number of books read, and also gives a statistics on what type of books you enjoy.


# Project Links 
## Project URL
- [Deployment Link](https://bookend-app.netlify.app/)

## Git Repos
- [frontend git](https://github.com/koobcbc/Bookworm-frontend) 
- [backend git](https://github.com/koobcbc/Bookworm-backend)

## API
- https://www.googleapis.com/books/v1/volumes?q={search terms}
- Example: https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes

Snippet of API
```
{
    "kind": "books#volumes",
    "totalItems": 119,
    "items": [
    {
        "kind": "books#volume",
        "id": "gK98gXR8onwC",
        "etag": "+bk95ZFRnSM",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/gK98gXR8onwC",
        "volumeInfo": {
        "title": "Flowers for Algernon",
        "subtitle": "A One-act Play",
        "authors": [],
        "publisher": "Dramatic Publishing",
        "publishedDate": "1969",
        "industryIdentifiers": [],
        "readingModes": {},
        "pageCount": 32,
        "printType": "BOOK",
        "averageRating": 5,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.0.2.0.preview.1",
        "panelizationSummary": {},
        "imageLinks": {},
        "language": "en",
        "previewLink": "http://books.google.co.kr/books?id=gK98gXR8onwC&pg=PA3&dq=flowers+inauthor:keyes&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.co.kr/books?id=gK98gXR8onwC&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=gK98gXR8onwC"
        },
        "saleInfo": {},
        "accessInfo": {},
        "searchInfo": {}
    }
}
```

# Wireframs/Architecture
- [WireFrame](https://www.figma.com/file/HL5L6aIwSGxrY9KnjjpSPg/BookWorm-MovieWorm?node-id=0%3A1)
- [React Architecture](https://docs.google.com/spreadsheets/d/1zW6M2NflVrBahyQOWUelU3vA32yDPH29mvx0glE2lOs/edit?usp=sharing)

# Time Priority Matrix/Chart
  
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Model | E | 2hrs | 2hrs | 2hrs |
| Create Controller | E | 2hrs | 5hrs | 5hrs |
| Setup Server | E | .5hr| .5hrs | .5hrs |
| Set up Connections  | E | .5hrs| 2hrs | 2hrs |
| create Seed File  | M | 2hrs | 2hrs | 2hrs |
| Research for Seed Data | E | 3hrs| 2hrs | 2hrs |
| Deployment  | H | 1hr| 4hrs | 4hrs |
| Total | H | 10hrs | hrs | hrs |

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create react app and components| H | .5hr| .5hr | .5hr |
| Install packages and Set up React Routing | H | .5hr| .5hr | .5hr |
| Create User Authentication | H | 4hrs | 8hrs | 8hrs |
| Make APIcall from App | H | .5hr| 1hr |1hr  |
| Set up the layout components (Header, NavBar, Footer) | H | .5hr | 1hr | 1hr |
| Searchbox for Books | H | 5hrs |5hrs |5hrs |
| Displaying information on Searched Book | H | 3hrs | 4hrs|4hrs |
| ReviewForm component | H | 4hrs |  |  |
| Functionality of adding reviews, notes, starts | H | 2hr|  |  |
| MyPage component + My Bookcase| H | 8hr|  |  |
| make delete / filter functionality in Past Reviews | H | 2hrs|  |  |
| Favorite Quotes component | H | 1.5hr | | |
| Basic Styling for nav, footer, about page | H | 2hrs| .5hrs | .5hrs |
| Basic Styling for main | H | 6hrs| 4hrs | 4hrs |
| Total | H | 39.5hrs|  |  | 

#### MVP
- Create PostgresDB using Ruby on Rails
- Use the api created by PostgresDB & Google Books
- Create routes between components in React
- Allow user to search for books and display information
- Allow user to write reviews
- Create CRUD Functionality for personal book data
- Create User Login / Verification using React 

#### PostMVP
- Allow user to set a goal
- Creating MovieWorm, which would be an similar application but for movies
- Create characters based on reading levels + different costumes that unlock based on # of movies watched
- Additional Styling and animations

## Components description
- Header
    - Header includes Logo and title of the page
- Nav
    - Navigation bar that allows user to navigate through searchBooks, searchMovies, MyPage, Summary, About pages
- Footer
    - Shared component with copyright info etc.
- Home
    - Home Page of the website that includes logo, title of the app, and log in form.
- Authentication
    - User Log in page
- Main
    - Main page that users get navigated into when logged in. This page includes this month's recommendations for books and movies
- RecBooks
    - This component generates monthly recommendation for books
- SearchBook
    - Search box for books, renders information on the searched book
- BookInfo
    - Shows info on book that was searched.
- RecordBook
    - Allows the user to write a review and give stars on the book
- Note
    - A form that is used for writing personal notes on a particular book
- Quote
    - A form that allows user to add their favorite quotes from a particular book
- StarReview
    - A component that allows user to give stars on a book
- MyPage
    - Page where users can view their profile / information and their reviews on the books they read / compilation of their favorite quotes / monthly stats of reading
- MyBookcase
    - Overview of the books that the user has read. This component includes a filter function based on dates.
- Book
    - When the user clicks on a single book in MyBookcase, it is routed to this component displaying information / reviews on the book selected
- FavQuotes
    - List of Favorite Quotes from the user. Drops down with an accordion dropdown function.
- Profile
    - Displays user's nickname, description, profile pic, goal of the year, statistics on the books read
- Statistics
    - Displays statistics on the books read (show which genre you read the most, # of books read)
- Feedback
    - Through this form, the user is able to send feedback of the app to the creator of the app.
- Logout
    - Log out function
- About
  - This will be about page with the description of the app


# Backend Description
- Models/Schemas

- Book Model
    - title - string (required)
    - authors - string (required)
    - year - string (required)
    - publisher - string (required)
    - imageLinks - array of strings (required)
    - pageNumber - integer (required)
    - description - text (required)
    - language - string
    - categories - array of strings
    - canonicalVolumeLink - string
    - starRating - integer 
    - reviews - array of strings
    - notes - array of strings
    - quotes - array of strings
    - profileId - integer

- User Model
    - nickname - string (required)
    - description - string
    - profilePicture - string
    - readingGoal - integer
    - totalPageNum - integer
    - books [Book Model scaffolded]
    
- Feedback Model
    - feedback - array of strings

# Additional libraries
- Axios
- React
- Node
- Express

# Code Snippet 
- project code 

```
return(
        <>
        {searchedBooks.totalItems ?
            <div>
                <h3>Search Results ({searchedBooks.totalItems})</h3>
                {searchedBooks.totalItems>15 ? <p>Showing top 15 results:</p> : null}
                <div className="search_result_div">
                {searchedBooks.items.map((book, index)=>{
                    return(
                    (book.volumeInfo.industryIdentifiers && book.volumeInfo.authors) ?
                    book.volumeInfo.industryIdentifiers[0].type !== "OTHER" && book.volumeInfo.language=="en"?
                    <div className="search_result_individual_div">
                        <Link to={"/main/mypage/book/"+book.volumeInfo.industryIdentifiers[0].identifier} ><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} height="100px" className="search_result_img"/></Link>
                        <p className="search_result_title">Title: {book.volumeInfo.title}</p>
                        <p className="search_result_authors">Author(s): {book.volumeInfo.authors.map((author)=>{
                            return(<p className="search_result_author">{author}</p>)
                        })}</p>
                        <p className="search_result_publisher">Publisher: {book.volumeInfo.publisher}</p>
                    </div> : null
                    : null)
                })}
                </div>
            </div>
        : null}
        </>
    )
```
```
useEffect(()=>{
        let newBookFormdata = new FormData();
        newBookFormdata.append("book[isbn]", selectedBookisbn.isbn);
        newBookFormdata.append("book[title]", selectedBookisbn.title);
        newBookFormdata.append("book[image_url]", selectedBookisbn.image_url);
        
        console.log(newBookFormdata)

        let newBookRequestOptions = {
            method: 'POST',
            body: newBookFormdata,
            redirect: 'follow'
        };

        fetch(`${apiUrl}/users/${userInfo.id}/books`, newBookRequestOptions)
            .then(response => response.text())
            .then(result => {console.log(result)
                            if(selectedBookisbn.title!==""){
                            fetchUpdatedUserInfo(authenInfo.token.token, authenInfo.id.id)
                            
                            }
                        })
            .catch(error => {console.log('error', error)});
            history.push(`/main/mypage/book/${isbn}`)
            
        },[selectedBookisbn])    
```
