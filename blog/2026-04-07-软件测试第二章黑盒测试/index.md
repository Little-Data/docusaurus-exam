---
slug: Black-box_Testing_of_Software_Testing
title: 软件测试第二章：黑盒测试
tags: [软件测试, 黑马程序员]
description: 软件测试第二章：黑盒测试
hide_table_of_contents: false
date: 2026-04-07T09:43
last_update:
  date: 2026-05-21T23:10
unlisted: false
---

软件测试第二章：黑盒测试。

相关图书：《软件测试（第2版）》-中国工信出版集团，人民邮电出版社-黑马程序员-ISBN9787115616388

印次：2024年1月第 3 次

{/* truncate */}

## 单选

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. 下列选项中，哪一项不是因果图输入与输出之间的关系？</Wenben>
    <Xuanxiang>非</Xuanxiang>
    <Xuanxiang>或</Xuanxiang>
    <Xuanxiang ans>唯一</Xuanxiang>
    <Xuanxiang>恒等</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. 下列选项中，哪一项是因果图输出之间的约束关系？</Wenben>
    <Xuanxiang>异</Xuanxiang>
    <Xuanxiang>要求</Xuanxiang>
    <Xuanxiang>或</Xuanxiang>
    <Xuanxiang ans>强制</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>3. 下列选项中，哪一项不是正交实验设计法的关键因素？</Wenben>
    <Xuanxiang>因子</Xuanxiang>
    <Xuanxiang ans>正交表</Xuanxiang>
    <Xuanxiang>指标</Xuanxiang>
    <Xuanxiang>因子状态</Xuanxiang>
  </Workitem>
</Workpaper>

## 填空

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>4. 等价类划分就是将输入数据按照输入需求划分为若干个子集，这些子集称为</Wenben>
    <Ansinput />
    <Jiexi>等价类</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>5. 因果图的多个输入之间的约束包括（1）、（2）、（3）、（4）共4种。</Wenben>
    <Ansinput />
    <Jiexi>
        （1）异
        （2） 或
        （3） 唯一
        （4）要求
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>6. 根据用户操作流程的正确性来划分，场景法通常分为（1）和（2）。</Wenben>
    <Ansinput />
    <Jiexi>
        （1）基本流
        （2）备选流
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>7. 决策表通常由（1）、（2）、（3）、（4）共4个部分组成。</Wenben>
    <Ansinput />
    <Jiexi>
        （1）条件桩
        （2）条件项
        （3）动作桩
        （4）动作项
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>8. 因果图中的（1）关系要求程序有一个输入和一个输出，输出与输入保持一致。</Wenben>
    <Ansinput />
    <Jiexi>恒等</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>9. （1）通常作为等价类划分法的补充。</Wenben>
    <Ansinput />
    <Jiexi>边界值分析法</Jiexi>
  </Workitem>
</Workpaper>

## 判断

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>10. 有效等价类可以捕获程序中的缺陷，而无效等价类不能捕获缺陷。 </Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>11. 因果图考虑了程序输入、输出之间的各种组合情况。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>12. 正交实验设计法比较适用于复杂的大型项目。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>13. 决策表法是由因果图演变而来的。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>14. 使用边界值方法测试时，只取边界两个值即可完成边界测试。</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>15. 如果程序要求输入值是一个有限区间的值，可以划分为一个有效等价类和一个无效等价类。</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
  </Workitem>
</Workpaper>

## 简答

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>16. 简述等价类划分法的原则。 </Wenben>
    <Ansinput />
    <Jiexi>
        （1）如果程序要求输入值是一个有限区间的值，则可以将输入数据划分为一个有效等价类和两个无效等价类，有效等价类为指定的取值区间，两个无效等价类分别为有限区间两边的值。
        
        （2）如果程序要求输入的值是一个“必须成立”的情况，则可以将输入数据划分为一个有效等价类和一个无效等价类。
        
        （3）如果程序要求输入数据是一组可能的值，或者要求输入值必须符合某个条件，则可以将输入数据划分一个有效等价类和一个无效等价类。
        
        （4）如果在某一个等价类中，每个输入数据在程序中的处理方式都不相同，则应将该等价类划分成更小的等价类，并建立等价表。
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>17. 简述决策表条件项的合并规则。</Wenben>
    <Ansinput />
    <Jiexi>在实际测试中，条件桩通常很多，而且每个条件桩都有真、假两个条件项，有 n 个条件桩的决策表就会有 2n 条件规则，有些规则的取值对结果并无影响，这个问题就称为无关条件项，无关条件项使用“-”表示，忽略无关条件项，可以将这两条规则进行合并。合并之后的无关条件项`-`包含其他条件项取值，因此具有相同动作的规则还可进一步合并。</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>18. 简述正交实验设计法测试用例设计步骤。</Wenben>
    <Ansinput />
    <Jiexi>
        （1）提取因子，构造因子-状态表。分析软件的需求规格说明得到影响软件功能的因子，确定因子可以有哪些取值，即确定因子的状态。
        
        （2）加权筛选，简化因子-状态表。软件的因子及因子的状态会有很多，每个因子及其状态对软件的作用也大不相同，如果把这些因子及状态都划分到因子-状态表中，最后生成的测试用例会相当庞大，从而影响软件测试的效率。因此需要根据因子及状态的重要程度进行加权筛选，选出重要的因子与状态，简化因子-状态表。
        
        （3）构建正交表，设计测试用例。正交表的表示形式为 Ln(tc)，其中 L 表示正交表，n 为正交表的行数，正交表的每一行可以设计一个测试用例，因此行数 n 也表示可以设计的测试用例的数目。c 表示正交实验的因子数目，即正交表的列数，因此正交表是一个 n 行 c 列的表。t 称为水平数，表示每个因子能够取得的最大值，即因子有多少个状态。
    </Jiexi>
  </Workitem>
</Workpaper>