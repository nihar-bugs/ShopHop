import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url("https://wallpaperaccess.com/full/1496231.jpg");

  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-left: 210px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-family: "Urbanist", sans-serif;
`;

const Button = styled.button`
  width: 98%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin-top: 10px;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await publicRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      if (res.data.error) {
        alert(res.data.error);
      } else {
        setUsername("");
        setEmail("");
        setPassword("");
        alert("Registration Successful!!");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <Input
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input
            value={password}
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Button onClick={handleRegistration}>CREATE ACCOUNT</Button>
          <Link to="/login">Already Registeres? Login!</Link>
          <Link to="/">Back to ShopHop</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
