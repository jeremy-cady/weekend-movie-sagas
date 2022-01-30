import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Description from '../Description/Description';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path='/description' exact>
          <Description />
        </Route>
        
        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
