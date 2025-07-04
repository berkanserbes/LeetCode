SELECT [name] = sp.name
FROM SalesPerson AS sp

EXCEPT

SELECT DISTINCT sp.name
FROM Orders AS o
INNER JOIN Company AS c ON o.com_id = c.com_id
INNER JOIN SalesPerson AS sp ON o.sales_id = sp.sales_id
WHERE c.name = 'RED'