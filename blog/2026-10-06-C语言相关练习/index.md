---
slug: C_Language_Related_Exercises
title: C 语言相关练习
tags: [C语言,专升本]
description: C 语言相关练习，专升本相关
hide_table_of_contents: false
date: 2026-10-06T17:15
last_update:
  date: 2026-10-06T17:15
unlisted: false
---

C 语言相关练习，专升本相关

{/* truncate */}

相关笔记可看[半个水果的笔记](https://note.little-data.top/C语言.html)

## 选择

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