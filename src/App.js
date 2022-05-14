import './App.css';
import MyList from './MyList';
import image from './fon.jpg'

function App() {
  return (
    <div className='app'>
      <img src={image} alt="girl" width="400px"/>
      <div className='container'>
      <h1>My to-do List</h1>
      </div>
      <MyList/>

    </div>
  );
}

export default App;
