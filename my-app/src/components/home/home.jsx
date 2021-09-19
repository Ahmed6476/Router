
import {Carousel,Container,Row,Col} from 'react-bootstrap'


function Home(){
    return(
      <Container>
      <Row>
        {/* <Col md={2}></Col> */}
        <Col md={12}> 
<br/>
       
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRhcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
      alt="First slide"
      height='500px'
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.setaswall.com/wp-content/uploads/2017/06/Dark-Wallpapes-17-1920-x-1200.jpg"
      alt="Second slide" height='500px'
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpapermemory.com/uploads/154/dark-background-hd-1080p-111744.jpg"
      alt="Third slide"
      height='500px'
      />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></Col>
      
      </Row>
     
    </Container>

       
    
    )
}
export default Home