import { Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Projects from './components/shared/Projects';
import Skills from './components/shared/Skills';
import Testimonials from './components/shared/Testimonials';
import NoMatch from './components/shared/NoMatch';
import Contacts from './components/contacts/Contacts';
import MainNavbar from './components/shared/MainNavbar';
import ContactShow from './components/contacts/ContactShow';
import { Container } from 'react-bootstrap';


const App = () => (
  <>
    <MainNavbar />
    <Container> 
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/skills' element={<Skills />} />
        <Route exact path='/testimonials' element={<Testimonials />} />
        <Route exact path='/contacts' element={<Contacts />} />
        <Route exact path='/contacts/:contactId' element={<ContactShow />} />
        <Route path='/*' element={<NoMatch />} />
     </Routes>
    </>
    </Container>
  </>
)

export default App;