import { setCookie, getCookie } from "./Cookie";
import { tsUnknownKeyword } from "@babel/types";

describe("Cookies", () => {
  it("Set Cookie", () => {
    setCookie("username=nnn");
    expect(document.cookie).toBe("username=nnn");
  });

  it("getCookie", () => {
    const str = "nnn";
    const selectedCookie = getCookie(str);
    expect(selectedCookie).toBe("nnn");
  });
});
