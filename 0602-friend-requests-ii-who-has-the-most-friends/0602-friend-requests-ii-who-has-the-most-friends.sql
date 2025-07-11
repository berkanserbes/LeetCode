SELECT 
id, 
[num] = COUNT(*)
FROM (
    SELECT requester_id AS id FROM RequestAccepted
    UNION ALL
    SELECT accepter_id AS id FROM RequestAccepted
) AS all_ids
GROUP BY id
ORDER BY num DESC
OFFSET 0 ROWS    
FETCH NEXT 1 ROWS ONLY
