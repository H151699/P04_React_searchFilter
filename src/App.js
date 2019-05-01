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
  }
]


class App extends Component{

  constructor(props){
    super(props);
      this.state ={
        movies: movieDB
      
    }
  }
 
  render(){ 

  return (

    <div className="App">

    <form><input type="text"
                  onChange={this.searchHandler} />
    
    
    </form>

           {this.state.movies.map((movie=>           
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
