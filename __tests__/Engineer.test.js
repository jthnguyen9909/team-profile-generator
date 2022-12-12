const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("creates a new engineer class object", () => {
    const newEng = new Engineer();
    expect(typeof newEng).toBe("object");
  });

  it("sets the engineer github using construction parameter", () => {
    const gitHubName = "jthnguyen";
    const newEng = new Engineer(1, 2, 3, gitHubName);
    expect(newEng.github).toBe(gitHubName);
  });

  it("sets the engineer github using getGithub()", () => {
    const gitHubName = "jthnguyen";
    const newEng = new Engineer(1, 2, 3, gitHubName);
    expect(newEng.getGithub()).toBe(gitHubName);
  });

  it("sets role to 'Engineer' using getRole()", () => {
    const newEng = new Engineer();
    expect(newEng.getRole()).toBe("Engineer");
  });
});
