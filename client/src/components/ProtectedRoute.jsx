import { Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const ProtectedRoute = ({ element }) => {
  const { isSignedIn } = useAuth();

  // If the user is not signed in, redirect to the sign-in page
  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  // If the user is signed in, render the element
  return element;
};

export default ProtectedRoute;