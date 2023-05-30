import axios from "axios";
export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: "STARTED" });
    return axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        // console.log(res.data);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "FETCH_FAILED", payload: err });
      });
  };
};

export const offCanvasHandler = (data, inputval) => {
  return (dispatch) => {
    dispatch({
      type: "CLICKED",
      payload: {
        message: data.message,
        price: inputval,
        id: Math.floor(Math.random() * 1000),
      },
    });
  };
};
export const removeCart = (id, price) => {
  return (dispatch) => {
    console.log(id, "id");
    dispatch({ type: "REMOVEONE", id: id, price: price });
  };
};
