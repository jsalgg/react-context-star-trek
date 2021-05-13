import { NavLink } from "react-router-dom";

import { initialDecks } from "../../mockdata/CardData";
import { useApp } from "../../context/AppContext";

const Navbar = () => {
  const { applicationState } = useApp();
  const decks = applicationState.decks;
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <NavLink
          to={`/store`}
          activeClassName="is-selected"
          className="navbar-item"
        >
          Shop
        </NavLink>
        {decks.map((deck, i) => {
          return (
            <NavLink
              to={`/deck/${i}`}
              className="navbar-item"
              activeClassName="is-selected"
              key={i}
            >
              {deck.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
