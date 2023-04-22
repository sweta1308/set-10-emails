import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Inbox } from './pages/Inbox';
import { Spam } from './pages/Spam';
import { Trash } from './pages/Trash';
import { Starred } from './pages/Starred';
import {Details} from './pages/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Inbox />} />
        <Route path='/trash' element={<Trash />} />
        <Route path='/spam' element={<Spam />} />
        <Route path='/starred' element={<Starred />} />
        <Route path='/details/:mailID' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
