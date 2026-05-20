---
slug: Performance_Testing_of_Software_Testing
title: 软件测试第五章：性能测试
tags: [软件测试, 黑马程序员]
description: 软件测试第五章：性能测试
hide_table_of_contents: false
date: 2026-05-19T09:21
last_update:
  date: 2026-05-21T23:10
unlisted: false
---

软件测试第五章：性能测试

相关图书：《软件测试（第2版）》-中国工信出版集团，人民邮电出版社-黑马程序员-ISBN9787115616388

印次：2024年1月第 3 次

{/* truncate */}

## 单选

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. 下列选项中，可以让系统在强负载情况下，持续运行一段时间（如 7×24h）的测试</Wenben>
    <Xuanxiang>基准测试</Xuanxiang>
    <Xuanxiang>并发测试</Xuanxiang>
    <Xuanxiang ans>稳定性测试</Xuanxiang>
    <Xuanxiang>配置测试</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. 下列选项中，可以配置测试前的初始化操作的线程组为</Wenben>
    <Xuanxiang ans>setUp 线程组</Xuanxiang>
    <Xuanxiang>tearDown 线程组</Xuanxiang>
    <Xuanxiang>线程组</Xuanxiang>
    <Xuanxiang>以上都不对</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>3. 关于性能测试，下列说法中错误的是</Wenben>
    <Xuanxiang>软件响应慢属于性能问题</Xuanxiang>
    <Xuanxiang>性能测试是通过性能测试工具模拟正常、峰值及异常负载条件来对系统的各项性能指标进行测试</Xuanxiang>
    <Xuanxiang>性能测试可以发现软件系统的性能瓶颈</Xuanxiang>
    <Xuanxiang ans>性能测试是以验证功能实现完整为目的</Xuanxiang>
    <Jiexi>能测试完全不关注功能有没有做全，只关注系统运行的速度、稳定性、资源占用等性能指标。</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>4. 下列选项中，用于控制脚本的执行顺序的组件是</Wenben>
    <Xuanxiang>取样器</Xuanxiang>
    <Xuanxiang>前置处理器</Xuanxiang>
    <Xuanxiang>定时器</Xuanxiang>
    <Xuanxiang ans>逻辑控制器</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>5. 下列选项中，哪一项不是性能测试指标？</Wenben>
    <Xuanxiang>响应时间</Xuanxiang>
    <Xuanxiang>TPS</Xuanxiang>
    <Xuanxiang ans>并发进程数</Xuanxiang>
    <Xuanxiang>吞吐量</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>6. 如果发送的 HTTP 请求中包含请求头，可以使用下列哪个元件进行配置</Wenben>
    <Xuanxiang>HTTP 请求默认值</Xuanxiang>
    <Xuanxiang ans>HTTP 请求信息头管理器</Xuanxiang>
    <Xuanxiang>用户参数</Xuanxiang>
    <Xuanxiang>用户定义的变量</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>7. 下列选项中，可以匹配任意字符的符号为</Wenben>
    <Xuanxiang ans>.</Xuanxiang>
    <Xuanxiang>+</Xuanxiang>
    <Xuanxiang>\*</Xuanxiang>
    <Xuanxiang>( )</Xuanxiang>
    <Jiexi>
        单独的 `.` 可以匹配任意单个非换行字符。

        单独的 `*` 只能代表“前置规则重复0次或多次”，无法独立匹配单个字符。
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>8. 下列选项中，可以<u>瞬间</u>将系统压力加载到最大的性能测试是</Wenben>
    <Xuanxiang>压力测试</Xuanxiang>
    <Xuanxiang>负载测试</Xuanxiang>
    <Xuanxiang>并发测试</Xuanxiang>
    <Xuanxiang ans>峰值测试</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>9. 下列选项中，可以实现 JMeter 参数化的组件为</Wenben>
    <Xuanxiang ans>配置元件</Xuanxiang>
    <Xuanxiang>监听器</Xuanxiang>
    <Xuanxiang>断言</Xuanxiang>
    <Xuanxiang>取样器</Xuanxiang>
  </Workitem>
</Workpaper>

## 填空

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>10. 吞吐量是指（1）内系统能够完成的工作量。</Wenben>
    <Ansinput />
    <Jiexi>单位时间</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>11. TPS是指系统（1）能够处理的事务和交易的数量。</Wenben>
    <Ansinput />
    <Jiexi>每秒钟</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>12. 系统在负载情况下，失败业务的概率称为</Wenben>
    <Ansinput />
    <Jiexi>错误率</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>13. 在 JMeter 中，一个用户用一个（1）表示。</Wenben>
    <Ansinput />
    <Jiexi>线程</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>14. JMeter 中用于向服务器发送各种请求的组件为</Wenben>
    <Ansinput />
    <Jiexi>取样器</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>15. JMeter 中用于查看服务器响应结果的组件为</Wenben>
    <Ansinput />
    <Jiexi>监听器</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>16. 如果一个线程组中的多个请求的 IP 地址、端口号都相同，可以将请求的 IP 地址、端口号配置在（1）元件。</Wenben>
    <Ansinput />
    <Jiexi>HTTP 请求默认值</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>17. 用于判断服务器响应结果是否准确的组件为</Wenben>
    <Ansinput />
    <Jiexi>断言</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>18. 在 JMeter 中，如果一个请求需要以另一个请求的响应数据作为参数，这种现象称为</Wenben>
    <Ansinput />
    <Jiexi>关联</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>19. JMeter 中的组件（1）可以让请求延迟一段时间再发送。</Wenben>
    <Ansinput />
    <Jiexi>定时器</Jiexi>
  </Workitem>
</Workpaper>

## 判断

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>20. 性能测试只能测试系统是否满足用户需求，无法发现潜在的性能问题。</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>21. 基准测试就是一次功能测试。</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>22. QPS 和 TPS 是等同的。</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
    <Jiexi>
        | 对比项 | QPS（Queries Per Second） | TPS（Transactions Per Second） |
        |--------|--------------------------|-------------------------------|
        | **中文全称** | 每秒查询数 | 每秒事务数 |
        | **定义** | 系统每秒能够处理的查询请求数量 | 系统每秒能够处理的事务数量 |
        | **核心概念** | 侧重于**查询/读取**操作 | 侧重于**完整事务**（包含读、写、增删改等） |
        | **操作类型** | 通常是**读操作**（如 SELECT、GET） | 包含**完整业务流程**（如事务开始→操作→提交/回滚） |
        | **是否包含写操作** | 一般**不包含**写操作 | **包含**写操作（增删改） |
        | **单位时间处理量** | 可同时处理多个查询 | 通常一个事务包含多个步骤 |
        | **典型场景** | Web 网站的页面访问、API 查询、搜索引擎 | 数据库事务、订单支付、银行转账 |
        | **关联性** | TPS 通常包含多个 QPS | QPS 是 TPS 的组成部分 |
        | **举例** | 用户刷新页面（1 个 QPS） | 下单购物（1 个 TPS = 登录 + 查库存 + 扣款 + 写日志） |
        | **性能指标侧重** | 服务端的**吞吐能力**（响应速度） | 系统的**业务处理能力**（完整性） |
        | **黄金法则** | QPS ≤ 服务器并发连接数 | TPS ≤ 数据库事务处理能力 |
        | **常用测试工具** | Apache Bench、wrk、JMeter（读场景） | JMeter、LoadRunner、Gatling（事务场景） |
        | **优化方向** | 缓存、CDN、索引、静态资源分离 | 数据库优化、分布式事务、异步处理 |
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>23. 响应时间是指系统对用户请求做出响应所需要的时间。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>24. 吞吐量的度量单位是请求数/秒。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>25. 点击率是 Web 应用特有的一个指标。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>26. 安装 JMeter 之前，必须要安装 JDK。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>27. 执行测试结束之后的回收工作可以在 tearDown 线程组中配置。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>28. 其他元件引用用户定义的变量的格式为 \$\[变量名\]。</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>29. 正则表达式提取器可以提取任意格式的响应数据。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>30. HTTP 请求只能从线程组添加。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
</Workpaper>

## 简答

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>31. 请简述性能测试的概念及其主要目的。</Wenben>
    <Ansinput />
    <Jiexi shouqi>
        简要版：

        概念：模拟不同用户量、业务压力，对系统进行压力、负载等测试，评估系统各项性能表现。

        目的：评估系统性能指标、定位性能瓶颈、优化系统、验证是否满足业务性能需求、预判高并发场景稳定性。

        详细版：

        概念：通过性能测试工具模拟正常、峰值及异常负载状态下对系统各项性能指标进行监控的一种测试类型。性能测试能够验证软件系统是否达到了用户期望的性能需求，同时也可以发现系统中可能存在的性能瓶颈及缺陷，从而优化系统的性能。

        目的：

        （1）验证系统性能是否满足预期的性能需求，包括系统的执行效率、稳定性、可靠性、安全性等。

        （2）分析软件系统在各种负载水平下的运行状态，提高性能调整效率。

        （3）识别系统缺陷，寻找系统中可能存在的性能问题，定位系统瓶颈并解决问题。

        （4）系统调优，通过重复的、长时间的测试，找出系统中存在的隐含问题，改善并优化系统的性能。
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>32. 请简述什么是基准测试。</Wenben>
    <Ansinput />
    <Jiexi>
        从狭义上讲，基准测试是指单用户测试，即测试环境确定后，使用单个用户对业务模型中的重要业务做多次单独的测试，观察并记录各项性能指标的变化。

        从广义上讲，基准测试是一种测量和评估软件性能指标的测试。在某个时刻通过基准测试建立一条基准线，当系统的软硬件环境发生变化之后，再进行测试以确定软硬件环境变化对软件性能的影响。
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>33. 请简述 JMeter 中断言的作用。</Wenben>
    <Ansinput />
    <Jiexi>用于验证响应结果是否正确，即用一个预设的结果(值、表达式、时间长短等)与实际结果进行匹配，匹配成功就是断言成功，匹配失败就是断言失败。</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>34. 请简述 JMeter 中后置处理器的作用。</Wenben>
    <Ansinput />
    <Jiexi>后置处理器用于对响应数据进行关联处理，所谓关联就是请求之间有依赖关系，比如一个请求需要另一个请求的响应数据作为参数，则需要先获取另一个请求的响应数据，对其响应数据进行处理，再将响应数据作为参数发送本次请求。获取一个请求的响应数据就需要用到后置处理器。</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>35. 请简述 JMeter 中线程组的分类及其作用。</Wenben>
    <Ansinput />
    <Jiexi>
        线程组：常规压测，设置并发数、循环次数，模拟普通用户并发访问。

        setUp 线程组：测试执行前执行，做初始化准备工作。

        tearDown 线程组：测试结束后执行，做数据清理、资源回收工作。
    </Jiexi>
  </Workitem>
</Workpaper>