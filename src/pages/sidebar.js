import React from "react";

const Sidebar = () => {
  return (
    <aside class="sidebar">
      <ul>
        <li>
          <h4>Lightings</h4>
          <ul>
            <li>
              <a href="/lighting?maker=Havells">Havells</a>
            </li>
            <li>
              <a href="/lighting?maker=Syska">Syska</a>
            </li>
            <li>
              <a href="/lighting?maker=Phillips">Phillips</a>
            </li>
          </ul>
        </li>

        <li>
          <h4>Speakers</h4>
          <ul>
            <li>
              <a href="/speaker?maker=Apple">Apple</a>
            </li>
            <li>
              <a href="/speaker?maker=Amazon">Amazon</a>
            </li>
            <li>
              <a href="/speaker?maker=Google">Google</a>
            </li>
          </ul>
        </li>

        <li>
          <h4>Doorbells</h4>
          <ul>
            <li>
              <a href="/doorbell?maker=Ecobee">Ecobee</a>
            </li>
            <li>
              <a href="/doorbell?maker=Proscenic">Proscenic</a>
            </li>
            <li>
              <a href="/doorbell?maker=Azzax">Azzax</a>
            </li>
          </ul>
        </li>

        <li>
          <h4>Thermostats</h4>
          <ul>
            <li>
              <a href="/thermostat?maker=Honeywell">Honeywell</a>
            </li>
            <li>
              <a href="/thermostat?maker=NestLabs">Nest Labs</a>
            </li>
            <li>
              <a href="/thermostat?maker=Emmerson">Emmerson</a>
            </li>
            <li>
              <a href="/thermostat?maker=Schneider">Schneider</a>
            </li>
            <li>
              <a href="/thermostat?maker=Nortek">Nortek</a>
            </li>
            <li>
              <a href="/thermostat?maker=Tado">Tado</a>
            </li>
          </ul>
        </li>

        <li>
          <h4>Doorlocks</h4>
          <ul>
            <li>
              <a href="/doorlock?maker=Yale">Yale</a>
            </li>
            <li>
              <a href="/doorlock?maker=Kwikset">Kwikset</a>
            </li>
            <li>
              <a href="/doorlock?maker=Schlage">Schlage</a>
            </li>
            <li>
              <a href="/doorlock?maker=SwitchBot">Switch Bot</a>
            </li>
            <li>
              <a href="/doorlock?maker=Ultraloq">Ultraloq</a>
            </li>
            <li>
              <a href="/doorlock?maker=Wyze">Wyze</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
