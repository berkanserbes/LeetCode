/* Write your T-SQL query statement below */

SELECT 
    [unique_id] = eUNI.unique_id,
    [name] = e.name
FROM Employees AS e
LEFT JOIN EmployeeUNI AS eUNI ON e.id = eUNI.id