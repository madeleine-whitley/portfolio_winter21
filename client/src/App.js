import { Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Projects from './components/shared/Projects';
import Skills from './components/shared/Skills';
import Work from './components/shared/Work';
import NoMatch from './components/shared/NoMatch';
import Contacts from './components/contacts/Contacts';
import MainNavbar from './components/shared/MainNavbar';
import ContactShow from './components/contacts/ContactShow';
import Blogs from './components/blogs/Blogs';
import BlogShow from './components/blogs/BlogShow';
import Posts from './components/posts/PostShow';
import PostShow from './components/posts/PostShow';
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
        <Route exact path='/work' element={<Work />} />
        <Route exact path='/contacts' element={<Contacts />} />
        <Route exact path='/contacts/:contactId' element={<ContactShow />} />
        <Route exact path='/blogs' element={<Blogs />} />
        <Route exact path='/:blogId' element={<BlogShow />} />
        <Route exact path='/:posts' element={<Posts />} />
        <Route exact path='/posts/:postId' element={<PostShow />} /> 
        <Route path='/*' element={<NoMatch />} />
     </Routes>
    </>
    </Container>
  </>
)

export default App;