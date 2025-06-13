import { describe, it, expect, beforeEach } from "@jest/globals";
import { setCookie, getCookie, deleteCookie } from "../src";

describe("cookie", () => {
  beforeEach(() => {
    document.cookie = "";
  });

  it("设置cookie", () => {
    setCookie("test", "test");
    expect(getCookie("test")).toBe("test");
  });

  it("获取cookie", () => {
    setCookie("test", "test");
    expect(getCookie("test")).toBe("test");
  });

  it("删除cookie", () => {
    setCookie("test", "test");
    deleteCookie("test");
    expect(getCookie("test")).toBeNull();
  });
});