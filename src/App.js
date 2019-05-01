import React, { Component } from 'react';

import './App.css';


const movieDB = [

  {
      "@id": "7391",
      "@uri": "/api/contentpanel/element/7391.json",
      "sortIndex": 0,
      "title": "Action"
  },
  {
      "@id": "7392",
      "@uri": "/api/contentpanel/element/7392.json",
      "sortIndex": 1,
      "title": "Drama"
  },
  {
      "@id": "7393",
      "@uri": "/api/contentpanel/element/7393.json",
      "sortIndex": 2,
      "title": "Komedie"
  },
  {
      "@id": "7394",
      "@uri": "/api/contentpanel/element/7394.json",
      "sortIndex": 3,
      "title": "Thriller"
  // }
  //    {  id : 1,
  //   name: "iphone6s",
  //   cost: "600",
  //   description: "Lorem ipsum dolor sit amet,serunt mollit anim id est laborum."
  // },
  // {
  //   id : 2,
  //   name: "galaxy9",
  //   cost: "1200",
  //   description: "Lorem ipsum dolor sit amet,serunt mollit anim id est laborum."
  // },
  // {
  //   id : 3,
  //   name: "iphone10",
  //   cost: "1500",
  //   description: "Lorem ipsum dolor sit amet,serunt mollit anim id est laborum."
  // },
  // {
  //   id : 4,
  //   name: "alcatel1x",
  //   cost: "300",
  //   description: "Lorem ipsum dolor sit amet,serunt mollit anim id est laborum."
  // },
  // {
  //   id : 5,
  //   name: "lenovo",
  //   cost: "500",
  //   description: "Lorem ipsum dolor sit amet,serunt mollit anim id est laborum."
  // },
  // {
  //  id : 6,
  //  name: "lieco",
  //  cost: "600",
  //  description: "Lorem ipsum dolor sit amet,serunt mollit anim id est laborum."
   }
]

/***************************
 * Filter function
 */

function searchFor(term){
  return function(mv){ 
    return mv.title.toLowerCase().includes(term.toLowerCase()) || false;  // match term with the "title"
  }
}


class App extends Component{

  constructor(props){
    super(props);
      this.state ={
        movies: movieDB,
        term:'',
      
    }
    this.searchHandler = this.searchHandler.bind(this);


}// constructor

/*******    Methods area     **************************************************************************************************************** */

    // searchHandler method
    searchHandler(event){
      this.setState({term: event.target.value})
    }

  
    

    // filter()

/*******    Methods area     **************************************************************************************************************** */




 
  render(){ 

    const {term, movies} = this.state;

  return (

    <div className="App">

    <form><input type="text"
                  onChange={this.searchHandler.bind(this)}
                      value = {term}
                  />
    
    
    </form>

           {movies.filter(searchFor(term)).map((movie=>           
           <div>
              <h3>@id: {movie["@id"]}</h3>
              <h3>Title: {movie.title}</h3>
              <h3>SortIndex :  { movie.sortIndex}</h3>
            </div>
          )
           
           
           )

        
}
</div>



//     <div className="App">
//            {movieDB.map(function(movie){

//         return(
//           <div>
//             <h3>@id: {movie["@id"]}</h3>
//             <h3>Title: {movie.title}</h3>
//             <h3>SortIndex :  { movie.sortIndex}</h3>
//           </div>
//         )
// })}
// </div>
  );
}
} 
export default App;
