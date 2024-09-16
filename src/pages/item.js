import queryString from "query-string";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./products.scss";
import { cartActions } from "../redux/actions/cart";
const Item = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const path = location?.pathname;
  const products = useSelector((state) => state?.productsReducer?.products);
  const [item, setItem] = useState([]);
  const typeofprod = path?.split("/item")[0].substring(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const obj = products?.filter((item) => item?.header === typeofprod)[0];
    setItem([
      ...obj?.data?.filter(
        (item) => item?.brand === query?.maker && item?.id === query?.id
      ),
    ]);
  }, []);

  const handleaAddItem = (item) => {
    dispatch(cartActions.addItem(item));
  };

  return (
    <div className="flexcenter flexcol" style={{ alignItems: "center" }}>
      {item.map((data, key) => (
        <>
          <div key={key} className="item_box">
            <img src={data?.image} />
            <p>{data?.description}</p>
            <div
              className="flexrow"
              style={{ justifyContent: "space-between" }}
            >
              <h3 style={{ marginRight: "30px" }}>{data?.name} </h3>
              <h4>${data?.price}</h4>
            </div>
            <div className="flexrow">
              <h5 style={{ marginRight: "20px" }}>
                Discount: ${data?.discount}
              </h5>
              <h5>Warranty: ${data?.warranty}</h5>
            </div>
            <button onClick={() => handleaAddItem(data)} className="btnn">
              Add to Cart
            </button>
          </div>
          <h3>Accessories</h3>
          <div className="rowcl row" style={{ justifyContent: "space-evenly" }}>
            {data?.accessories?.map((item, key) => (
              <div className="col-lg-3 accbox" key={key}>
                <img src={item?.image} />
                <p>{item?.type}</p>
                <p>{item?.description}</p>
                <p>${item?.price}</p>
                <button onClick={() => handleaAddItem(item)} className="btnn">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Item;
