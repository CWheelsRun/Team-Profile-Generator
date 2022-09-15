const Intern = require("../lib/Intern");
const intern = new Intern("name", "123", "email", "intern", "school");

describe("Intern", () => {
  describe("getName", () => {
    it("gets the Intern Name", () => {
      expect(intern.getName()).toEqual("name");
    });
    it("should be a string", () => {
      expect(typeof intern.getName()).toEqual("string");
    });
  });
  describe("getId", () => {
    it("gets the Intern ID", () => {
      expect(intern.getId()).toEqual(123);
    });
    it("should be a number", () => {
      expect(typeof intern.getId()).toEqual("number");
    });
  });
  describe("getEmail", () => {
    it("gets the Intern Email", () => {
      expect(intern.getEmail()).toEqual("email");
    });
    it("should be a string", () => {
      expect(typeof intern.getEmail()).toEqual("string");
    });
  });
  describe("getRole", () => {
    it("gets the Intern Role", () => {
      expect(intern.getRole()).toEqual("intern");
    });
    it("should be a string", () => {
      expect(typeof intern.getRole()).toEqual("string");
    });
  });
  describe("getSchool", () => {
    it("gets the Intern School", () => {
      expect(intern.getschool()).toEqual("school");
    });
    it("should be a string", () => {
      expect(typeof intern.getschool()).toEqual("string");
    });
  });
});