import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/actions/cart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state?.cartReducer?.cart);
  const [items, setItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [warranty, setWarranty] = useState(0);
  const [did, setDid] = useState([]);
  const [wid, setWid] = useState([]);
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    setItem([...cart]);
    let sum = 0;
    cart?.forEach((c) => {
      sum += c?.price;
    });
    setTotal(sum);
  }, [cart]);

  const remove = (data) => {
    dispatch(cartActions.removeItem(data));
  };

  const addorder = (data) => {
    let obj = {
      user: "hamdan",
      name: "hamdan",
      total: document.getElementById("totalid")?.innerText,
      products: [...data],
    };
    console.log(document.getElementById("totalid")?.innerText);

    dispatch(cartActions.addorder(obj));
    history("/checkout");
  };

  return (
    <>
      <h3>Cart {cart?.length}</h3>
      <div className="row">
        <div className="col-lg-6 col-md-6 cartbox">
          {items?.map((data, key) => (
            <div key={key} className="item_box" style={{ width: "500px" }}>
              <img src="https://t3.ftcdn.net/jpg/01/05/57/38/240_F_105573812_cvD4P5jo6tMPhZULX324qUYFbNpXlisD.jpg" />
              <p>{data?.description}</p>
              <div
                className="flexrow"
                style={{ justifyContent: "space-between" }}
              >
                <h3 style={{ marginRight: "30px" }}>
                  {data?.name || data?.type}{" "}
                </h3>
                <h4>${data?.price}</h4>
              </div>
              <div className="flexrow">
                {!did.includes(data?.id) && data?.discount && (
                  <button
                    onClick={() => {
                      setDiscount(discount + data?.discount);
                      setDid([...did, data?.id]);
                    }}
                    className="discount"
                    style={{ marginRight: "20px" }}
                  >
                    Add Discount: -${data?.discount}
                  </button>
                )}
                {did.includes(data?.id) && (
                  <button
                    onClick={() => {
                      setDiscount(discount - data?.discount);
                      setDid([...did.filter((d) => data?.id !== d)]);
                    }}
                    className="discount"
                    style={{ marginRight: "20px" }}
                  >
                    Remove Discount: +${data?.discount}
                  </button>
                )}
                {!wid.includes(data?.id) && data?.discount && (
                  <button
                    onClick={() => {
                      setWarranty(warranty + data?.warranty);
                      setWid([...wid, data?.id]);
                    }}
                    className="discount"
                    style={{ marginRight: "20px" }}
                  >
                    Add Warranty: +${data?.warranty}
                  </button>
                )}
                {wid.includes(data?.id) && (
                  <button
                    onClick={() => {
                      setWarranty(warranty - data?.warranty);
                      setWid([...wid.filter((d) => data?.id !== d)]);
                    }}
                    className="discount"
                    style={{ marginRight: "20px" }}
                  >
                    Remove Warranty: -${data?.warranty}
                  </button>
                )}
              </div>
              <button
                onClick={() => {
                  remove(data);
                }}
                className="btnn"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="flexcol">
            <h3>Cart Total</h3>
            <span>Product Total: ${total}</span>
            {discount > 0 && <span>-${discount}</span>}
            {warranty > 0 && <span>+${warranty}</span>}
            {total > 0 && <span>Tax: 10.25%</span>}
            {
              <span>
                Your total: $
                <span id="totalid">
                  {" "}
                  {parseFloat((total - discount + warranty) * 1.1025).toFixed(
                    2
                  )}
                </span>
              </span>
            }
            <button
              className="btnn"
              style={{ width: "200px" }}
              onClick={() => {
                addorder(items);
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
