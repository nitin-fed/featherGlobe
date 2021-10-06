import React, { Suspense, lazy } from "react";
import NavigationBar from "./NavigationBar";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";

const Posts = lazy(() => import("../Container/Posts"));
const Article = lazy(() => import("../Article/Article"));

describe("NavigationBar", () => {
  it("Should ", async () => {
    const wrapper = mount(
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <NavigationBar />
        </Suspense>
      </BrowserRouter>
    );
    await Posts;
    await Article;
    wrapper.update();
    console.log(wrapper.debug());
    expect(wrapper.find(NavigationBar).exists()).toBeTruthy();
    //expect(wrapper.find(Posts).exists()).toBeTruthy();
  });
});
