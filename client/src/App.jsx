import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavComponent from './components/Layout/Navbar';
import Dashboard from './pages/Dashboard';
import SignInPage from './pages/SignIn';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Add a route for the sign-in page */}
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
