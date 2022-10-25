import {
  StyledMenuBarContainer,
  StyledWindowsIcon
} from "../styles";

import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <StyledMenuBarContainer>
      <div className="windows-icons-group">
        <StyledWindowsIcon bgcolor='#E1574E' />
        <StyledWindowsIcon bgcolor='#E0BA4A' />
        <StyledWindowsIcon bgcolor='#56BB5B' />
      </div>
      <div className="nav-items-container">
        <NavLink to='/notes' className="nav-item">
          <img src={require('../assets/inbox.svg').default} alt="All Notes" />
          <span className="nav-item-text">All Note</span>
        </NavLink>
        <NavLink to='/new' className="nav-item">
          <img src={require('../assets/notebook.svg').default} alt="All Notes" />
          <span className="nav-item-text">Notebook</span>
        </NavLink>
        <div className="nav-item">
          <img src={require('../assets/favorite.svg').default} alt="All Notes" />
          <span className="nav-item-text">Favorite</span>
        </div>
        <div className="nav-item">
          <img src={require('../assets/trashbin.svg').default} alt="All Notes" />
          <span className="nav-item-text">Deleted</span>
        </div>
        <div className="nav-item">
          <img src={require('../assets/settings.svg').default} alt="All Notes" />
          <span className="nav-item-text">Settings</span>
        </div>
      </div>
    </StyledMenuBarContainer>
  )
}

export default MenuBar;