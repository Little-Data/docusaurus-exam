---
slug: Electrical_and_Electronic_Technology_Test_7
title: 电工与电子技术第七次作业
tags: [电工与电子技术]
description: 电工与电子技术第七次作业
hide_table_of_contents: false
date: 2026-04-10T22:01
last_update:
  date: 2026-05-27T23:09
unlisted: false
---

电工与电子技术第七次作业。

相关图书：《电工与电子技术》-北京师范大学出版社-刘陆平、肖祖铭-ISBN9787303280391

印次：2023年7月第 1 次

{/* truncate */}

## 填空

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>1. 用节点电压法分析电路，此方法列写节点方程的规则是什么？</Wenben>
    <Ansinput />
    <Jiexi>
        自电导 X 本节点的节点电位 + 互电导 X 相邻节点的节点电位 = 流入本节点的电流源电流的代数和

        1、自电导指的是与本节点支路的电导。自电导为正。

        2、互电导指的是与相邻节点相边支路的电导。互电导为负。

        3、流入本节占的电流源电流为正，流出为负。
    </Jiexi>
  </Workitem>
</Workpaper>

## 计算

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>
        2. 如图，已知 $I_1=0.01A$，$I_2=0.3A$，$I_5=9.61A$。试求电流 $I_3$、$I_4$ 和 $I_6$（课本P28，1-6）

        ![01](01.svg)
    </Wenben>
    <Ansinput katex />
    <Jiexi>
      已知：$I_1=0.01A$，$I_2=0.3A$，$I_5=9.61A$。

      如图所示

      ![02](02.svg)

      对封闭面列 KCL 方程

      $I_1 + I_6 = I_5 \Rightarrow I_6 = I_5 - I_1 = 9.61  A - 0.01 A = 9.6 A$

      对节点 a 列 KCL 方程

      $I_1+I_2=I_3 \Rightarrow I_3=0.01A+0.3A=0.31A$

      对节点 b 列 KCL 方程


      $I_3 + I_4 = I_5 \Rightarrow I_4 = I_5 - I_3 = 9.61A - 0.31A = 9.3A$
    </Jiexi>
  </Workitem>
</Workpaper>