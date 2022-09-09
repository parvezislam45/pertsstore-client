import './App.css';
import Nav from './Components/Home/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Home/Footer';
import Blog from './Components/Blog/Blog';
import About from './Components/Home/About';
import Login from './Components/Pages/Login';
import Items from './Components/Items/Items';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Purchase from './Components/Purchase.js/Purchase';
import DashBoard from './Components/DashBoard/DashBoard'
import MyOrder from './Components/DashBoard/MyOrder'
import AddReview from './Components/DashBoard/AddReview'
import AllOrder from './Components/DashBoard/AllOrder'
import Payment from './Components/DashBoard/Payment'
import MyProfile from './Components/DashBoard/MyProfile'
import AllUser from './Components/DashBoard/AllUser'
import AddNewItem from './Components/DashBoard/AddNewItem'
import RequireAdmin from './Components/RequireAuth/RequireAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './Components/Pages/SignUp';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/items" element={<Items></Items>}></Route>
        <Route path="addnewproduct" element={<AddNewItem></AddNewItem>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path ='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
        <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="allorder" element={<AllOrder></AllOrder>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="alluser" element={<RequireAdmin><AllUser></AllUser></RequireAdmin>}></Route>
        </Route>
      </Routes>
      <ToastContainer/>
      <div className="mt-24"><Footer></Footer></div>  
    </div>
  );
}

export default App;
