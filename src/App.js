import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Contact from './pages/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      {/* BrowserRouter enables components to use routing capabilities */}
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          {/* The ID part is sent through this route, through the placeholder :callItWhateverYouWant, and on to the associated component (Post.js)   */}
          <Route path='/posts/:callItWhateverYouWant' element={<Post />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
