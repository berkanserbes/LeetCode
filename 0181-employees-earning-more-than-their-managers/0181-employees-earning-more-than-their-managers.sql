SELECT 
[Employee] = e1.name 
FROM Employee AS e1
LEFT JOIN Employee AS e2 ON e1.managerId = e2.id
WHERE e1.salary > e2.salary 
