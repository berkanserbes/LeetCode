/* Write your T-SQL query statement below */

SELECT c.name as Customers FROM Customers c WHERE c.id NOT IN (SELECT o.customerId from Orders o)
