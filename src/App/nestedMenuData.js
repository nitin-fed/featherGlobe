

export const menuItems = {
  item1: {
    level: 1,
    label: "Home",
    dummyObj: {
      name: "test",
      data: "irrelevent",
    },
    submenu: {
      "item1-1": {
        level: 2,
        label: "About Us",
        submenu: {
          "item1-1-1": {
            level: 3,
            label: "Our Mission",
          },
          "item1-1-2": {
            level: 3,
            label: "Our Team",
          },
        },
      },
      "item1-2": {
        level: 2,
        label: "Contact Us",
      },
    },
  },
  item2: {
    label: "Products",
    level: 1,
    subMenuWrapper: [
      {
        submenu: {
          "item2-1": {
            level: 2,
            label: "Electronics",
            submenu: {
              "item2-1-1": {
                level: 3,
                label: "Laptops",
              },
              "item2-1-2": {
                level: 3,
                label: "Smartphones",
              },
            },
          },
          "item2-2": {
            label: "Clothing",
            level: 2,
            submenu: {
              "item2-2-1": {
                level: 3,
                label: "Men",
                submenu: {
                  "item2-2-1-1": {
                    level: 4,
                    label: "Pants",
                  },
                  "item2-2-1-2": {
                    level: 4,
                    label: "Shirts",
                  },
                  "item2-2-1-3": {
                    level: 4,
                    label: "Trousers",
                  },
                  "item2-2-1-4": {
                    level: 4,
                    label: "Accessories",
                  },
                },
              },
              "item2-2-2": {
                level: 3,
                label: "Women",
              },
              "item2-2-3": {
                level: 3,
                label: "Children",
              },
            },
          },
        },
      },
    ],
  },
  item3: {
    level: 1,
    label: "Services",
  },
};
