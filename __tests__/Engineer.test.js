const Enginner = require("../lib/Engineer");

test("creates an Engineer object", () => {
  const employee = new Enginner("Solo", 12, "solo@gmail.com", "engineer");

  expect(employee.name).toBe("Solo");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.jobTitle).toBe("engineer");
});
