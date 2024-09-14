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
              <a href="/lighting?maker=Apple">Apple</a>
            </li>
            <li>
              <a href="/lighting?maker=Amazon">Amazon</a>
            </li>
            <li>
              <a href="/lighting?maker=Google">Google</a>
            </li>
          </ul>
        </li>

        <li>
          <h4>Doorbells</h4>
          <ul>
            <li>
              <a href="/lighting?maker=Ecobee">Ecobee</a>
            </li>
            <li>
              <a href="/lighting?maker=Proscenic">Proscenic</a>
            </li>
            <li>
              <a href="/lighting?maker=Azzax">Azzax</a>
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
