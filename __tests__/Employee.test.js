const Employee = require("../lib/Employee");

describe("employee", () => {
  it("creates a new employee object", () => {
    const newEmp = new Employee(1, 2, 3);
    expect(typeof newEmp).toBe("object");
  });

  it("sets the employee name by constructor parameter", () => {
    const name = "john";
    const newEmp = new Employee(name);
    expect(newEmp.name).toBe(name);
  });

  it("sets the employee id by constructor parameter", () => {
    const newEmp = new Employee("john", 16);
    expect(newEmp.id).toBe(16);
  });

  it("sets the employee email by constructor parameter", () => {
    const testEmail = "john@mail.com";
    const newEmp = new Employee("john", 16, testEmail);
    expect(newEmp.email).toBe(testEmail);
  });

  it("gets name using getName()", () => {
    const name = "john";
    const newEmp = new Employee(name);
    expect(newEmp.getName()).toBe(name);
  });

  it("gets id using getId()", () => {
    const newEmp = new Employee("john", 21);
    expect(newEmp.getId()).toBe(21);
  });

  it("gets email using getEmail()", () => {
    const testEmail = "john@mail.com";
    const newEmp = new Employee("john", 21, testEmail);
    expect(newEmp.getEmail()).toBe(testEmail);
  });

  it("getRole() should return 'Employee'", () => {
    const newEmp = new Employee("john", 34, "john@mail.com");
    expect(newEmp.getRole()).toBe("Employee");
  });
});
