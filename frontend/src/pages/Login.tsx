import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import ArtPaintLg from '../assets/art-paint-lg.jpg';
import RegisterLoginNav from '../components/RegisterLoginNav';
import { useState } from 'react';

const Login = () => {

  const [loginData,setLoginData] = useState({email:"",password:""});
  const {password,email} = loginData;


  function handleSubmit(e: React.SyntheticEvent){
    e.preventDefault();
    // console.log("login xwith data:\n", loginData);
  }

  function handleChange(e: React.SyntheticEvent){
    const target = e.target as HTMLInputElement;
    const targetId: string = target.id;
    setLoginData(prev => ({
      ...prev,
      [targetId]: target.value,
    }));
  }


  // view
  return (
    <div className="d-flex  align-items-center" style={{
      height:"600px",
      backgroundImage:`url("${ArtPaintLg}")`,
      backgroundSize: "cover",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }}>

      <Container>
        <Row className="p-sm-0 py-5 px-3">
          <Col className="d-sm-block d-none">
            {/* can put product,hero,logo,or anything in here... */}
          </Col>
          <Col className="px-3 py-4" style={{
            borderRadius:"10px",
            backgroundColor:"white",
            boxShadow:"0px 0px 5px black",
          }}>
            <Form onSubmit={handleSubmit}>
              <RegisterLoginNav />
              {/* <h5>Login terlebih dahulu untuk melanjutkan proses berikutnya</h5> */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} onChange={handleChange} placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handleChange} placeholder="Enter Password" />
              </Form.Group>

              <div className="d-flex justify-content-end gap-3">
                <Button variant="warning" type="reset">
                  Clear Form
                </Button>
                <Button variant="success" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default Login;