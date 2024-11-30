/* Write your T-SQL query statement below */


SELECT 
    [name] = emp.name,
    [bonus] = bonus.bonus
FROM Employee AS emp
LEFT JOIN Bonus  AS bonus ON emp.empId = bonus.empId
WHERE bonus.bonus < 1000 OR bonus.bonus IS NULL
 