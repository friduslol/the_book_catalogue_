import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Navbar from "./components/Navbar"
import StartPage from "./pages/StartPage"
import UserPage from "./pages/UserPage"
import AdminPage from "./pages/AdminPage"
import Book from "./pages/Book"
import SignIn from "./pages/SignIn"
import CreateAcc from "./pages/CreateAcc"
import Footer from "./components/Footer"
import BookContextProvider from "./contexts/BookContext"
import UserContextProvider from "./contexts/UserContext"
import RequireUserAcc from "./components/RequireUserAcc"
import RequireAdmin from "./components/RequireAdmin"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <BookContextProvider>
            <Navbar />
                <Routes>
                  <Route path="/" element={<StartPage />} />
                  <Route path="/book/:id" element={<Book />} />
                  <Route path="/signIn" element={<SignIn />} />
                  <Route path="/createAccount" element={<CreateAcc />} />
                  <Route path="/userPage" element={
                    <RequireUserAcc redirectTo="/">
                      <UserPage />
                    </RequireUserAcc>
                  } />
                   <Route path="/adminPage" element={
                    <RequireAdmin redirectTo="/">
                      <AdminPage />
                    </RequireAdmin>
                  } />
                </Routes>
              <Footer />
            </BookContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
