
-- 4. Migrate work log times from REPAIR_JOB table to WORK_LOG table
insert into work_log (start_time, end_time, ref_repair_job, mechanic, description) select start_time, end_time, id, 'Mike Mechan', description from repair_job


-- 5. Migrate parts from REPAIR_JOB table to the new SPARE_PART table
insert into spare_part (ref_repair_job, name) select id, parts from repair_job