import { useEffect, useState } from "react";
import "./products.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import queryString from "query-string";
import { useSelector } from "react-redux";

const Products = () => {
  const history = useNavigate();
  const params = useParams();
  const location = useLocation();
  const products = useSelector((state) => state?.productsReducer?.products);
  const [arr, setArr] = useState([]);
  const maker = queryString.parse(location.search)?.maker;

  useEffect(() => {
    console.log(location.pathname, queryString.parse(location.search));
    switch (location.pathname) {
      case "/lighting":
        setArr([
          ...products?.filter((item) => item?.header === "lighting")[0]?.data,
        ]);
        break;
      case "/speaker":
        setArr([
          ...products?.filter((item) => item?.header === "speaker")[0]?.data,
        ]);
        break;
      case "/doorbell":
        setArr([
          ...products?.filter((item) => item?.header === "doorbell")[0]?.data,
        ]);
        break;
      case "/thermostat":
        setArr([
          ...products?.filter((item) => item?.header === "thermostat")[0]?.data,
        ]);
        break;
      case "/doorlock":
        setArr([
          ...products?.filter((item) => item?.header === "doorlock")[0]?.data,
        ]);
        break;
      default:
        setArr([]);
    }

    if (maker !== "all") {
      console.log(
        maker,
        arr,
        arr.filter((item) => item?.maker === maker)
      );
    }
  }, [history, params, products, maker]);

  useEffect(() => {}, [arr, maker]);

  const checkpagetype = (maker) => {
    if (maker === "all") return arr;

    return arr.filter((item) => item?.maker === maker);
  };

  checkpagetype(maker).map((item, id) => {
    console.log(item?.image);
  });
  return (
    <>
      <div className="row">
        {checkpagetype(maker).map((item, id) => (
          <div className="col-lg-4">
            <div
              onClick={() =>
                history(
                  `${location.pathname}/item?maker=${item?.brand}&id=${item?.id}`
                )
              }
              className="prod_box"
            >
              <img alt="sananml" src={item?.image} />
              <div className="price">
                <h3>{item?.name}</h3>
                <h3>${item?.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
