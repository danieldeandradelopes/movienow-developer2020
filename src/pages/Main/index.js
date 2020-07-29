import React, { Component } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import Header from '../../components/Header';

class Main extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Container
          style={{
            paddingTop: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: 300,
          }}
        >
          <h1 style={{ color: '#fff', fontFamily: 'ubuntu', marginTop: 20 }}>
            Moview Now
          </h1>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: 250, margin: 10 }}>
              <Card.Img
                variant="top"
                style={{
                  width: 220,
                  height: 320,
                  alignSelf: 'center',
                  paddingTop: 20,
                  cursor: 'pointer',
                }}
                src="https://media.fstatic.com/wpvwU0X-tCzlzfilzodhcsxECqw=/290x478/smart/media/movies/covers/2012/07/56eb1ab9acd1a73c6552056b421fc5ed.jpg"
              />
              <Card.Body
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{ fontSize: 12 }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button style={{ width: '100%' }} variant="outline-dark">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: 250, margin: 10 }}>
              <Card.Img
                variant="top"
                style={{
                  width: 220,
                  height: 320,
                  alignSelf: 'center',
                  paddingTop: 20,
                  cursor: 'pointer',
                }}
                src="https://media.fstatic.com/wpvwU0X-tCzlzfilzodhcsxECqw=/290x478/smart/media/movies/covers/2012/07/56eb1ab9acd1a73c6552056b421fc5ed.jpg"
              />
              <Card.Body
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{ fontSize: 12 }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button style={{ width: '100%' }} variant="outline-dark">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: 250, margin: 10 }}>
              <Card.Img
                variant="top"
                style={{
                  width: 220,
                  height: 320,
                  alignSelf: 'center',
                  paddingTop: 20,
                  cursor: 'pointer',
                }}
                src="https://media.fstatic.com/wpvwU0X-tCzlzfilzodhcsxECqw=/290x478/smart/media/movies/covers/2012/07/56eb1ab9acd1a73c6552056b421fc5ed.jpg"
              />
              <Card.Body
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{ fontSize: 12 }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button style={{ width: '100%' }} variant="outline-dark">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: 250, margin: 10 }}>
              <Card.Img
                variant="top"
                style={{
                  width: 220,
                  height: 320,
                  alignSelf: 'center',
                  paddingTop: 20,
                  cursor: 'pointer',
                }}
                src="https://media.fstatic.com/wpvwU0X-tCzlzfilzodhcsxECqw=/290x478/smart/media/movies/covers/2012/07/56eb1ab9acd1a73c6552056b421fc5ed.jpg"
              />
              <Card.Body
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{ fontSize: 12 }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button style={{ width: '100%' }} variant="outline-dark">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: 250, margin: 10 }}>
              <Card.Img
                variant="top"
                style={{
                  width: 220,
                  height: 320,
                  alignSelf: 'center',
                  paddingTop: 20,
                  cursor: 'pointer',
                }}
                src="https://media.fstatic.com/wpvwU0X-tCzlzfilzodhcsxECqw=/290x478/smart/media/movies/covers/2012/07/56eb1ab9acd1a73c6552056b421fc5ed.jpg"
              />
              <Card.Body
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{ fontSize: 12 }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button style={{ width: '100%' }} variant="outline-dark">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
