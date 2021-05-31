import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Contact from './Pages/Contact';
import Index from './Pages/Index';

function App() {
  return (
    <Container>
      <Router>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path exact='/'>
          <Index />
        </Route>
      </Router>
    </Container>
  );
}

export default App;
