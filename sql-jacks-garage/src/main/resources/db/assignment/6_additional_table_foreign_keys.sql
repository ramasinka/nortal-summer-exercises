
-- 3. Add foreign keys


ALTER TABLE work_log
ADD CONSTRAINT fk_aa_work_log_ref_repair_job
FOREIGN KEY (ref_repair_job) REFERENCES repair_job (id);


ALTER TABLE spare_part
ADD CONSTRAINT fk_aa_spare_part_ref_repair_job
FOREIGN KEY (ref_repair_job)
REFERENCES repair_job (id);