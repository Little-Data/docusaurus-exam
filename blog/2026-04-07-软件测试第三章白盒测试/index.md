---
slug: White-box_Testing_of_Software_Testing
title: 软件测试第三章：白盒测试
tags: [软件测试, 黑马程序员]
description: 软件测试第三章：白盒测试
hide_table_of_contents: false
date: 2026-04-07T09:44
unlisted: false
---

软件测试第三章：白盒测试。

相关图书：《软件测试》（第 2 版）-中国工信出版集团，人民邮电出版社-黑马程序员-ISBN9787115616388

印次：2024年1月第 3 次

{/* truncate */}

## 单选

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. 下列选项中，哪一项不属于逻辑覆盖？</Wenben>
    <Xuanxiang ans>判定-语句覆盖</Xuanxiang>
    <Xuanxiang>语句覆盖</Xuanxiang>
    <Xuanxiang>判定覆盖</Xuanxiang>
    <Xuanxiang>条件覆盖</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. 关于逻辑覆盖，下列说法中错误的是</Wenben>
    <Xuanxiang>语句覆盖的语句不包括空行、注释等</Xuanxiang>
    <Xuanxiang>相比于语句覆盖，判定覆盖考虑到了每个判定语句的取值情况</Xuanxiang>
    <Xuanxiang>在逻辑覆盖法中，条件组合覆盖是覆盖率最大的测试方法</Xuanxiang>
    <Xuanxiang ans>条件覆盖考虑到了每个逻辑条件的取值的所有组合情况</Xuanxiang>
    <Jiexi>
        条件覆盖的要求是：每个逻辑条件的真假两种取值都至少执行一次，但不需要覆盖所有组合。比如一个判定 if (A\>1 \&\& B\<0)，条件覆盖只需要覆盖 A\>1 为真/假 和 B\<0 为真/假，但不需要同时覆盖 A\>1真+B\<0真、A\>1真+B\<0假 这类组合，那是条件组合覆盖的要求。
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>3. 关于圈复杂度的计算，下列说法中正确的是</Wenben>
    <Xuanxiang>圈复杂度的数量等于控制流图中的区域数量</Xuanxiang>
    <Xuanxiang>使用 V(G)=P+1 可以计算圈复杂度，其中 P 表示控制流图中边的数量</Xuanxiang>
    <Xuanxiang ans>使用 V(G)=E-N+2 可以计算圈复杂度，其中 E 表示控制流图中节点的数量，N 表示控制流图中边的数量</Xuanxiang>
    <Xuanxiang>圈复杂度的数量等于控制流图中的节点数量</Xuanxiang>
    <Jiexi>
        A 虽然大部分情况下圈复杂度等于控制流图的区域数，但这个结论有前提条件：控制流图必须是**单连通分量且无额外的隐含节点**。

        B **P** 是判定节点的数量
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>4. 关于程序插桩法，下列说法中错误的是</Wenben>
    <Xuanxiang ans>源代码插桩的程序需要经过编译、链接过程，但测试代码不参与编译、链接过程</Xuanxiang>
    <Xuanxiang>程序插桩法可分为目标代码插桩和源代码插桩</Xuanxiang>
    <Xuanxiang>目标代码插桩是往二进制程序中插入测试代码</Xuanxiang>
    <Xuanxiang>程序插桩法就是往被测试程序中插入测试代码以达到测试目的的方法</Xuanxiang>
  </Workitem>
</Workpaper>

## 填空

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>5. 语句覆盖的目的是测试程序中的代码是否被执行，它只测试代码中的</Wenben>
    <Ansinput />
    <Jiexi>执行语句</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>6. 在程序插桩法中，插入程序中的测试代码称为</Wenben>
    <Ansinput />
    <Jiexi>探针</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>7. 对于判定语句 if (a\>1 and c\<1)，测试时要保证 a\>1、c\<1 两个条件取真值、假值至少一次，同时，判定语句 if (a\>1 and c\<1) 取真值、假值也至少一次，这使用了（1）覆盖方法。</Wenben>
    <Ansinput />
    <Jiexi>判定-条件覆盖</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>8. （1）是指判定语句中的每个条件都要取真值、假值各一次。</Wenben>
    <Ansinput />
    <Jiexi>条件覆盖</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>9. （1）的作用是使真、假分支均被执行。</Wenben>
    <Ansinput />
    <Jiexi>判定覆盖</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>10. （1）要求判定语句中所有条件取值的可能组合至少出现一次。</Wenben>
    <Ansinput />
    <Jiexi>条件组合覆盖</Jiexi>
  </Workitem>
</Workpaper>

## 判断

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>11. 语句覆盖无法考虑分支组合情况。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>12. 圈复杂度用来衡量一个模块判定结构的复杂程度。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>13. 判定-条件覆盖没有考虑判定语句与条件判断的组合情况。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>14. 语句覆盖可以测试程序中的逻辑错误。</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
    <Jiexi>
        语句覆盖的定义：设计最少的测试用例，让程序里每一条可执行语句都至少运行一次。

        语句覆盖只关注“语句有没有被执行”，完全不关心判定、条件的逻辑分支。
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>15. 目标代码插桩需要重新编译、链接程序。</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
    <Jiexi>
    什么是目标代码插桩：简单来说就是在程序的目标代码（也就是已经编译生成好的二进制文件/可执行文件）里插入额外的统计、调试代码，来获取程序运行时的行为数据。
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>16. 对于源代码插桩，探针具有较好的通用性。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
</Workpaper>

## 简答

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>17. 请简述基本路径法设计测试用例的步骤。</Wenben>
    <Ansinput />
    <Jiexi>
        1. 画出流程图:首先需要分析被测程序的源代码，并画出程序的流程图。
        2. 画出控制流图:控制流图是描述程序控制流的一种图示方法。控制流图可以由程序流程图转化而来。如果测试的源程序代码简洁，也可以直接通过分析源程序代码画出控制流图。在画程序的控制流图时，使用圆圈表示一条或多条无分支的语句，使用箭头表示控制流方向。
        3. 计算程序的圈复杂度:圈复杂度用来衡量一个模块判定结构的复杂程度。通过计算程序的圈复杂度可以得到程序基本的独立路径数目，从而确定测试用例的数目。
        4. 设计测试用例:根据计算出的程序圈复杂度导出基本可执行路径集合，从而设计测试用例的输入数据和预期结果。
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>18. 请简述目标代码插桩的3种执行模式。</Wenben>
    <Ansinput />
    <Jiexi>
        1. 即时模式：原始的二进制或可执行文件没有被修改或执行，将修改部分的二进制代码生成文件副本存储在新的内存区域中，在测试时仅执行修改部分的目标代码。
        2. 解释模式：在解释模式中目标代码被视为数据，测试人员插入的测试代码作为目标代码指令的解释语言，每当执行一条目标代码指令，程序就会在测试代码中查找并执行相应的替代指令，测试通过替代指令的执行信息就可以获取程序的运行信息。
        3. 探测模式：探测模式使用新指令覆盖旧指令进行测试，这种模式在某些体系结构(如x86体系结构)中比较适用。
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>19. 请简述逻辑覆盖法的几种方法及它们之间的区别。</Wenben>
    <Ansinput />
    <Jiexi>
        1. 语句覆盖

            语句覆盖是最常见的覆盖方式，语句覆盖的目的是测试程序中的代码是否被执行，它只测试代码中的执行语句，这里的执行语句不包括头文件、注释、空行等。语句覆盖在多分支的程序中，只能覆盖某一条路径，使得该路径中的每一个语句至少被执行一次，但不会考虑各种分支组合情况。

        2. 判定覆盖

            判定覆盖又称为分支覆盖，其原则是设计足够多的测试用例，在测试过程中保证每个判定至少有一次为真值，有一次为假值。判定覆盖的作用是使真假分支均被执行，虽然判定覆盖比语句覆盖测试能力强，但仍然具有和语句覆盖一样的单一性。判定覆盖语句一般是由多个逻辑条件组成，如果仅仅判断测试程序执行的最终结果而忽略每个条件的取值，必然会遗漏部分测试路径，因此，判定覆盖也属于弱覆盖。

        3. 判定-条件覆盖

            判定-条件覆盖要求设计足够多的测试用例，使得判定语句中所有条件的可能取值至少出现一次，同时，所有判定语句的可能结果也至少出现一次，它弥补了判定覆盖和条件覆盖的不足之处。相比于条件覆盖、判定覆盖，判定-条件覆盖弥补了两者的不足之处，但是由于判定-条件覆盖没有考虑判定语句与条件判断的组合情况，其覆盖范围并没有比条件覆盖扩展，因此判定-条件覆盖在仍旧存在遗漏测试的情况。

        4. 条件组合覆盖

            条件组合指的是设计足够多的测试用例，使判定语句中每个条件的所有可能至少出现一次，并且每个判定语句本身的判定结果也至少出现一次。它与判定-条件覆盖的差别是，条件组合覆盖不是简单地要求每个条件都出现真与假两种结果，而是要求让这些结果的所有可能组合都至少出现一次。
    </Jiexi>
  </Workitem>
</Workpaper>