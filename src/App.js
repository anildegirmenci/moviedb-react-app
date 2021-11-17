import './App.css';
import { Routes, Route } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import Home from './components/Home';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" component={<MovieDetail/>} />
      </Routes>
  );
}

export default App;
