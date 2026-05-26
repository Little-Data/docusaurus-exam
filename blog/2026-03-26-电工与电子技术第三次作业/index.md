---
slug: Electrical_and_Electronic_Technology_Test_3
title: 电工与电子技术第三次作业
tags: [电工与电子技术]
description: 电工与电子技术第三次作业
hide_table_of_contents: false
date: 2026-03-26T10:14
last_update:
  date: 2026-05-25T08:42
unlisted: false
---

电工与电子技术第三次作业。

相关图书：《电工与电子技术》-北京师范大学出版社-刘陆平、肖祖铭-ISBN9787303280391

印次：2023年7月第 1 次

{/* truncate */}

## 简答

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>1. 写出两个电阻串联的分压公式及两个电阻并联的分流公式。</Wenben>
    <Ansinput katex />
    <Jiexi>
        两个电阻串联的分压公式：

        $U_1=\frac{R_1}{R_1+R_2}U$
        
        $U_2=\frac{R_2}{R_1+R_2}U$

        两个电阻并联的分流公式：

        $I_1=\frac{R_2}{R_1+R_2}I$
        
        $I_2=\frac{R_1}{R_1+R_2}I$
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>
        2. 
        （1）写出电阻的伏安特性公式。

        （2）写出电感的伏安特性公式。

        （3）写出电容的伏安特性公式。
    </Wenben>
    <Ansinput katex />
    <Jiexi>
        （1）$U=IR$

        （2）$u_l=L\frac{\mathrm{d}i_l}{\mathrm{d}t}$

        （3）$i_c=C\frac{\mathrm{d}u_c}{\mathrm{d}t}$
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>
        3. 
        （1）写出电感的储能公式。

        （2）写出电容的储能公式。
    </Wenben>
    <Ansinput katex />
    <Jiexi>
        （1）$W_L=\frac{1}{2}Li^2$

        （2）$W_c=\frac{1}{2}Cu^2$
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>4. 为什么说电感和电容是动态元件？</Wenben>
    <Ansinput katex />
    <Jiexi>
        因为电感元件的伏安关系为微分关系（$u_l=L\frac{\mathrm{d}i_l}{\mathrm{d}t}$），所以说电感是动态元件。

        因为电容元件的伏安关系为微分关系（$i_c=C\frac{\mathrm{d}u_c}{\mathrm{d}t}$），所以说电容是动态元件。
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>5. 为什么说电感和电容是记忆元件？ </Wenben>
    <Ansinput katex />
    <Jiexi>
        因为电感元件的电流与初始值有（$i_l=i_0+\frac{1}{L}\int_{0}^{t} u(t)\mathrm{d}t$），所以说电感是记忆元件。

        因为电容元件的电压与初始值有（$u_c=u_0+\frac{1}{C}\int_{0}^{t} i(t)\mathrm{d}t$），所以说电容是记忆元件。
    </Jiexi>
  </Workitem>
</Workpaper>

## 填空

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>6. 电路中有 L=1H 的电感，某一时刻，流过电感的电流为 10A，此时电感的电压为 6V，此时电感存储的磁场能是</Wenben>
    <Ansinput katex />
    <Jiexi>
        电感的储能公式：

        $W_L=\frac{1}{2}Li^2$

        所以$W_L=\frac{1}{2}\times 1H\times 10^2=50\hspace{2px}J$
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>7. 电路中有 C=1F 的电容，某一时刻，流过电容的电流为 10A，此时电容的电压为 6V，求此时电容存储的电场能是多少？</Wenben>
    <Ansinput katex />
    <Jiexi>
        电容的储能公式：

        $W_c=\frac{1}{2}CU_{c}^{2}$

        所以$W_c=\frac{1}{2}\times 1F\times 6^2=18\hspace{2px}J$
    </Jiexi>
  </Workitem>
</Workpaper>