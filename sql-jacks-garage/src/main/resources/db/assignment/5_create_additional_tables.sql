
-- 1. Create table WORK_LOG

create table work_log (
  id IDENTITY,
  start_time TIMESTAMP NULL,
  end_time TIMESTAMP NULL,
  ref_repair_job INT NULL,
  mechanic VARCHAR(50) NULL,
  description VARCHAR(350) NULL,
  PRIMARY KEY (id)
  );


-- 2. Create table SPARE_PART

create table spare_part (
  id IDENTITY,
  ref_repair_job INT NULL,
  name VARCHAR(35) NULL,
  PRIMARY KEY (id)
  );

