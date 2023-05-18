const initialState = {
  data: {},
  click: false,
  cart: [],
  total: 0,
  newcart: [],
};

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "CLICKED":
      return {
        cart: [...state.cart, action.payload],
        total: state.total + Number(action.payload.price),
      };
    case "REMOVEONE":
      return {
        cart: state.cart.filter((item) => item.id !== action.id),
        total: state.total - Number(action.price),
      };

    default:
      return state;
  }
};

export default dogReducer;
