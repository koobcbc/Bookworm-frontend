# BookWorm Project

# Description

-   Bookworm is an application that allows users to leave notes/review/stars/favorite quotes on any books they have read. The app allows users to view, update, and delete their previous reviews. The app also keeps track of statistics of number of books read, and also gives a statistics on what type of books you enjoy.


# Project Links 
## Project URL
- []()

## Git Repos
- [frontend git](https://github.com/koobcbc/Bookworm-frontend) 
- [backend git](https://github.com/koobcbc/Bookworm-backend)

# Wireframs/Architecture
- [WireFrame](https://www.figma.com/file/HL5L6aIwSGxrY9KnjjpSPg/BookWorm-MovieWorm?node-id=0%3A1)
- [React Architecture](https://docs.google.com/spreadsheets/d/1zW6M2NflVrBahyQOWUelU3vA32yDPH29mvx0glE2lOs/edit?usp=sharing)

# Time Priority Matrix/Chart
  
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Model | E | 2hrs |  |  |
| Create Controller | E | 2hrs |  |  |
| Setup Server | E | .5hr| hrs | hrs |
| Set up Connections  | E | .5hrs| hrs | hrs |
| create Seed File  | M | 2hrs | hrs | hrs |
| Research | E | 2hrs| hrs | hrs |
| Deployment  | H | 1hr| hrs | hrs |
| Total | H | 10hrs | hrs | hrs |

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create react app and components| H | .5hr|  |  |
| Install packages and Set up React Routing | H | .5hr|  |  |
| Create User Authentication | H | 4hrs |  |  |
| Make APIcall from App | H | .5hr|  |  |
| Set up the layout components (Header, NavBar, Footer) | H | .5hr |  |  |
| Searchbox for Books | H | 5hrs | | |
| Displaying information on Searched Book | H | 3hrs | | |
| ReviewForm component | H | 4hrs |  |  |
| Functionality of order form | H | 2hr|  |  |
| MyPage component + My Bookcase| H | 8hr|  |  |
| make delete / filter functionality in Past Reviews | H | 2hrs|  |  |
| Favorite Quotes component | H | 1.5hr | | |
| Basic Styling for nav, footer, about page | H | 2hrs|  |  |
| Basic Styling for main | H | 6hrs|  |  |
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
- models/Schemas



# Additional libraries
- Axios
- React
- Node
- Express

# Code Snippet 
- project code 

```

```
