import './Home.css';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>bookshelf</h1>

        <Link to="/home">home</Link>
        <Link to="/books">books</Link>
        <Link to="/store-app">Todos ContextAPI</Link>
        <Link to="/todos-redux">Todos redux</Link>
        <Link to="/todos-rtk">Todos RTK</Link>
        <Link to="/todos-mobx">Todos mobx</Link>
      </header>
    </div>
  );
}

export default Home;
