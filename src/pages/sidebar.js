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
              <a href="/doorlocks?maker=Yale">Yale</a>
            </li>
            <li>
              <a href="/doorlocks?maker=Kwikset">Kwikset</a>
            </li>
            <li>
              <a href="/doorlocks?maker=Schlage">Schlage</a>
            </li>
            <li>
              <a href="/doorlocks?maker=SwitchBot">Switch Bot</a>
            </li>
            <li>
              <a href="/doorlocks?maker=Ultraloq">Ultraloq</a>
            </li>
            <li>
              <a href="/doorlocks?maker=Wyze">Wyze</a>
            </li>
          </ul>
        </li>

        <li>
          <h4>About us</h4>
          <ul>
            <li class="text">
              <p style={{ margin: 0 }}>
                Aenean nec massa a tortor auctor sodales sed a dolor. Duis vitae
                lorem sem. Proin at velit vel arcu pretium luctus.{" "}
                <a href="#" class="readmore">
                  Read More &raquo;
                </a>
              </p>
            </li>
          </ul>
        </li>

        <li>
          <h4>Search site</h4>
          <ul>
            <li class="text">
              <form method="get" class="searchform" action="#">
                <p>
                  <input type="text" size="31" value="" name="s" class="s" />
                </p>
              </form>
            </li>
          </ul>
        </li>

        <li>
          <h4>Helpful Links</h4>
          <ul>
            <li>
              <a
                href="http://www.themeforest.net/?ref=spykawg"
                title="premium templates"
              >
                Premium HTML web templates from $10
              </a>
            </li>
            <li>
              <a
                href="http://www.dreamhost.com/r.cgi?259541"
                title="web hosting"
              >
                Cheap web hosting from Dreamhost
              </a>
            </li>
            <li>
              <a href="http://tuxthemes.com" title="Tux Themes">
                Premium WordPress themes
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
