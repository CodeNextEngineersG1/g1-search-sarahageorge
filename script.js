var database;
var searchBar;
var searchButton;
var autoSuggestions;
var display;

database = [

  {
    name:"Jamal Turner",
    ethnicity:"African-American",
    goal:"finding the RollerWorld money",
    picture:"Jamal.jpg",
    bio:"the nerd of the group who is drawn into finding a hidden treasure scheme surrounding RollerWorld"
  },
  {
    name:"Monse Finnie",
    ethnicity:"Afro-Latina",
    goal:"getting Cesar out of the gang",
    picture:"Monse.jpg",
    bio:"a headstrong tomboy who serves as the de facto leader of her friend group. Raised by her single father, she is star-crossed lovers with one of her best friends, Cesar."
  },
  {
    name:"Cesar Diaz",
    ethnicity:"Latino",
    goal:"leaving the gang and being with Monse",
    picture:"cesar.jpg",
    bio:"an intelligent teen forced into gang life once his brother is released from prison, putting a strain on a blossoming relationship with him and Monse."
  },
  {
    name:"Ruby Martinez",
    ethnicity:"Mexican",
    goal:"making Olivia his girl",
    picture:"ruby.jpg",
    bio:"a smart-aleck math whiz often serving as the group's conscience."
  },
  {
    name:"Olivia",
    ethnicity:"Mexican",
    goal:"making the group into a family",
    picture:"olivia.jpg",
    bio:"a friend of Ruby's family, they take her in after her parents get deported back to Mexico and she becomes a member of the friend group."
  }


];

searchBar = document.getElementbyId("search-bar")
searchButton = document.getElementbyId("search-button")
autoSuggestions = document.getElementbyId("auto-suggestions")
display = document.getElementbyId("display")

 // Add event listeners to text searchBar and searchButton button below

  searchBar.addEventListener("keypress", checkKey);
  searchButton.addEventListener("click", processInput);


