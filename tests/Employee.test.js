const Employee = require("../lib/Employee");
const employee = new Employee("name", "123", "email", "employee");

describe("Employee", () => {
  describe("getName", () => {
    it("gets the Employee Name", () => {
      expect(employee.getName()).toEqual("name");
    });
    it("should be a string", () => {
      expect(typeof employee.getName()).toEqual("string");
    });
  });
  describe("getId", () => {
    it("gets the Employee ID", () => {
      expect(employee.getId()).toEqual(123);
    });
    it("should be a number", () => {
      expect(typeof employee.getId()).toEqual("number");
    });
  });
  describe("getEmail", () => {
    it("gets the Employee Email", () => {
      expect(employee.getEmail()).toEqual("email");
    });
    it("should be a string", () => {
      expect(typeof employee.getEmail()).toEqual("string");
    });
  });
  describe("getRole", () => {
    it("gets the Employee Role", () => {
      expect(employee.getRole()).toEqual("employee");
    });
    it("should be a string", () => {
      expect(typeof employee.getRole()).toEqual("string");
    });
  });
});