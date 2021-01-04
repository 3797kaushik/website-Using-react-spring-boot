import React from 'react'
import {Jumbotron , Container , Button} from 'reactstrap'

function Home() {
  return (
    <div >
      <Jumbotron className='text-center'>
            <h1> Learning Header</h1>
            <p>
            for learning purpose
            </p>
            <Container>
                <Button color='primary' outline> Start Using</Button>
            </Container>
        </Jumbotron>  
    </div>
  );
}

export default Home;
