---
slug: Level_2_Database_Data_Definition
title: 二级数据库第三章：数据定义
tags: [计算机等级考试二级, MySQL]
description: 二级数据库第三章：数据定义
hide_table_of_contents: false
date: 2026-03-26T15:22
last_update:
  date: 2026-05-21T18:39
unlisted: false
---

二级数据库第三章：数据定义。

相关图书：《全国计算机等级考试二级教程——MySQL数据库程序设计》-高等教育出版社-教育部教育考试院-ISBN9787040648881

印次：2025年6月第 1 次

{/* truncate */}

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. 删除数据表 student 的语句是</Wenben>
    <Xuanxiang>DELETE TABLE student;</Xuanxiang>
    <Xuanxiang>UPDATE TABLE student;</Xuanxiang>
    <Xuanxiang>REMOVE TABLE student;</Xuanxiang>
    <Xuanxiang ans>DROP TABLE student;</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. 以下关于使用 ALTER TABLE 命令的叙述中，错误的是</Wenben>
    <Xuanxiang>ALTER TABLE 命令能够更改表名</Xuanxiang>
    <Xuanxiang>ALTER TABLE 命令能够更改字段的默认值</Xuanxiang>
    <Xuanxiang>ALTER TABLE 命令能够删除表中的字段</Xuanxiang>
    <Xuanxiang ans>在 ALTER TABLE 命令中使用 MODIFY 能够更改字段名</Xuanxiang>
    <Jiexi>使用 MODIFY 只会修改指定列的数据类型，而不会干涉它的列名。</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>3. 要求在 tb_booking 表中增加一个名为 handler 的字符类型字段，以下能实现上述功能的语句是</Wenben>
    <Xuanxiang>ALTER TABLE tb_booking CHANGE COLUMN handler CHAR(10) NULL;</Xuanxiang>
    <Xuanxiang ans>ALTER TABLE tb_booking ADD COLUMN handler CHAR(10) NULL;</Xuanxiang>
    <Xuanxiang>ALTER TABLE tb_booking ADD FIELD handler CHAR(10) NULL;</Xuanxiang>
    <Xuanxiang>ALTER TABLE tb_booking ADD CONSTRAINT handler CHAR(10) NULL;</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>4. 要将员工表 tb_emp 中的年龄字段 age 更名为出生年份 birth，下列语句中正确的是</Wenben>
    <Xuanxiang>ALTER TABLE tb_emp ADD COLUMN birth YEAR(4);</Xuanxiang>
    <Xuanxiang>ALTER TABLE tb_emp MODIFY COLUMN age birth YEAR(4);</Xuanxiang>
    <Xuanxiang>ALTER TABLE tb_emp ALTER COLUMN age birth YEAR(4);</Xuanxiang>
    <Xuanxiang ans>ALTER TABLE tb_emp CHANGE COLUMN age birth YEAR(4);</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>
        5. 执行如下创建表的 SQL 语句时出现错误。需要修改的命令行是
        ```sql showLineNumbers
        CREATE TABLE tb_test(
        Sno CHAR(10) AUTO_INCREMENT,
        Sname VARCHAR(20) NOT NULL,
        Sex CHAR(1),
        Scome DATE,
        PRIMARY KEY(Sno)
        ENGINE=InnoDB);
        ```
    </Wenben>
    <Xuanxiang>第 4 行、第 5 行和第 7 行</Xuanxiang>
    <Xuanxiang>第 2 行、第 4 行和第 6 行</Xuanxiang>
    <Xuanxiang ans>第 2 行和第 7 行</Xuanxiang>
    <Xuanxiang>第 4 行和第 7 行</Xuanxiang>
    <Jiexi>
        AUTO_INCREMENT 为列设置自增属性，只有整型或浮点型才能设置。

        `ENGINE=InnoDB);` 应为 `) ENGINE=InnoDB;`
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>6. 以下关于 PRIMARY KEY 和 UNIQUE 的描述中，错误的是</Wenben>
    <Xuanxiang>一个表上可以定义多个 UNIQUE，只能定义一个 PRIMARY KEY</Xuanxiang>
    <Xuanxiang ans>UNIQUE 约束只能定义在表的单个列上</Xuanxiang>
    <Xuanxiang>PRIMARY KEY 和 UNIQUE 都可以约束属性值的唯一性</Xuanxiang>
    <Xuanxiang>在空值列上允许定义 UNIQUE，不能定义 PRIMARY KEY</Xuanxiang>
    <Jiexi>UNIQUE 约束用来设置属性值的唯一性，UNIQUE 约束可以定义在表的多个列上。</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>
        7. 创建部门表tb_dept的语句如下:
        ```sql showLineNumbers
        CREATE TABLE tb_dept(
        deptno CHAR(2)  primary key,
        dname CHAR(20)  Not null,
        manager CHAR(12),
        telephone CHAR(15)
        );
        ```
        下列说法中正确的是
    </Wenben>
    <Xuanxiang ans>deptno 的取值不允许为空，不允许重复</Xuanxiang>
    <Xuanxiang>dname 的取值不允许为空，不允许重复</Xuanxiang>
    <Xuanxiang>deptno 的取值允许为空，不允许重复</Xuanxiang>
    <Xuanxiang>dname 的取值允许为空，不允许重复</Xuanxiang>
    <Jiexi>deptno 后面跟了 primary key，说明 deptno 是主键，主键的值不允许为空，且不能重复。</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>8. 向 Student 表增加入学时间 “EDate” 列，其数据类型为日期型，正确的 SQL 命令是</Wenben>
    <Xuanxiang>ALTER TABLE Student Add Date EDate;</Xuanxiang>
    <Xuanxiang>Add EDate Date ALTER TABLE Student;</Xuanxiang>
    <Xuanxiang ans>ALTER TABLE Student Add EDate Date;</Xuanxiang>
    <Xuanxiang>Add EDate Date TO TABLE Student;</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>9. MySQL 数据库中的数据完整性，不包括</Wenben>
    <Xuanxiang>用户自定义完整性</Xuanxiang>
    <Xuanxiang>实体完整性</Xuanxiang>
    <Xuanxiang ans>数据删除、更新完整性</Xuanxiang>
    <Xuanxiang>参照完整性</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>10. SQL 基本的使用方式（环境）有两种，分别是</Wenben>
    <Xuanxiang>过程式和非过程式</Xuanxiang>
    <Xuanxiang>基本方式和集合方式</Xuanxiang>
    <Xuanxiang>交互式和过程式</Xuanxiang>
    <Xuanxiang ans>交互式和嵌入式</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>11. SQL 语言一次查询的结果是一个</Wenben>
    <Xuanxiang ans>记录集</Xuanxiang>
    <Xuanxiang>元组</Xuanxiang>
    <Xuanxiang>数据项</Xuanxiang>
    <Xuanxiang>记录</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>12. 使用 ALTER DATABASE 语句可以修改的数据库参数是</Wenben>
    <Xuanxiang ans>默认字符集</Xuanxiang>
    <Xuanxiang>文件名</Xuanxiang>
    <Xuanxiang>文件的存储位置</Xuanxiang>
    <Xuanxiang>数据库名</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>
        13. 下列创建表的语句正确的是

        *提示：请点击选项序号ABCD来选择*
    </Wenben>
    <Xuanxiang>
        ```sql showLineNumbers
        CREATE TABLE tb_dept(
        deptno CHAR (3) PRIMARY KEY,
        deptname VARCHAR (20),
        manager VARCHAR (12),
        total_employee TINYINT DEFAULT ‘10’);
        ```
    </Xuanxiang>
    <Xuanxiang>
        ```sql showLineNumbers
        CREATE TABLE tb_dept(
        deptno CHAR (3) AUTO_INCREMENT PRIMARY KEY,
        deptname VARCHAR (20),
        manager VARCHAR (12),
        total_employee TINYINT DEFAULT 10);
        ```
    </Xuanxiang>
    <Xuanxiang ans>
        ```sql showLineNumbers
        CREATE TABLE tb_dept(
        deptno CHAR(3) PRIMARY KEY,
        deptname VARCHAR (20),
        manager VARCHAR (12),
        total_employee TINYINT DEFAULT 10);
        ```
    </Xuanxiang>
    <Xuanxiang>
        ```sql showLineNumbers
        CREATE TABLE tb_dept(
        deptno CHAR (3) NULL PRIMARY KEY,
        deptname VARCHAR (20),
        manager VARCHAR (12),
        total_employee TINYINT DEFAULT 10);
        ```
    </Xuanxiang>
    <Jiexi> 
        使用 primary key 声明的字段是主键，主键的值是唯一的，不能为空。

        AUTO_INCREMENT 为列设置自增属性，只有整型或浮点型才能设置。

        在语句 `total_employee TINYINT DEFAULT ‘10’` 中，total_employee 是数值型，设置默认值时不需要加单引号。
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>
        14. 设已使用下面的语句创建了 Student 表:
        ```sql showLineNumbers
        CREATE TABLE Student
        (Sno CHAR(10) primary key,
        Sname VARCHAR(10),
        age SMALLINT,
        Cname VARCHAR(20) );
        ```
        现要使用 ALTER TABLE 语句为 age 字段设置默认值 20，ALTER TABLE 语句的子句应使用
    </Wenben>
    <Xuanxiang>DROP COLUMN</Xuanxiang>
    <Xuanxiang>ADD COLUMN</Xuanxiang>
    <Xuanxiang>CHANGE COLUMN</Xuanxiang>
    <Xuanxiang ans>ALTER COLUMN</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>15. 给定如下语句：DESC db_yggl.tb_dept; 与之功能相同的语句是</Wenben>
    <Xuanxiang>RENAME TABLE db_yggl.tb_dept;</Xuanxiang>
    <Xuanxiang>DROP TABLE db_yggl.tb_dept;</Xuanxiang>
    <Xuanxiang>SHOW TABLES db_yggl.tb_dept;</Xuanxiang>
    <Xuanxiang ans>SHOW COLUMNS FROM db_yggl.tb_dept;</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>16. 下列关于 MySQL 数据类型的描述错误的是</Wenben>
    <Xuanxiang>将字段“学生姓名”定义为字符型且不允许为空时，可以输入空字符串</Xuanxiang>
    <Xuanxiang>VARCHAR 和 TEXT 都是可变长的字符串类型</Xuanxiang>
    <Xuanxiang ans>NULL 等同于 0 或空字符串</Xuanxiang>
    <Xuanxiang>TINYINT 比 INT 的取值范围要小得多</Xuanxiang>
  </Workitem>
</Workpaper>