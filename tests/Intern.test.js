const Intern = require("../lib/Intern");
const intern = new Intern("name", 123, "email", "school");

describe("Intern", () => {
  describe("getRole", () => {
    it("gets the Intern Role", () => {
      expect(intern.getRole()).toEqual("Intern");
    });
    it("should be a string", () => {
      expect(typeof intern.getRole()).toEqual("string");
    });
  });
  describe("getSchool", () => {
    it("gets the Intern School", () => {
      expect(intern.getSchool()).toEqual("school");
    });
    it("should be a string", () => {
      expect(typeof intern.getSchool()).toEqual("string");
    });
  });
});