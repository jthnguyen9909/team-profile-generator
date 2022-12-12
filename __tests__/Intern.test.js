const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should create a new intern class object", () => {
    const newInt = new Intern();
    expect(typeof newInt).toBe("object");
  });
  it("should get the intern's school from constructor parameters", () => {
    const school = "UCI";
    const newInt = new Intern(1, 2, 3, school);
    expect(newInt.school).toBe(school);
  });

  it("should return the intern's school with getSchool()", () => {
    const school = "UCI";
    const newInt = new Intern(1, 2, 3, school);
    expect(newInt.getSchool()).toBe(school);
  });

  it("should return 'Intern' with getRole()", () => {
    const newInt = new Intern();
    expect(newInt.getRole()).toBe("Intern");
  });
});
