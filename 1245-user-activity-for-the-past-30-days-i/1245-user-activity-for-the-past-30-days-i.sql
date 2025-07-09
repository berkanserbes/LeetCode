SELECT
    [day] = a.activity_date,
    [active_users] = COUNT(DISTINCT a.user_id)
FROM Activity a 
WHERE A.activity_date BETWEEN DATEADD(day, -29, '2019-07-27') AND '2019-07-27'
GROUP BY a.activity_date

