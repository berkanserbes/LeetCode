SELECT
    [tiv_2016] = ROUND(SUM(tiv_2016), 2)
FROM Insurance i
WHERE tiv_2015 IN (
    SELECT tiv_2015
    FROM Insurance
    GROUP BY tiv_2015
    HAVING COUNT(*) > 1
)
AND NOT EXISTS (
    SELECT 1
    FROM Insurance j
    WHERE j.lat = i.lat AND j.lon = i.lon AND j.pid <> i.pid
);
