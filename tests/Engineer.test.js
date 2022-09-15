const Engineer = require("../lib/Engineer");
const engineer = new Engineer("name", 123, "email", "engineer", "github");

describe("Engineer", () => {
  describe("getName", () => {
    it("gets the Engineer Name", () => {
      expect(engineer.getName()).toEqual("name");
    });
    it("should be a string", () => {
      expect(typeof engineer.getName()).toEqual("string");
    });
  });
  describe("getId", () => {
    it("gets the Engineer ID", () => {
      expect(engineer.getId()).toEqual(123);
    });
    it("should be a number", () => {
      expect(typeof engineer.getId()).toEqual("number");
    });
  });
  describe("getEmail", () => {
    it("gets the Engineer Email", () => {
      expect(engineer.getEmail()).toEqual("email");
    });
    it("should be a string", () => {
      expect(typeof engineer.getEmail()).toEqual("string");
    });
  });
  describe("getRole", () => {
    it("gets the Engineer Role", () => {
      expect(engineer.getRole()).toEqual("engineer");
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