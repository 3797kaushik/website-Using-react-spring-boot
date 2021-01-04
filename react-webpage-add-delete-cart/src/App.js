import './App.css';

import Header from './components/Header';
import AllCourses from './components/AllCourses';
import Course from './components/Course';
import Home from './components/Home';

import { Button,Row, Col, Container } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import AddCourse from './components/AddCourse';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const notify = () => toast("Wow so easy !");
  const btnHandle = ()=>{
    toast.success('done' , {
      'position':'top-center'
    });
  };
  return (
    <div>
     <Router>
      <ToastContainer />
        <Container>
          <Header/>
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
                <Route path="/" component={Home} exact />
                <Route path="/add-course" component={AddCourse} exact />
                <Route path="/view-courses" component={AllCourses} exact />
            </Col>
          </Row>
        </Container>
     </Router>
    </div>
  );
  /*
  return (
    <div>
      <Button color='primary'>First button </Button>
      <Header name="Iron Man"/>
      <hr />
      <button onClick={notify}>Notify !</button>
      <button onClick={btnHandle}>Notify !</button>
      <ToastContainer />
      <Header name="BatMan"/>
      <hr />
      <h1> this is my react app</h1>
      <p>this is a paragraph used for learning purpose</p>
      <p>because I want to develop an application calls my app.</p>
      <Header name="Spiderman"/>
    </div>
  );
  */
}

export default App;
