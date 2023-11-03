
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<CustomerList/>}></Route>
            <Route path="add/:Id" element={<CustomerForm/>}></Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App;
