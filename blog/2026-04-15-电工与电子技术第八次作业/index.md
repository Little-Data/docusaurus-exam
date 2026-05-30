---
slug: Electrical_and_Electronic_Technology_Test_8
title: 电工与电子技术第八次作业
tags: [电工与电子技术]
description: 电工与电子技术第八次作业
hide_table_of_contents: false
date: 2026-04-15T17:27
last_update:
  date: 2026-05-31T00:07
unlisted: false
---

电工与电子技术第八次作业。

相关图书：《电工与电子技术》-北京师范大学出版社-刘陆平、肖祖铭-ISBN9787303280391

印次：2023年7月第 1 次

{/* truncate */}

## 填空

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>1. 分析电路的“节点电压法”，列写规则是“自电导 X 本节点的节点电位 + 互电导 X 相邻节点的节点电位 = 流入本节点的电流源电流的代数和”，方程的右边只说明了电流源的处理方法，但电路中的支路常常会有电压源的出现，请分别说明电路支路中可能的三种电压源情况如何处理？</Wenben>
    <Ansinput katex />
    <Jiexi>
      1、支路中含有电压源，电压源是有伴的（即电压源是戴维南模式存在支路中），这种情况只要把戴维南模型特等效变为诺顿模型。如图 $U_{S3}$ 与 $R_3$ 属于这种情况。

      2、电压源无伴，这种情况是没办法转换为特等效的电流源模式的。无伴的电压源又分两种情形，一种是在某节点与参考节点间，另一种情况是在2个要求电位的节点间。如果是在某节点与参考节点间，则该节点的电位可直接从电压源得出，例如节点 A 与参考节点 O 间有电压源 $U_{S1}$，$V_A-0=$从 A 点到 O 点的电压降的代数和。

      如图所示：$V_A-0=-U_{S1}$

      3、如果无伴电压源在2个节点间，如图所示，A 节点与 B 节点有电压源 $U_{S2}$，则这条支路补充电流 $I_X$ 从 $U_{S2}$ 的“+”极流出，补充辅助方程：$V_A-V_B=U_{S2}$，这样方程数就与未知数相等，可求解出方程组中的所有变量。

      ![01](01.svg)
    </Jiexi>
  </Workitem>
</Workpaper>

## 计算

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>
      2. 如图所示，已知 $U_s=120V$，$I_s=4A$，$R_1=2\hspace{3px}\Omega$，$R_2=5\hspace{3px}\Omega$，$R_3=20\hspace{3px}\Omega$。试用叠加原理、节点电压法和戴维南定理求图中的电流 $I$（书本P30，1-19）
      
      ![02](02.svg)
    </Wenben>
    <Ansinput katex />
    <Jiexi>
      已知：$U_s=120V$，$I_s=4A$，$R_1=2\hspace{3px}\Omega$，$R_2=5\hspace{3px}\Omega$，$R_3=20\hspace{3px}\Omega$

      <h3>1、叠加定理求 $I$</h3>

      考虑 $I_s$ 作用时的电路如图所示（此时 $U_s$ 置 0 短路）

      ![03](03.svg)

      $I'=\frac{R_2}{R_2+R_3}\cdot I_s=\frac{5\hspace{3px}\Omega}{5\hspace{3px}\Omega+20\hspace{3px}\Omega}\times4A=0.8A$

      考虑 $U_s$ 作用时的电路如图所示（此时 $I_s$ 置 0 断开）

      ![04](04.svg)

      $I''=-\frac{U_s}{R_2+R_3}=\frac{120V}{5\hspace{3px}\Omega+20\hspace{3px}\Omega}=-4.8A$

      $\therefore I=I'+I''=0.8A+(-4.8A)=-4A$

      <h3>2、戴维南定理求 $I$</h3>

      如图所示求开路电压 $U_0$

      ![05](05.svg)

      $U_s+U_0=I_sR_2\Rightarrow U_0=I_sR_2-U_s=4A\times5\hspace{3px}\Omega-120V=-100V$

      如图所示求 $R_0$

      ![06](06.svg)

      $R_0=R_2=5\hspace{3px}\Omega$

      可得 $U_0=-100V$ 与 $R_0=5\hspace{3px}\Omega$ 串联的戴维南模型

      ![07](07.svg)

      $I=\frac{U_0}{R_0+R_3}=\frac{-100v}{5\hspace{3px}\Omega+20\hspace{3px}\Omega}=-4A$

      <h3>3、节点电压法求 $I$</h3>

      原电路的等效电路如图所示

      ![08](08.svg)

      设 A 点电位为 $V_A$，0 为参考点

      $(\frac{1}{R_2}+\frac{1}{R_3})V_A=I_s-\frac{U_s}{R_2}$

      $(\frac{1}{5}+\frac{1}{20})V_A=4A-\frac{120V}{5\hspace{3px}\Omega}$

      $\frac{1}{4}V_A=4-24=-20A$

      $\therefore V_A=-80A$

      $I=\frac{V_A-0}{R_3}=\frac{-80V}{20\hspace{3px}\Omega}$
    </Jiexi>
  </Workitem>
</Workpaper>