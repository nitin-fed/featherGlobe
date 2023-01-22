/** @format */

import moxios from "moxios";
import { fetchPosts, getSecrateWord } from "./FetchPosts";

const posts = [
  {
    body: "test post body",
    id: 1,
    title: "test post title",
    userId: 1
  },
  {
    body: "test post body",
    id: 2,
    title: "test post title",
    userId: 2
  }
];

const responseData = {
  status: 200,
  response: posts
};

describe("FetchPosts", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Returns getsecrateword data", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: "party"
      });
    });

    return getSecrateWord().then((res) => {
      expect(res).toBe("party");
    });
  });

  it("Returns post data", () => {
    const dispatch = jest.fn();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(responseData);
    });

    return fetchPosts(dispatch)
      .then((response) => {
        expect(res).toBe(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
