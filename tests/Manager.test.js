const Manager = require("../lib/Manager");
const manager = new Manager("name", "123", "email", "manager", "246");

describe("Manager", () => {
  describe("getName", () => {
    it("gets the Manager Name", () => {
      expect(manager.getName()).toEqual("name");
    });
    it("should be a string", () => {
      expect(typeof manager.getName()).toEqual("string");
    });
  });
  describe("getId", () => {
    it("gets the Manager ID", () => {
      expect(manager.getId()).toEqual(123);
    });
    it("should be a number", () => {
      expect(typeof manager.getId()).toEqual("number");
    });
  });
  describe("getEmail", () => {
    it("gets the Manager Email", () => {
      expect(manager.getEmail()).toEqual("email");
    });
    it("should be a string", () => {
      expect(typeof manager.getEmail()).toEqual("string");
    });
  });
  describe("getRole", () => {
    it("gets the Manager Role", () => {
      expect(manager.getRole()).toEqual("manager");
    });
    it("should be a string", () => {
      expect(typeof manager.getRole()).toEqual("string");
    });
  });
  describe("getOfficeNumber", () => {
    it("gets the Manager Office Number", () => {
      expect(manager.getOfficeNumber()).toEqual("246");
    });
    it("should be a number", () => {
      expect(typeof manager.getOfficeNumber()).toEqual("number");
    });
  });
});