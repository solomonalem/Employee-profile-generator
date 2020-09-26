const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
  const employee = new Manager("Solo", 12, "solo@gmail.com", "manager");

  expect(employee.name).toBe("Solo");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.jobTitle).toBe("manager");
});
