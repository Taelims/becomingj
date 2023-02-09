import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem.js";

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;

function Sidebar() {
  const menus = [
    { name: "금일 일정", path: "/" },
    { name: "월간 일정", path: "/calendar" },
    { name: "빠른 메모", path: "/memo" },
    { name: "기타", path: "/likedlist" },
  ];
  return (
    <Side>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{ color: "gray", textDecoration: "none" }}
              to={menu.path}
              key={index}
              activeStyle={{ color: "black" }}
            >
              <SidebarItem menu={menu} />
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default Sidebar;
