const Engineer = require("../lib/Engineer");
const engineer = new Engineer("name", 123, "email", "github");

describe("Engineer", () => {
  describe("getRole", () => {
    it("gets the Engineer Role", () => {
      expect(engineer.getRole()).toEqual("Engineer");
    });
    it("should be a string", () => {
      expect(typeof engineer.getRole()).toEqual("string");
    });
  });
  describe("getGithub", () => {
    it("gets the Engineer GitHub", () => {
      expect(engineer.getGithub()).toEqual("github");
    });
    it("should be a string", () => {
      expect(typeof engineer.getGithub()).toEqual("string");
    });
  });
});