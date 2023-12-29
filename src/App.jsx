import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext/UserContext";
import HomePage from "./moudles/HomePage/HomePage";
import { PATH } from "./routes/path";
import MovieLayout from "./layouts/MovieLayout";
import { Suspense } from "react";
import SignIn from "./moudles/auth/SignIn/SignIn";
import SignUp from "./moudles/auth/SignUp";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import AdminPage from "./moudles/AdminPage/AdminPage";
import UserMangePage from "./moudles/AdminPage/UserManagePage/UserMangePage";
import MovieManagePage from "./moudles/AdminPage/movieMangePage/movieManagePage";
import MovieDetailManage from "./moudles/AdminPage/MovieMangePage/MovieDetailManage";
import AddMovieManage from "./moudles/AdminPage/MovieMangePage/AddMovieManage";
import MovieManageLayout from "./layouts/MovieManageLayout/MovieManageLayout";
import UserManageLayout from "./layouts/UserManageLayout/UserManageLayout";
import UserDetailManage from "./moudles/AdminPage/UserManagePage/UserDetailManage";
import AddUserManage from "./moudles/AdminPage/UserManagePage/AddUserManage";
import Details from "./moudles/HomePage/Details";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.HOME} element={<MovieLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<div>Loading...</div>}>
                 <HomePage/>
                </Suspense>
              }
            >
            </Route>
            <Route
              path='/:maPhim'
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Details/>
                </Suspense>
              }
            ></Route>
            <Route
              path={PATH.SIGN_IN}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SignIn />
                </Suspense>
              }
            ></Route>
            <Route
              path={PATH.SIGN_UP}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SignUp />
                </Suspense>
              }
            ></Route>
            
          </Route>
          <Route path={PATH.ADMIN} element={<AdminLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AdminPage />
                </Suspense>
              }
            />
            <Route
              path={PATH.USER_MANAGEMENT}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <UserManageLayout />
                </Suspense>
              }
            >
              <Route index element={<UserMangePage />} />
              <Route
                path={PATH.EDIT_USER_MANAGE}
                element={<UserDetailManage />}
              />
              <Route path={PATH.ADD_USER_MANAGE} element={<AddUserManage />} />
            </Route>
            <Route
              path={PATH.MOVIE_MANAGEMENT}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MovieManageLayout />
                </Suspense>
              }
            >
              <Route index element={<MovieManagePage />} />
              <Route
                path={PATH.EDIT_MOVIE_MANAGE}
                element={<MovieDetailManage />}
              />
              <Route
                path={PATH.ADD_MOVIE_MANAGE}
                element={<AddMovieManage />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
export default App;
