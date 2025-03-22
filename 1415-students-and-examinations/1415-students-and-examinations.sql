/* Write your T-SQL query statement below */
SELECT 
   [student_id] = student.student_id,
   [student_name] = student.student_name,
   [subject_name] = subj.subject_name,
   [attended_exams] = COUNT(exam.student_id)
FROM Students AS student
CROSS JOIN Subjects AS subj
LEFT JOIN Examinations AS exam ON exam.student_id = student.student_id AND exam.subject_name = subj.subject_name
GROUP BY student.student_id, student.student_name, subj.subject_name


