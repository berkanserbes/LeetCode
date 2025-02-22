/* Write your T-SQL query statement below */

SELECT
    [project_id] = Project.project_id,
    [average_years] = ROUND(AVG(CAST(Employee.experience_years as decimal)),2)
FROM Employee
JOIN Project ON Employee.employee_id = Project.employee_id
GROUP BY Project.project_id