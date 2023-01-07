import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styled from 'styled-components'
import Hover from "./Components/Hover";
import './App.css'

const coordinates = [
  {
    "id": 1,
    "region": "NORTH AMERICA",
    "data": 290,
    "class":"marker1 top-52 left-52 opacity-30 h-5 w-5",
  },
  {
    "id": 2,
    "region": "NORTH AMERICA",
    "data": 390,
    "class":"marker2 top-48 left-48 opacity-40 h-6 w-6",
  },
  {
    "id": 3,
    "region": "SOUTH AMERICA",
    "data": 590,
    "class":"marker2 top-[70%] left-[30%] opacity-60 h-8 w-8",
  },
  {
    "id": 4,
    "region": "SOUTH AMERICA",
    "data": 390,
    "class":"marker2 top-[70%] left-[25%] opacity-40 h-5 w-5 ",
  },
  {
    "id": 5,
    "region": "INDIA",
    "data": 900,
    "class":"marker2 top-[45%] left-[72%] opacity-90 h-10 w-10",
  },
  {
    "id": 6,
    "region": "INDIA",
    "data": 800,
    "class":"marker2 top-[45%] left-[52%] opacity-80 h-9 w-9",
  },
  {
    "id": 7,
    "region": "INDIA",
    "data": 200,
    "class":"marker2 top-[45%] left-[42%] opacity-20 h-3 w-3",
  },
  {
    "id": 8,
    "region": "INDIA",
    "data": 960,
    "class":"marker2 top-[70%] left-[52%] opacity-100 h-10 w-10",
  },
  {
    "id": 9,
    "region": "INDIA",
    "data": 560,
    "class":"marker2 top-[30%] left-[44%] opacity-60 h-7 w-7",
  },
  {
    "id": 10,
    "region": "INDIA",
    "data": 560,
    "class":"marker2 top-[30%] left-[62%] opacity-60 h-7 w-7",
  },
  {
    "id": 11,
    "region": "INDIA",
    "data": 560,
    "class":"marker2 top-[58%] left-[44%] opacity-100 h-10 w-10",
  },
  {
    "id": 12,
    "region": "INDIA",
    "data": 560,
    "class":"marker2 top-[15%] left-[8%] opacity-80  h-9 w-9",
  },
  {
    "id": 13,
    "region": "RUSSIA",
    "data": 560,
    "class":"marker2 top-[8%] left-[35%] opacity-60 h-7 w-7",
  },
  {
    "id": 14,
    "region": "RUSSIA",
    "data": 560,
    "class":"marker2 top-[90%] left-[22%] opacity-100 h-5 w-5",
  },
  {
    "id": 15,
    "region": "RUSSIA",
    "data": 560,
    "class":"marker2 top-[10%] left-[82%] opacity-100 h-9 w-9",
  },
  {
    "id": 16,
    "region": "RUSSIA",
    "data": 560,
    "class":"marker2 top-[50%] left-[82%] opacity-10 h-2 w-2",
  },
  {
    "id":17,
    "region": "RUSSIA",
    "data": 560,
    "class":"marker2 top-[50%] left-[82%] opacity-10 h-2 w-2",
  },
  {
    "id":18,
    "region": "RUSSIA",
    "data": 360,
    "class":"marker2 top-[85%] left-[90%] opacity-30 h-8 w-8",
  },
  {
    "id":19,
    "region": "RUSSIA",
    "data": 360,
    "class":"marker2 top-[30%] left-[75%] opacity-30 h-8 w-8",
  },
  {
    "id":20,
    "region": "RUSSIA",
    "data": 360,
    "class":"marker2 top-[20%] left-[70%] opacity-70 h-8 w-8",
  }
]


export default function App(){

  const [showModal, setShow] = useState(false);
  const [data, setdata] = useState('')

  const handleShow = ( coordiante  ) => {
    console.log(coordiante)
    setdata(coordiante);
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
    setdata('');
  }


  return (
    <div className="map">
      <img src="https://cdn.pixabay.com/photo/2013/07/12/12/54/world-map-146505_960_720.png" alt="map-img" onClick={handleClose} />
      {
          coordinates?.map((coordiante, i) => (
              <button
                className={coordiante?.class}
                onClick={() => handleShow(coordiante)}
              >
              </button>
          )
        )
      }
      <Modal  show={showModal} className='rounded-[20px] absolute left-0 top-0 ml-[25vw] mr-[20vw] w-[50vw] h-[40vh] border-none mt-[15vh] bg-white opacity-70' >
        <Modal.Body onClick={handleClose} className="">
          <h1 className=" text-6xl text-center">
            REGION -  {data?.region}
          </h1>
          <h2 className=" text-5xl text-center pt-5">
            Data - {data?.data}
          </h2>
        </Modal.Body>
      </Modal>
    </div>
  );
}