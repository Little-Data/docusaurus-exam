---
slug: Electrical_and_Electronic_Technology_Test_6
title: 电工与电子技术第六次作业
tags: [电工与电子技术]
description: 电工与电子技术第六次作业
hide_table_of_contents: false
date: 2026-04-10T21:56
last_update:
  date: 2026-05-27T16:22
unlisted: false
---

电工与电子技术第六次作业。

相关图书：《电工与电子技术》-北京师范大学出版社-刘陆平、肖祖铭-ISBN9787303280391

印次：2023年7月第 1 次

{/* truncate */}

## 简答

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>1. 请写出戴维南定理的文字描述，并用表示出来。</Wenben>
    <Ansinput katex />
    <Jiexi>
        任何一个线性有源二端网络 N，总可以用一个电压源 $U_S$ 和一个内阻 $R_0$ 串联电路来等效代替。

        其中恒压源的电压 $U_S$ 等于该二端网络的开路电压 $U_S$

        内阻等于该有源二端网络中所有的电源置 0 时，所得无源二端网络 $N_0$ 的等效电阻 $R_{ab}$

        ![01](01.svg)

        （左）有源二端网络 &nbsp;&nbsp;&nbsp;（右）等效电路

        ![02](02.svg)

        （左）$U_s=U_0$ &nbsp;&nbsp;&nbsp;（右）$R_0=R_{ab}$
    </Jiexi>
  </Workitem>
</Workpaper>

## 填空

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>2. 叠加定理与戴维南定理都是要求电路必须是（1）电路才适用。</Wenben>
    <Ansinput />
    <Jiexi>线性</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>3. 叠加定理与戴维南定理都有对电源置零的情况，置零就是对电压源（1），对电流源（2）。</Wenben>
    <Ansinput />
    <Jiexi>
        （1）短接

        （2）断开
    </Jiexi>
  </Workitem>
</Workpaper>

## 计算

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>
      4. 如图，已知元件的吸收功率 P=30W，求元件的端电压。若元件的提供功率 P=30W，元件的端电压又是多少？（书本P27，1-2）
    
      ![03](03.svg)
    </Wenben>
    <Ansinput katex />
    <Jiexi>
      以题目图中的电流电压参考方向为关联参考方向

      若元件吸收的功率为 P=30W，即 P\>0，由 P=UI 得

      $U=\frac{P}{I}=\frac{30W}{6A}=5A$

      若元件提供的功率为 P=30W ，即 P\<0，也就是 P=-30W，由 P=UI 得

      $U=\frac{P}{I}=\frac{-30W}{6A}=-5A$
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>
      5. 如图，根据 KVL 找出 $U_{AB}$ 与 $I$ 的关系式。（书本P27，1-3）

      ![04](04.svg)
    </Wenben>
    <Ansinput katex />
    <Jiexi>
      | 元件 | 路径方向与元件方向 | 符号 |
      | -- | -- | -- |
      | 电压源 $U_S$ | +→- | $+U_S$ |
      | 电压源 $U_S$ | -→+ | $-U_S$ |
      | 电阻 $R$ | 电流 $I$ 与路径同向 | $-IR$ |
      | 电阻 $R$ | 电流 $I$ 与路径反向 | $-IR$ |

      (a)图 $U_{AB}=U_S+IR$

      (b)图 $U_{AB}+IR=U_S$ 即 $U_{AB}=U_S-IR$

      (c)图 $U_{AB}+U_S=IR$ 即 $U_{AB}=-U_S+IR$

      (d)图 $U_{AB}+U_S+IR=0$ 即 $U_{AB}=-U_S-IR$
    </Jiexi>
  </Workitem>
</Workpaper>