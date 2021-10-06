import { baseUrl, fetchArticles, test, greetWorld } from "../ArticleServices";
import axios from "axios";
import { store } from "../../../Store/createStore";

jest.mock("axios");
describe("fetch articles", () => {
  describe("Succcess", () => {
    xit("should return article list", async () => {
      const url = baseUrl;
      const articles = {
        articles: [
          {
            editable: true,
            title: "title",
            description: "test description one",
            date: "some date"
          },
          {
            title: "title",
            description: "description",
            date: "some date"
          }
        ]
      };

      axios.get.mockResolvedValueOnce(articles);

      // when
      const result = await updateArticles();

      // then
      expect(axios.get).toHaveBeenCalledWith(url);
      expect(result).toEqual(articles);
    });
  });
});
