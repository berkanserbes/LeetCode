SELECT
 [id] = v.author_id
FROM Views as v
WHERE v.author_id = v.viewer_id
GROUP BY v.author_id
ORDER BY v.author_id