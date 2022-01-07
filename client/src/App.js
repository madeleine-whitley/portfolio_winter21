import { Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Projects from './components/shared/Projects';
import Skills from './components/shared/Skills';
import Work from './components/shared/Work';
import NoMatch from './components/shared/NoMatch';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/shared/Navbar';
import ContactShow from './components/contacts/ContactShow';
import Blogs from './components/blogs/Blogs';
import BlogShow from './components/blogs/BlogShow';
import PostShow from './components/posts/PostShow';
import { Container } from 'react-bootstrap';


const App = () => (
  <>
    <Navbar />
    <Container>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/projects' element={<Projects />} />
      <Route exact path='/skills' element={<Skills />} />
      <Route exact path='/work' element={<Work />} />
      <Route exact path='/contacts' element={<Contacts />} />
      <Route exact path='/contacts/:contactId' element={<ContactShow />} />
      <Route path='*' element={<NoMatch />} />
      <Route exact path='/blogs' element={<Blogs />} />
      <Route exact path='/:blogId' element={<BlogShow />} />
      <Route exact path='/posts/:postId' element={<PostShow />} /> 
    </Routes>
    </Container>
  </>
)

export default App;