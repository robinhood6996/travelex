
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './Component/Addpost/CreatePost';
import AdminCreatePost from './Component/Admin/AddPost/AdminCreatePost';
import AdminHome from './Component/Admin/Home/AdminHome';
import MakeAdmin from './Component/Admin/MakeAdmin/MakeAdmin';
import UsersPost from './Component/Admin/UsersPost/UsersPost';
import AuthProvider from './context/AuthProvider/AuthProvider';
import AddPost from './Pages/Addpost/AddPost';
import SingleBlog from './Pages/Blog/SingleBlog';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/Login/LoginPage';
import SignupPage from './Pages/Signup/SignupPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<PrivateRoute><SingleBlog /></PrivateRoute>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/admin" element={<AdminHome />}>
              <Route path="userpost" element={<UsersPost />} />
              <Route path="createblog" element={<AdminCreatePost />} />
              <Route path="makeadmin" element={<MakeAdmin />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
