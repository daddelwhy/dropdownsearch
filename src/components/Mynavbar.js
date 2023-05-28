import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Mynavbar.css"

function Mynavbar(props) {
    const {foodsdata} = props;
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MYHOME</Navbar.Brand>
          <select className="menu" onChange={foodsdata} >
                <option value="เมนูทั้งหมด">เมนูทั้งหมด</option>
                <option value="ผัด-ทอด">ผัด-ทอด</option>
                <option value="แกง-ต้มยำ">แกง-ต้มยำ</option>
                <option value="เครื่องดื่ม">เครื่องดื่ม (ชา กาแฟ นม)</option>
                <option value="สเต็ก">สเต็ก</option>
            </select>
        </Container>
      </Navbar>
    </>
  );
}

export default Mynavbar;