
import './App.css';
import BrowserRouter from 'react-dom'
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={CustomerList}></Route>
            <Route path="/customerForm" element={CustomerForm}></Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App;
