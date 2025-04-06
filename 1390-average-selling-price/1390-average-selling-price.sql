/* Write your T-SQL query statement below */
SELECT 
    [product_id] = pr.product_id,
    [average_price] = ISNULL(ROUND(1.0 * SUM(pr.price * us.units) / SUM(us.units), 2), 0)
FROM Prices AS pr
LEFT JOIN UnitsSold AS us ON pr.product_id = us.product_id AND us.purchase_date BETWEEN pr.start_date AND pr.end_date
GROUP BY pr.product_id