import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '20px',
      }}>
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;