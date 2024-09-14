import Container from 'react-bootstrap/Container'; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#343a40', color: '#ffffff', padding: '10px 0', textAlign: 'center', borderTop: '1px solid #FD366E' }}>
      <Container>
        <p style={{ margin: '0', fontSize: '14px', fontWeight: '400' }}>
          © {new Date().getFullYear()} Resume Align. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;