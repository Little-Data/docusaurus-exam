---
slug: C_Language_Related_Exercises
title: C 语言相关练习
tags: [C语言,专升本]
description: C 语言相关练习，专升本相关
hide_table_of_contents: false
date: 2026-10-06T17:15
last_update:
  date: 2026-10-10T02:20
unlisted: false
---

C 语言相关练习，专升本相关

{/* truncate */}

相关笔记可看[半个水果的笔记](https://note.little-data.top/C语言.html)

## 基本语法

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. 下列可以作为用户自定义标识的是</Wenben>
    <Xuanxiang ans>_123</Xuanxiang>
    <Xuanxiang ans>Int</Xuanxiang>
    <Xuanxiang>int</Xuanxiang>
    <Xuanxiang ans>scanf</Xuanxiang>
    <Xuanxiang>1_abc</Xuanxiang>
    <Jiexi>
    A：下划线开头，可以

    B：虽然 `int` 为关键字，但C语言严格区分大小写，Int 的 `i` 被大写，可以

    C：`int` 为系统关键字，不可以

    D：`scanf` 为系统关键字：

    ```c
    int scanf=7; //不报错
    scanf("%d",&a);  //scanf 会报错
    ```

    上面例子中 `scanf` 作为了自定义标识符，但已无法作为函数使用

    E：数字开头，不可以。只能以英文字母或下划线开头
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. 下列C语言标识符中不合法的是</Wenben>
    <Xuanxiang ans>100_balls</Xuanxiang>
    <Xuanxiang>_100_balls</Xuanxiang>
    <Xuanxiang>one_hundred_balls</Xuanxiang>
    <Xuanxiang>balls_by_the_hundred</Xuanxiang>
    <Jiexi>数字开头，不可以。只能以英文字母或下划线开头</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>3. 下列可以作为C语言合法的标识符的是</Wenben>
    <Xuanxiang>8_LABLE</Xuanxiang>
    <Xuanxiang ans>_LABLE</Xuanxiang>
    <Xuanxiang ans>SLABLE</Xuanxiang>
    <Xuanxiang>\#LABLE</Xuanxiang>
    <Jiexi>以英文字母或下划线开头</Jiexi>
  </Workitem>
</Workpaper>

## 非十进制数转十进制数

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>1101B=___D</Wenben>
    <Ansinput />
    <Jiexi>
    此为二进制转十进制

    $$
    1101=1 \times 2^3+1 \times 2^2+0 \times 2^1+1 \times 2^0=8+2+0+1=11
    $$
    </Jiexi>
  </Workitem>
    <Workitem tiankong>
    <Wenben>27Q=___D</Wenben>
    <Ansinput />
    <Jiexi>
    此为八进制转十进制

    $$
    27=2 \times 8^1+7 \times 8^0=16+7=23
    $$
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>27CH=___D</Wenben>
    <Ansinput />
    <Jiexi>
    此为十六进制转十进制

    $$
    27C=2 \times 16^1+C \times 16^0=2 \times 16^1+12 \times 16^0=32+12=44
    $$
    </Jiexi>
  </Workitem>
</Workpaper>

## 十进制数转非十进制数

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>13D=___B</Wenben>
    <Ansinput />
    <Jiexi>
    此为十进制转二进制

    $$
    \begin{aligned}
    13 \div 2 &=6 \cdots 1 \\
    6 \div 2 &= 3 \cdots 0 \\
    3 \div 2 &= 1 \cdots 1 \\
    1 \div 2 &= 0 \cdots 1
    \end{aligned}
    $$

    所以二进制为 1101
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>21D=___Q</Wenben>
    <Ansinput />
    <Jiexi>
    此为十进制转八进制

    $$
    \begin{aligned}
    21 \div 8 &=2 \cdots 5 \\
    2 \div 8 &= 0 \cdots 2
    \end{aligned}
    $$

    所以八进制为 25
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>27D=___H</Wenben>
    <Ansinput />
    <Jiexi>
    此为十进制转十六进制

    $$
    \begin{aligned}
    27 \div 16 &=1 \cdots 11 \\
    1 \div 16 &= 0 \cdots 1
    \end{aligned}
    $$

    所以十六进制为 1B（B 在十六进制中代表 11）
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>0.25D=___B</Wenben>
    <Ansinput />
    <Jiexi>
    此为十进制转二进制

    $$
    \begin{aligned}
    0.25 \times 2&=0.5 \text{ 取整 } 0 （0.5-0=0.5）\\
    0.5 \times 2&=1.0 \text{ 取整 } 1 （1.0-1=0）\\
    0 \times 2&=0
    \end{aligned}
    $$

    所以二进制为 0.01
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>0.375D=___Q</Wenben>
    <Ansinput />
    <Jiexi>
    此为十进制转八进制

    $$
    \begin{aligned}
    0.375 \times 8&=3.0 \text{ 取整 } 3 （3.0-3=0）\\
    0 \times 8&=0
    \end{aligned}
    $$

    所以八进制为 0.3
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>0.0625D=___H</Wenben>
    <Ansinput />
    <Jiexi>
    此为十进制转十六进制
    $$
    \begin{aligned}
    0.0625 \times 16&=1.0 \text{ 取整 } 1 （1.0-1=0）\\
    0 \times 16&=0
    \end{aligned}
    $$

    所以十六进制为 0.1
    </Jiexi>
  </Workitem>
</Workpaper>