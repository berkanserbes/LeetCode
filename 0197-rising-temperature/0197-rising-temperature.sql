/* Write your T-SQL query statement below */

SELECT 
    current_day.id 
FROM 
    Weather AS current_day 
WHERE EXISTS (
    SELECT 1
    FROM Weather AS yesterday
    WHERE current_day.temperature > yesterday.temperature AND
          current_day.recordDate = DATEADD(day, 1, yesterday.recordDate)
)
