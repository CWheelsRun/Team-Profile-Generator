const Manager = require("../lib/Manager");
const manager = new Manager("name", 123, "email", 246);

describe("Manager", () => {
  describe("getRole", () => {
    it("gets the Manager Role", () => {
      expect(manager.getRole()).toEqual("Manager");
    });
    it("should be a string", () => {
      expect(typeof manager.getRole()).toEqual("string");
    });
  });
  describe("getOfficeNumber", () => {
    it("gets the Manager Office Number", () => {
      expect(manager.getOfficeNumber()).toEqual(246);
    });
    it("should be a number", () => {
      expect(typeof manager.getOfficeNumber()).toEqual("number");
    });
  });
});