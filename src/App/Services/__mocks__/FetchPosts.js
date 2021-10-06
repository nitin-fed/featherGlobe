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

module.exports = {
  ...jest.requireActual("../FetchPosts.js"),
  __esModule: true,
  fetchPosts: jest.fn().mockReturnValue(Promise.resolve({ data: posts }))
};
