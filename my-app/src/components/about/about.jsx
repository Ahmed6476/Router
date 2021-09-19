import { Container, Image, Row, Col, Button } from 'react-bootstrap'

function About() {
  return (
    <Container>
      <Row>
        <Col md={7}><h1 style={{ color: 'white', fontFamily: 'cursive', }}>About</h1>
          <hr style={{ color: 'white' }} />

          <h3 style={{ color: 'white', fontFamily: 'cursive', fontSize: '20px' }}>
            It starts when children are young: the moment a child is born, relatives start comparing siblings’ skin colour.
            It starts in your own family – but people don’t want to talk about it openly.First published in 1961, Vonnegut’s satirical story imagines a future in which America’s quest for egalitarianism has resulted in laws preventing anyone from being “better than average.” Our title character is born strong, handsome and intelligent — and in order to make him equal to others, he is given golf-style “handicaps.” He has to wear glasses that make it hard for him to see (and that give him headaches). He has to wear weighted clothes and a rubber mask to counteract his strength and good looks.

            The US Declaration of Independence states as a self-evident truth that “all Men are created equal,” but in Vonnegut’s story,
            that idea is extrapolated to an absurd degree — offering some answers that may be uncomfortable to us.</h3>
          <Button variant="outline-light">Want to know more</Button>
        </Col>
        <Col md={5}>
          <br />
          <br />
          <br />
          <br />
          <Image src="https://wallpapercave.com/wp/wp2560439.jpg" thumbnail /></Col>

      </Row>

    </Container>
  )
}
export default About