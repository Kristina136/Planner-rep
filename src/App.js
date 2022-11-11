
import './App.css';
import img1 from './chek1.jpg';
import img2 from './icon.jpg';
import {Todo} from './Todo';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <img className='img' src={ img1 } width="250px" alt="check"/>
      </div>
      <div className='container'>
      <h1>To do list</h1>
      </div>
      <div className='container'>
        <Todo />
      </div>
      <div className='container'>
      <img className='img' src={ img2 } width="250px" alt="cheklist"/>
      </div>
    </div>
  );
}

export default App;
