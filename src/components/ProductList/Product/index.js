import React from "react";
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cart/cart.actions'
import { Constants } from "../../../api/Constans";

const Product = (props) => {

  const dispatch = useDispatch();

  const onClickHandler = () => {
    console.log(props.data)
    dispatch(addToCart(props.data))
  }

  const { _id, productName, image, unit, price, mrp, description } = props.data;
  return (
    <div class="col-sm-4" key={_id}>
      <div class="card">
        <img
          src={Constants.IMAGE_URL + image}
          class="card-img-top"
          alt={productName}
        />
        <div class="card-body">
          <h5 class="card-title">{productName}</h5>
          <p>{unit}</p>

          <h1>
            <i class="fa fa-inr" aria-hidden="true"></i> {price}
            <span style={{ color: "#999", fontSize: "22px" }}>
              <del>
                <i class="fa fa-inr" aria-hidden="true"></i> {mrp}
              </del>
            </span>
          </h1>
          <button onClick={ onClickHandler } class="btn btn-primary btn-block">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
