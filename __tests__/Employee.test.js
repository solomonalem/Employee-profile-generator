const Employee = require("../lib/Employee");

test("creates a Employee object", () => {
  const employee = new Employee("Solo", 12, "solo@gmail.com", "manager");

  expect(employee.name).toBe("Solo");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.jobTitle).toEqual(expect.any(String));
});
