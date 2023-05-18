import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import "./CartCompcss.css";
import { fetchData, removeCart } from "../redux/Action";

const CartComp = ({ image, val, price }) => {
  const data = useSelector((state) => state?.dog);
  console.log(val, "val");

  const dispatch = useDispatch();
  console.log(data);

  const remove = (id,price) => {
    dispatch(removeCart(id,price));
    console.log("remove", id);
    dispatch(fetchData());  
  };
  return (
    <>
 
    <div>
    <div className="cartwrapper">
      <div className="cartContent">
        <div className="cartimagediv">
          <img src={image} className="imagecart" />
        </div>
        <div className="price">{price} &#36;</div>
        <div className="button">
          <Button variant="outline-light" onClick={() => remove(val.id,price)}>
            Remove
          </Button>
        </div>
      </div>
    </div>
    </div>
    <div className="totalprice">
    <h2>Total: {data.total} &#36;</h2>
    </div>
    </>
  );
};

export default CartComp;
