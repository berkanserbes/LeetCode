
SELECT 
  [customer_id] = v.customer_id,
  [count_no_trans] = COUNT(v.customer_id)
FROM Visits AS v
LEFT JOIN Transactions AS t ON v.visit_id = t.visit_id
WHERE t.transaction_id IS NULL
GROUP BY v.customer_id
