
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminCreatePost from './Component/Admin/AddPost/AdminCreatePost';
import AdminHome from './Component/Admin/Home/AdminHome';
import MakeAdmin from './Component/Admin/MakeAdmin/MakeAdmin';
import UpdatePost from './Component/Admin/UpdatePost/UpdatePost';
import UsersPost from './Component/Admin/UsersPost/UsersPost';
import AuthProvider from './context/AuthProvider/AuthProvider';
import AddPost from './Pages/Addpost/AddPost';
import SingleBlog from './Pages/Blog/SingleBlog';
import ClientBlogs from './Pages/Blogs/ClientBlogs';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/Login/LoginPage';
import SignupPage from './Pages/Signup/SignupPage';
import AdminRoute from './PrivateRoute/AdminRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<PrivateRoute><SingleBlog /></PrivateRoute>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/blogs" element={<ClientBlogs />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/admin" element={<AdminRoute><AdminHome /></AdminRoute>}>
              <Route path="userpost" element={<UsersPost />} />
              <Route path="createblog" element={<AdminCreatePost />} />
              <Route path="makeadmin" element={<MakeAdmin />} />
              <Route path="userpost/edit/:id" element={<UpdatePost />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
