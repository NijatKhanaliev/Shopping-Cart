
import './App.css';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'

function App() {
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Dashboard />}></Route>
    <Route path='/card' element={<Cart />}></Route>
  </Route>
))

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
