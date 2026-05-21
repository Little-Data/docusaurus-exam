---
slug: Level_2_Database_Capacity_Test_2
title: 二级数据库第一章：能力测试二
tags: [计算机等级考试二级, MySQL]
description: 二级数据库第一章：能力测试二
hide_table_of_contents: false
date: 2026-03-12T15:27
last_update:
  date: 2026-05-21T17:57
unlisted: false
---

二级数据库第一章：能力测试二。

相关图书：《全国计算机等级考试二级教程——MySQL数据库程序设计》-高等教育出版社-教育部教育考试院-ISBN9787040648881

印次：2025年6月第 1 次

{/* truncate */}

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. E-R 图中用来表示实体的图形是</Wenben>
    <Xuanxiang>菱形</Xuanxiang>
    <Xuanxiang>椭圆形</Xuanxiang>
    <Xuanxiang ans>矩形</Xuanxiang>
    <Xuanxiang>三角形</Xuanxiang>
    <Jiexi>
        矩形 → 表示实体（如：学生、课程）

        椭圆形 → 表示属性（如：姓名、学号）

        菱形 → 表示 联系（如：选修）

        三角形 → 在 E-R 图中不常用，有时用于表示特殊化/泛化关系（ISA层次）
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. 一名员工可以使用多台计算机，每台计算机只能由一名员工使用，则实体员工和计算机间的联系是</Wenben>
    <Xuanxiang>一对一</Xuanxiang>
    <Xuanxiang>多对多</Xuanxiang>
    <Xuanxiang ans>一对多</Xuanxiang>
    <Xuanxiang>多对一</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>3. 工厂生产中所需的零件可以存放在多个仓库中，而每一仓库中可存放多种零件。则实体仓库和零件间的联系是</Wenben>
    <Xuanxiang>一对一</Xuanxiang>
    <Xuanxiang>一对多</Xuanxiang>
    <Xuanxiang>多对一</Xuanxiang>
    <Xuanxiang ans>多对多</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>4. 在关系数据库设计中，关系模式设计属于</Wenben>
    <Xuanxiang ans>逻辑设计</Xuanxiang>
    <Xuanxiang>需求分析</Xuanxiang>
    <Xuanxiang>物理设计</Xuanxiang>
    <Xuanxiang>概念设计</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>
        5. 定义学生选修课程的关系模式如下：

        SC (S#,Sn,C#,Cn,G)（其属性分别为学号、姓名、课程号、课程名、成绩）

        则该关系的主键为
    </Wenben>
    <Xuanxiang ans>S#,C#</Xuanxiang>
    <Xuanxiang>C#</Xuanxiang>
    <Xuanxiang>S#,C#,G</Xuanxiang>
    <Xuanxiang>S#</Xuanxiang>
    <Jiexi>本题容易误导 SC 的主键是 S#，实际上本题把学生选课的内容并入到了 SC 表中，所以 SC 表的主键应该是 S#,C#</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>6. 按照传统的数据模型分类，数据库系统可分为</Wenben>
    <Xuanxiang>大型、中型和小型</Xuanxiang>
    <Xuanxiang ans>层次、网状和关系</Xuanxiang>
    <Xuanxiang>数据、图形和多媒体</Xuanxiang>
    <Xuanxiang>西文、中文和兼容</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>7. 采用表结构来表示数据及数据间联系的模型是</Wenben>
    <Xuanxiang>网状模型</Xuanxiang>
    <Xuanxiang>层次模型</Xuanxiang>
    <Xuanxiang>概念模型</Xuanxiang>
    <Xuanxiang ans>关系模型</Xuanxiang>
    <Jiexi>
        网状模型：采用的是图的结构来表达实体和实体间联系

        层次模型：采用的是树（二叉树）的结构来表达实体和实体间联系

        概念模型：体现了数据之间的关系，它是各种数据之间相互关系的集合
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>8. 下列叙述中正确的是</Wenben>
    <Xuanxiang>关系模式必须有 2 个以上的候选关键字</Xuanxiang>
    <Xuanxiang ans>关系模式的候选关键字可以有 1 个或多个</Xuanxiang>
    <Xuanxiang>关系模式可以没有候选关键字</Xuanxiang>
    <Xuanxiang>关系模式的候选关键字只能有 1 个</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>9. 关系数据库中的键是指</Wenben>
    <Xuanxiang>关系的专用保留字</Xuanxiang>
    <Xuanxiang>关系的所有属性</Xuanxiang>
    <Xuanxiang>关系的名称</Xuanxiang>
    <Xuanxiang ans>能唯一标识元组的属性或属性集合</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>10. 同一个关系模型的任意两个元组值</Wenben>
    <Xuanxiang>可以全相同</Xuanxiang>
    <Xuanxiang ans>不能全相同</Xuanxiang>
    <Xuanxiang>必须全相同</Xuanxiang>
    <Xuanxiang>以上答案都不对</Xuanxiang>
    <Jiexi>元组对应在二维表中的一行（记录的值），数据库的关系中任意两个元组不能全同，元组的顺序无所谓。</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>11. 概念模型是</Wenben>
    <Xuanxiang>用于信息世界的建模，与具体的 DBMS 有关</Xuanxiang>
    <Xuanxiang>用于现实世界的建模，与具体的 DBMS 有关</Xuanxiang>
    <Xuanxiang>用于信息世界的建模，与具体的 DBMS 无关</Xuanxiang>
    <Xuanxiang ans>用于现实世界的建模，与具体的 DBMS 无关</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>12. 按照数据库规范化设计方法，可将数据库设计分为六个阶段，其中 E-R 图属于</Wenben>
    <Xuanxiang>需求分析</Xuanxiang>
    <Xuanxiang>物理结构设计</Xuanxiang>
    <Xuanxiang ans>概念结构设计</Xuanxiang>
    <Xuanxiang>逻辑结构设计</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>13. 在关系数据库设计中，关系模式设计属于</Wenben>
    <Xuanxiang ans>逻辑设计</Xuanxiang>
    <Xuanxiang>需求分析</Xuanxiang>
    <Xuanxiang>物理设计</Xuanxiang>
    <Xuanxiang>概念设计</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>14. 将实体-联系模型转换为关系模型时，实体之间多对多联系在关系模型中的实现方式是</Wenben>
    <Xuanxiang>增加新的关键字</Xuanxiang>
    <Xuanxiang>建立新的实体</Xuanxiang>
    <Xuanxiang ans>建立新的关系</Xuanxiang>
    <Xuanxiang>建立新的属性</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>15. 在关系模式 A(S，SN，D) 和 B(D，CN，NM) 中，关系 A 的主键是 S，关系 B 的主键是 D，则属性 D 在关系 A 中称为</Wenben>
    <Xuanxiang ans>外键</Xuanxiang>
    <Xuanxiang>候选键</Xuanxiang>
    <Xuanxiang>超键</Xuanxiang>
    <Xuanxiang>主键</Xuanxiang>
  </Workitem>
</Workpaper>