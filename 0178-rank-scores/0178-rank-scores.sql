SELECT 
    [score] =s.score,
    [rank] = (SELECT COUNT(*) 
        FROM (SELECT DISTINCT score FROM Scores) AS distinct_scores 
        WHERE distinct_scores.score >= s.score)
FROM Scores AS s
ORDER BY s.score DESC;
