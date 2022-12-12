const Manager = require("../lib/Manager");

describe("Manager", () => {
  if (
    ("should create a new manager class object",
    () => {
      const newMan = new Manager();
      expect(typeof newMan).toBe("object");
    })
  );

  it("should get the manager office number via parameter", () => {
    const newMan = new Manager(1, 2, 3, 14);
    expect(newMan.officeNumber).toBe(14);
  });

  it("getRole() should return 'Manager'", () => {
    const newMan = new Manager();
    expect(newMan.getRole()).toBe("Manager");
  });
});
