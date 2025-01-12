/* Write your T-SQL query statement below */
SELECT 
    [teacher_id] = teacher_id,
    [cnt] = COUNT(DISTINCT subject_id)
FROM Teacher
GROUP BY teacher_id