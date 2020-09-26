const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
  const employee = new Intern("Solo", 12, "solo@gmail.com", "intern");

  expect(employee.name).toBe("Solo");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.jobTitle).toBe("intern");
});
