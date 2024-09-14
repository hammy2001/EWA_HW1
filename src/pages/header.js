import React from "react";

const Header = () => {
  return (
    <header>
      <div class="width">
        <h1>
          <a href="/">
            Company<span>Name</span>
          </a>
        </h1>
      </div>
      <nav>
        <div class="width">
          <ul>
            <li class="start selected">
              <a href="/">Home</a>
            </li>
            <li class="">
              <a href="/lighting?maker=all">Lightings</a>
            </li>
            <li>
              <a href="/speaker?maker=all">Speakers</a>
            </li>
            <li>
              <a href="/doorbell?maker=all">Doorbells</a>
            </li>
            <li>
              <a href="/thermostat?maker=all">Thermostats</a>
            </li>
            <li>
              <a href="/doorlock?maker=all">Doorlocks</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
