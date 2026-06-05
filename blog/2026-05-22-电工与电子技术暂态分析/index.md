---
slug: Electrical_and_Electronic_Technology_Test_16_1
title: 电工与电子技术暂态分析
tags: [电工与电子技术]
description: 电工与电子技术暂态分析
hide_table_of_contents: false
date: 2026-05-22T17:46
last_update:
  date: 2026-06-05T20:44
unlisted: false
---

电工与电子技术暂态分析。

相关图书：《电工与电子技术》-北京师范大学出版社-刘陆平、肖祖铭-ISBN9787303280391

印次：2023年7月第 1 次

{/* truncate */}

## 填空

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>1. 换路定则指出，电容电压和电感电流在换路瞬间不能突变，其数学表达式为 $u_C(0<)=u_C(0-)$ 和 $i_L(0<)=i_L(0-)$，这是因为电容的电场能量 $W_C=\frac{1}{2}C$ $u_C^2$ 和电感的磁场能量 $W_L=\frac{1}{2}L$ $i_L^2$ 不能（1）</Wenben>
    <Ansinput />
    <Jiexi>
    突变
    
    换路定则的本质是能量不能突变，电容电压和电感电流的突变会导致能量的突变，这在物理上是不可能的，因此换路瞬间电容电压和电感电流保持原值。
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>2. RL 电路的零输入响应是指在（1）条件下，仅由电感的初始储能引起的响应，其电流的通式为 $i_L(t)=i_L(0+)e^{(\frac{-t}{τ})}$，其中 $τ=\frac{L}{R}$ 称为（2）。</Wenben>
    <Ansinput />
    <Jiexi>
    （1）外加激励为零；输入为零

    （2）时间常数
    
    零输入响应的定义是无外加激励，仅由初始储能产生的响应；RL 电路的时间常数 $τ=\frac{L}{R}$，反映了电路过渡过程的快慢。
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>3. RC 电路的零状态响应是指在（1）条件下，仅由外加激励引起的响应，其电容电压的通式为 $u_C(t)=u_C(∞)(1-e^{(\frac{-t}{τ})})$，其中 $u_C(∞)$ 是（2），$τ=RC$ 是时间常数。</Wenben>
    <Ansinput />
    <Jiexi>
    (1) 初始储能为零

    (2) 稳态值
    
    零状态响应的定义是初始储能为零，仅由外加激励产生的响应；三要素法中的稳态值是指过渡过程结束后电路达到稳定状态时的电压或电流值。
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>4. 线性动态电路的全响应是（1）和（2）的叠加，也可以用三要素法表示为 $f(t)=f(∞)+[f(0+)-f(∞)]e^{(\frac{-t}{τ})}$，其中 $f(0+)$ 是初始值，$f(∞)$ 是稳态值， $τ$ 是时间常数。</Wenben>
    <Ansinput />
    <Jiexi>
    (1) 零输入响应

    (2) 零状态响应
    
    全响应的叠加定理：全响应 = 零输入响应 + 零状态响应；三要素法是求解一阶线性动态电路响应的简便方法，需要确定初始值、稳态值和时间常数三个要素。
    </Jiexi>
  </Workitem>
</Workpaper>

## 单选

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>5. 在 RC 电路中，换路前电容未储能，$t=0$ 时开关闭合，接通直流电源，此时电容电压 $u_C(0+)$ 的值为</Wenben>
    <Xuanxiang ans>0V</Xuanxiang>
    <Xuanxiang>电源电压</Xuanxiang>
    <Xuanxiang>无穷大</Xuanxiang>
    <Xuanxiang>不确定</Xuanxiang>
    <Jiexi>
    换路前电容未储能，故 $u_C(0-)=0V$；根据换路定则，$u_C(0+)=u_C(0-)=0V$
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>6. RL 串联电路中，电源电压为 $U_S$，电阻为 R，电感为 L，$t=0$ 时开关闭合（电路原处于零状态），则电感电流的稳态值 $i_L(∞)$ 为</Wenben>
    <Xuanxiang ans>$\frac{U_S}{R}$</Xuanxiang>
    <Xuanxiang>0A</Xuanxiang>
    <Xuanxiang>$\frac{U_S}{L}$</Xuanxiang>
    <Xuanxiang>$\frac{U_S}{(R+L)}$</Xuanxiang>
    <Jiexi>
    稳态时电感相当于短路，因此电感电流的稳态值等于直流电源作用下的电阻电流，即 $i_L(∞)=\frac{U_S}{R}$
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>7. 已知某一阶电路的全响应为 $u(t)=10-5e^{(-2t)} V$，则其零输入响应分量为</Wenben>
    <Xuanxiang>10V</Xuanxiang>
    <Xuanxiang>$-5e^{(-2t)} V$</Xuanxiang>
    <Xuanxiang ans>$5e^{(-2t)} V$</Xuanxiang>
    <Xuanxiang>$10-5e^{(-2t)} V$</Xuanxiang>
    <Jiexi>
    全响应=稳态值+暂态分量；零输入响应是暂态分量中由初始储能引起的部分，当 $t→∞$ 时，暂态分量消失，稳态值为 10V；初始值 $u(0+)=10-5=5V$，零输入响应分量为 $5e^{(-2t)} V$
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>8. RC 串联电路的零状态响应中，电容电压 $u_C(t)$ 的变化规律是</Wenben>
    <Xuanxiang ans>从 0 开始按指数规律上升到稳态值</Xuanxiang>
    <Xuanxiang>从稳态值开始按指数规律下降到 0</Xuanxiang>
    <Xuanxiang>保持恒定值不变</Xuanxiang>
    <Xuanxiang>按正弦规律变化</Xuanxiang>
    <Jiexi>
    RC 电路零状态响应中，电容电压从初始值 0 开始，以指数形式逐渐上升到稳态值 $U_S$
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>9. 关于换路定则，下列说法正确的有</Wenben>
    <Xuanxiang ans>电容电压在换路瞬间不能突变</Xuanxiang>
    <Xuanxiang ans>电感电流在换路瞬间不能突变</Xuanxiang>
    <Xuanxiang>电容电流在换路瞬间不能突变</Xuanxiang>
    <Xuanxiang>电感电压在换路瞬间不能突变</Xuanxiang>
    <Jiexi>
    换路定则的核心是电容电压和电感电流不能突变，因为它们的能量不能突变；而电容电流和电感电压在换路瞬间是可以突变的
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>10. 关于线性动态电路的响应，下列说法正确的有</Wenben>
    <Xuanxiang ans>零输入响应仅由初始储能引起</Xuanxiang>
    <Xuanxiang ans>零状态响应仅由外加激励引起</Xuanxiang>
    <Xuanxiang ans>全响应是零输入响应和零状态响应的叠加</Xuanxiang>
    <Xuanxiang>全响应与初始储能和外加激励无关</Xuanxiang>
    <Jiexi>
    零输入响应由初始储能引起，零状态响应由外加激励引起，全响应是两者的叠加
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>11. 三要素法适用于求解一阶线性动态电路的响应，其三个要素包括</Wenben>
    <Xuanxiang ans>初始值 $f(0+)$</Xuanxiang>
    <Xuanxiang ans>稳态值 $f(∞)$</Xuanxiang>
    <Xuanxiang ans>时间常数 $τ$</Xuanxiang>
    <Xuanxiang>电源频率 $f$</Xuanxiang>
    <Jiexi>
    三要素法的三个要素是初始值、稳态值和时间常数，与电源频率无关
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>12. RL串联电路中，时间常数 $τ$ 的大小取决于</Wenben>
    <Xuanxiang ans>电感 L 的大小</Xuanxiang>
    <Xuanxiang ans>电阻 R 的大小</Xuanxiang>
    <Xuanxiang>电源电压的大小</Xuanxiang>
    <Xuanxiang>电路的初始状态</Xuanxiang>
    <Jiexi>
    RL 电路的时间常数 $τ=\frac{L}{R}$，仅与电感 L 和电阻 R 有关，与电源电压和初始状态无关
    </Jiexi>
  </Workitem>
</Workpaper>

## 判断

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>13. 换路定则指出，电容电压和电感电流在任何情况下都不能突变</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
    <Jiexi>
    换路定则的前提是换路瞬间电容电流和电感电压为有限值，若存在冲激激励等情况，电容电压和电感电流是可以突变的
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>14. RC 电路的零输入响应中，电容电压随时间按指数规律衰减，时间常数越大，衰减越快</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
    <Jiexi>
    RC 电路零输入响应的时间常数 $τ=RC$，$τ$ 越大，过渡过程越慢，衰减越慢
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>15. RL 电路的零状态响应中，电感电流的稳态值等于电源电压除以电阻（RL串联电路）</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
    <Jiexi>
    稳态时电感相当于短路，因此电感电流的稳态值 $i_L(∞)=\frac{U_S}{R}$
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>16. 三要素法中的稳态值 $f(∞)$ 是指电路达到稳态时的电压或电流值，与初始条件无关</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
    <Jiexi>
    稳态值是电路在直流激励下达到稳定状态时的响应，由电路的结构和参数决定，与初始条件无关
    </Jiexi>
  </Workitem>
</Workpaper>

## 简答

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>17. 简述换路定则的内容及其物理本质。</Wenben>
    <Ansinput katex />
    <Jiexi>
    换路定则的内容是：在换路瞬间 $(t=0+)$，若电容电流和电感电压为有限值，则电容电压和电感电流不能突变，即 $u_C(0+)=u_C(0-)$，$i_L(0+)=i_L(0-)$。物理本质是能量不能突变，因为电容的电场能量 $W_C=\frac{1}{2}C u_C²$，电感的磁场能量 $W_L=\frac{1}{2}L i_L²$，若 $u_C$ 或 $i_L$ 突变，能量会发生突变，这在物理上是不可能的。
    
    换路定则的核心是能量不能突变，因此电容电压和电感电流不能突变；需要明确其前提条件（电容电流和电感电压为有限值）及物理本质。
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>18. 试说明线性动态电路的零状态响应、零输入响应和全响应的定义及三者之间的关系。</Wenben>
    <Ansinput />
    <Jiexi>
    零状态响应：电路初始储能为零，仅由外加激励引起的响应
    
    零输入响应：外加激励为零，仅由初始储能引起的响应
    
    全响应：由初始储能和外加激励共同引起的响应
    
    三者的关系是：全响应 = 零输入响应 + 零状态响应（叠加定理）
    
    需要准确区分三种响应的定义，并明确全响应是零输入响应和零状态响应的叠加，体现线性电路的叠加性。
    </Jiexi>
  </Workitem>
</Workpaper>