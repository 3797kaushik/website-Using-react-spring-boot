import React , {useEffect} from 'react'
import { Card, Container } from 'reactstrap';

function Header({name}) {
  
  useEffect(()=>{
    document.title = 'All Course'
  }, []);
  return(
    <div>
      <Card className='text-center my-2 bg-warning'>
        <Container>
          <h1 className='text-center my-2'> Welcome to course application</h1>
        </Container>
      </Card>
      
    </div>
  );
/*  return (
    <div style ={{background : 'yellow' ,padding:10 , width:400 }}>
      <h1> header</h1>
        <h1>{name}</h1>
        <p>
         for learning purpose
        </p>
    </div>
  );
  */
}

export default Header;
