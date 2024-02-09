import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import { menu } from "../../data";

function Menu() {
  return (
    <>
      <div className="menu">
        {menu.map((i) => (
          <div className="menuItem" key={i.id}>
            <span className="menuTitle">{i.title}</span>
            {i.listItems.map((listdata) => (
              <Link
                to={listdata.url}
                className="menulistItem"
                key={listdata.id}
              >
                <img src={listdata.icon} alt="" className="menulistItemImg" />
                <span className="menulistItemTitle">{listdata.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
