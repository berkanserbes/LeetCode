SELECT
    [query_name] = query_name,
    [quality] = ROUND(AVG(1.0 * rating / position), 2),
    [poor_query_percentage] = ROUND(100.0 * SUM(CASE WHEN rating < 3 THEN 1 ELSE 0 END) / COUNT(*), 2)
FROM Queries
GROUP BY query_name