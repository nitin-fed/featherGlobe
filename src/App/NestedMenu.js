

import React from "react";
import { menuItems } from "./nestedMenuData";
import MenuItem from "./MenuItem";

export default function NestedMenu() {
  const _menuItems = menuItems;

  const level1Menu = getMenuItems(_menuItems, 1);
  const clickHandler = () => console.log("Clicked");

  return (
    <>
      <ul>
        {level1Menu.map((item) => (
          <>
            <MenuItem item={item} handleMenuItemClick={clickHandler} />
          </>
        ))}
      </ul>
    </>
  );
}

const level1Menu = [];

export const getMenuItems = (menuItem, level) => {
  Object.entries(menuItem).forEach(([key, value]) => {
    if (value["level"] === level) {
      level1Menu.push(value["label"]);
    } else if (typeof value === "object") {
      getMenuItems(value, level);
      console.log("I am an Object");
    } else if (Array.isArray(value)) {
      console.log("I am an Array");
    }
  });

  return level1Menu;
};
