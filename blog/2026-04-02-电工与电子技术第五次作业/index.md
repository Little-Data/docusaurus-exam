---
slug: Electrical_and_Electronic_Technology_Test_5
title: 电工与电子技术第五次作业
tags: [电工与电子技术]
description: 电工与电子技术第五次作业
hide_table_of_contents: false
date: 2026-04-02T16:21
last_update:
  date: 2026-05-27T14:57
unlisted: false
---

电工与电子技术第五次作业。

相关图书：《电工与电子技术》-北京师范大学出版社-刘陆平、肖祖铭-ISBN9787303280391

印次：2023年7月第 1 次

{/* truncate */}

## 填空

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>1. 电路中有共 B 条支路，N 外节点，如果用支路电流法列方程求解，则可以列（1）个独立的 KCL 方程，列（2）个独立的 KVL 方程？</Wenben>
    <Ansinput />
    <Jiexi>
        （1）N-1

        （2）B-(N-1)，B-N+1
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>2. 假设电路中有 M 个网孔，X 个回路，则可以列（1）个独立的 KVL 方程。</Wenben>
    <Ansinput />
    <Jiexi>M</Jiexi>
  </Workitem>
</Workpaper>

## 简答

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>3. 假设已经知道戴维南模型中，电压源 $U_S$ 串联一个内阻为 $R_0$，要把此模型等效转换为诺顿模型，请说明转换的过程步骤。</Wenben>
    <Ansinput katex />
    <Jiexi>
        （1）计算诺顿模型的电流 $I_S=\frac{U_S}{R_0}$

        （2）把 $R_0$ 内阻与电流源 $I_S$ 并联起来。

        （3）标注 $I_S$ 的参考方向，电流从原戴维南模型的 + 极流出，$I_S$ 要与原电流方向一致。
        ![01](01.svg)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>4. 请给出叠加定理的描述，并说明使用叠加定理应该注意的事项。 </Wenben>
    <Ansinput />
    <Jiexi>
        原理：在线性电路中，任一支路的电流（或电压）都是电路中各个电源单独作用时在该支路产生的电流（或电压）的代数和。

        注意事项：

        （1）叠加原理仅适用于线性电路。并且不是所有物理量都可以叠加，电路中电压，电流可叠加，功率不可叠加。

        （2）电源单独作用时，其他独立电源要置 0，电路的结构不变。置零的方法是电压源短接，电流源断开。

        （3）叠加时，如果各电源单独作用时，电流（或电压）分量的参考方向与总电流（或电压）的参考方向一致时，前面取正号，不一致时取负号。
    </Jiexi>
  </Workitem>
</Workpaper>