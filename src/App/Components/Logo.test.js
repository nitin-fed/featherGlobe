import React from "react";
import Logo from "./Logo";
import { mount } from "enzyme";
import { store } from "../Store/createStore";

import { Provider } from "react-redux";

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useDispatch: () =>
//     jest.fn(() =>
//       Promise.resolve({
//         data: {
//           userData: { name: "nitin", lastname: "foo" }
//         }
//       })
//     )
// }));
//store.dispatch(loadUser());

describe("Logo", () => {
  it("Should render logo", () => {
    const wrapper = mount(<Logo />);
    console.log(wrapper.debug());
    expect(wrapper.find(Logo).exists()).toBeTruthy();
  });
});
