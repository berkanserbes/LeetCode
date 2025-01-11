SELECT
    [id] = id,
    [Jan_Revenue] = SUM(CASE month WHEN 'Jan' THEN revenue ELSE Null END),
    [Feb_Revenue] = SUM(CASE month WHEN 'Feb' THEN revenue ELSE Null END),
    [Mar_Revenue] = SUM(CASE month WHEN 'Mar' THEN revenue ELSE Null END),
    [Apr_Revenue] = SUM(CASE month WHEN 'Apr' THEN revenue ELSE Null END),
    [May_Revenue] = SUM(CASE month WHEN 'May' THEN revenue ELSE Null END),
    [Jun_Revenue] = SUM(CASE month WHEN 'Jun' THEN revenue ELSE Null END),
    [Jul_Revenue] = SUM(CASE month WHEN 'Jul' THEN revenue ELSE Null END),
    [Aug_Revenue] = SUM(CASE month WHEN 'Aug' THEN revenue ELSE Null END),
    [Sep_Revenue] = SUM(CASE month WHEN 'Sep' THEN revenue ELSE Null END),
    [Oct_Revenue] = SUM(CASE month WHEN 'Oct' THEN revenue ELSE Null END),
    [Nov_Revenue] = SUM(CASE month WHEN 'Nov' THEN revenue ELSE Null END),
    [Dec_Revenue] = SUM(CASE month WHEN 'Dec' THEN revenue ELSE Null END)
 FROM Department 
 GROUP BY id   