import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, offCanvasHandler } from "../redux/Action";
import Button from "react-bootstrap/Button";
import "./HomePagecss.css";
import { DataContext } from "./ContextComp";  

const HomePage = () => {
  const { state, dispatch } = useContext(DataContext);
  const [inputval, setInputval] = useState("");
  console.log("home", state);
  const data = useSelector((state) => state.dog.data);
  console.log(data);
  const dispatchs = useDispatch();
  useEffect(() => {
    dispatchs(fetchData());
  }, []);

  //Offcanvas and cart
  const bidHandler = (data, inputval) => {
    console.log("data", data);
    dispatchs(offCanvasHandler(data, inputval));
    dispatch({ type: "offCanvasHandlervalue" });
    setTimeout(() => {
      dispatchs(fetchData());
    }, 100);
    setInputval(0);
  };

  // click handler
  const clickHandler = () => {
    dispatchs(fetchData());
  };

  const changeHandler = (e) => {
    setInputval(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="m-2">
            <Button variant="outline-success" onClick={clickHandler}>
              View Another
            </Button>{" "}
          </div>
          <div className="dog-size">
            <img src={data?.message} 
            className="dog" 
            alt="image" />
          </div>
        </div>
        <div className="button-div">
          <input
            type="text"
            className="mx-3 inputdiv"
            placeholder="Enter Amount in $"
            value={inputval}
            onChange={changeHandler}
          />
     
          {(!inputval) ? <Button
            variant="outline-primary"
            disabled
            >Enter Amount</Button> : <Button
          variant="outline-primary"
          onClick={() => bidHandler(data, inputval)}
        > Let's Bid </Button>} 
            
         {" "}
        </div>
      </div>
    </>
  );
};

export default HomePage;
