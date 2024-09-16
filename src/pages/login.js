import { useEffect, useState } from "react";
import { userActions } from "../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import _ from "lodash";
let obj = {
  user: "",
  password: "",
  usertype: "",
};
const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const isAuthenticated = useSelector(
    (state) => state?.userReducer?.isAuthenticated
  );
  const [currstate, setCurrState] = useState("login");
  const [newuser, setNewUser] = useState(null);
  const [frm, setFrm] = useState(obj);

  const handlechange = (e) => {
    if (e.target.name === "user") {
      setFrm({
        ...frm,
        user: e.target.value,
      });
    } else if (e.target.name === "password") {
      setFrm({
        ...frm,
        password: e.target.value,
      });
    } else if (e.target.name === "confirmpassword") {
      setFrm({
        ...frm,
        confirmpassword: e.target.value,
      });
    } else if (e.target.name === "usertype") {
      setFrm({
        ...frm,
        usertype: e.target.value,
      });
    }
  };

  const handesubmit = () => {
    if (
      currstate === "login" &&
      !_.isEmpty(frm.user) &&
      !_.isEmpty(frm.password) &&
      !_.isEmpty(frm.usertype)
    ) {
      dispatch(userActions.login(frm));
    } else if (
      currstate === "create" &&
      !_.isEmpty(frm.user) &&
      !_.isEmpty(frm.password) &&
      !_.isEmpty(frm?.confirmpassword) &&
      frm?.password === frm?.confirmpassword &&
      !_.isEmpty(frm.usertype)
    ) {
      dispatch(userActions.adduser(frm));
      setNewUser(true);
    }
  };

  useEffect(() => {
    if (newuser) {
      setTimeout(() => {
        setNewUser(null);
        history("/login");
      }, 2000);
    }
  }, [newuser]);

  useEffect(() => {
    if (location.pathname === "/createuser") {
      setCurrState("create");
    } else {
      setCurrState("login");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!_.isEmpty(isAuthenticated) && location.pathname === "/login") {
      console.log(isAuthenticated);
      history("/home");
    }
  }, [isAuthenticated, location.pathname]);

  return (
    <>
      {(() => {
        switch (currstate) {
          case "login":
            return (
              <>
                <div className="loginbox flexcol">
                  <label className="flexcol">
                    {" "}
                    Username:{" "}
                    <input type="text" name="user" onChange={handlechange} />
                  </label>
                  <label className="flexcol">
                    {" "}
                    Password:{" "}
                    <input
                      type="password"
                      name="password"
                      onChange={handlechange}
                    />
                  </label>
                  <label className="flexcol">
                    {" "}
                    User Type:
                    <select
                      name="usertype"
                      id="usertype"
                      onChange={handlechange}
                    >
                      <option value="">Select</option>
                      <option value="customer">customer</option>
                      <option value="storagemanager">Store Manager</option>
                      <option value="salesman">Salesman</option>
                    </select>
                  </label>
                  <button onClick={handesubmit}> Login </button>
                  <span onClick={() => history("/createuser")}>
                    {" "}
                    Create User{" "}
                  </span>
                </div>
              </>
            );
          case "create":
            return (
              <>
                <div className="loginbox flexcol">
                  <label className="flexcol">
                    Create username:{" "}
                    <input type="text" name="user" onChange={handlechange} />
                  </label>
                  <label className="flexcol">
                    Create password:{" "}
                    <input
                      type="password"
                      name="password"
                      onChange={handlechange}
                    />
                  </label>
                  <label className="flexcol">
                    Confirm password:{" "}
                    <input
                      type="password"
                      name="confirmpassword"
                      onChange={handlechange}
                    />
                  </label>
                  <label className="flexcol">
                    {" "}
                    User Type:
                    <select
                      name="usertype"
                      id="usertype"
                      onChange={handlechange}
                    >
                      <option value="">Select</option>
                      <option value="customer">Customer</option>
                      <option value="storagemanager">Store Manager</option>
                      <option value="salesman">Salesman</option>
                    </select>
                  </label>
                  <button onClick={handesubmit} disabled={newuser}>
                    {" "}
                    Sign Up{" "}
                  </button>
                  {newuser && <h4>New User Created</h4>}
                </div>
              </>
            );
        }
      })()}
    </>
  );
};

export default Login;
