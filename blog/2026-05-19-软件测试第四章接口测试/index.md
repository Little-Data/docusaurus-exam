---
slug: Interface_Testing_of_Software_Testing
title: 软件测试第四章：接口测试
tags: [软件测试, 黑马程序员]
description: 软件测试第四章：接口测试
hide_table_of_contents: false
date: 2026-05-19T09:20
last_update:
  date: 2026-05-21T23:10
unlisted: false
---

软件测试第四章：接口测试。

相关图书：《软件测试（第2版）》-中国工信出版集团，人民邮电出版社-黑马程序员-ISBN9787115616388

印次：2024年1月第 3 次

{/* truncate */}

## 单选

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. 下列选项中，不属于 HTTP 请求组成部分的是</Wenben>
    <Xuanxiang>请求行</Xuanxiang>
    <Xuanxiang>请求体</Xuanxiang>
    <Xuanxiang ans>状态行</Xuanxiang>
    <Xuanxiang>请求头</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. 下列关于 HTTP 响应说法错误的是</Wenben>
    <Xuanxiang>当服务器成功接收到 HTTP 请求时，才会产生 HTTP 响应</Xuanxiang>
    <Xuanxiang>响应体位于响应头的下方</Xuanxiang>
    <Xuanxiang>状态行包括协议版本、状态码和状态码描述</Xuanxiang>
    <Xuanxiang ans>响应头位于 HTTP 响应的第 1 行</Xuanxiang>
    <Jiexi shouqi>
        HTTP 响应头示例：
        ```text showLineNumbers
        HTTP/1.1 200 OK                      // 状态行（必有且必须在第一行）
        Date: Wed, 20 May 2026 08:30:00 GMT  // 响应时间
        Server: Nginx/1.24.0                 // 服务器信息
        Connection: keep-alive               // 连接管理
        Content-Type: text/html; charset=UTF-8  // 内容类型，文字编码
        Content-Length: 1234                 // 内容长度
        Content-Encoding: gzip               // 压缩方法
        Cache-Control: max-age=3600, public  // 缓存策略
        ETag: "abc123-4d2a"                  // 资源标识
        Last-Modified: Tue, 19 May 2026 10:00:00 GMT      // 最后修改时间
        Set-Cookie: user_id=123; Path=/; HttpOnly; Secure // 设置 Cookie
        Strict-Transport-Security: max-age=31536000; includeSubDomains  // 自动转换为 HTTPS
                                // 必须有空行
        // 以下为扩展/自定义头
        X-Frame-Options: DENY            // 防劫持
        X-Content-Type-Options: nosniff // 防 MIME 嗅探

        // 空行（必有，分隔头与体）

        // 响应体（可选，HTML/JSON/图片等）
        ```
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>3. 下列选项中，关于 Postman 的基本使用说法错误的是</Wenben>
    <Xuanxiang ans>使用 Postman 进行接口测试时不支持导入 JSON 格式的文件</Xuanxiang>
    <Xuanxiang>Postman 工具中的 Status code:Code is 200 可以用于响应状态码断言</Xuanxiang>
    <Xuanxiang>通过设置环境变量或全局变量可以实现接口关联</Xuanxiang>
    <Xuanxiang>可以对 HTTP 响应中的某个字符串进行断言</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>4. 下列选项中，关于 HTTP 响应状态码说法错误的是</Wenben>
    <Xuanxiang>状态码 500，表示服务器发生错误</Xuanxiang>
    <Xuanxiang ans>状态码 400，表示客户端请求的资源不存在</Xuanxiang>
    <Xuanxiang>状态码 503，表示服务器当前不能处理客户端的请求</Xuanxiang>
    <Xuanxiang>状态码 200，表示客户端请求成功</Xuanxiang>
    <Jiexi>400 是请求参数错误/请求语法错误；资源不存在是 404</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>5. 下列选项中，关于 HTTP 请求体说法正确的是</Wenben>
    <Xuanxiang>所有的请求方法都有请求体</Xuanxiang>
    <Xuanxiang>请求体中的数据类型只有 text/html</Xuanxiang>
    <Xuanxiang ans>通常在 POST 和 PUT 请求方法中才有请求体</Xuanxiang>
    <Xuanxiang>请求体位于 HTTP 请求的第 1 行</Xuanxiang>
    <Jiexi shouqi>
        GET、HEAD 等方法无请求体

        请求体可传 JSON、表单、文件等多种类型。

        HTTP请求示例：

        GET 请求示例

        ```text showLineNumbers
        GET /index.html?name=test&age=18 HTTP/1.1  // 请求行（请求方法 + URL + 协议版本）
        // 以下均为请求头部分
        Host: www.example.com
        User-Agent: Mozilla/5.0
        Accept: text/html,application/xhtml+xml
        Accept-Language: zh-CN,zh;q=0.9
        Connection: keep-alive
        Referer: https://www.baidu.com   // 请求来源地址
        ```

        POST 请求示例

        ```text showLineNumbers
        POST /api/login HTTP/1.1  // 请求行（请求方法 + URL + 协议版本）
        // 以下均为请求头部分
        Host: www.example.com     // 请求域名 / 主机
        User-Agent: Mozilla/5.0   // 客户端浏览器信息
        Content-Type: application/json;charset=utf-8     // 请求体数据格式，文字编码
        Content-Length: 55        // 请求体字节长度
        Accept: */*               // 接收响应数据的类型
                        // 必须有空行
        // 请求体部分
        {"username":"admin","password":"123456"}
        ```

        PUT 请求示例

        ```text showLineNumbers
        PUT /user/1001 HTTP/1.1  // 请求行（请求方法 + URL + 协议版本）
        // 以下均为请求头部分
        Host: api.test.com
        User-Agent: curl/7.68.0
        Content-Type: application/json
        Content-Length: 62
                        // 必须有空行
        // 请求体部分
        {"name":"张三","age":22,"gender":"男"}
        ```
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>6. 下列选项中，关于 URL 说法错误的是</Wenben>
    <Xuanxiang>因特网上的每个文件都有一个唯一的 URL</Xuanxiang>
    <Xuanxiang>URL 是描述因特网上网页和资源的一种标识方法</Xuanxiang>
    <Xuanxiang ans>URL 不支持 FTP 协议</Xuanxiang>
    <Xuanxiang>每一种传输协议都有默认的端口号，通常可以省略</Xuanxiang>
    <Jiexi>
        URL（统一资源定位符）就是互联网资源的唯一地址，比如每个网页、图片、接口都对应唯一的URL。
        
        一些 URL 写法：

        HTTP/HTTPS：`http://` `https://`

        FTP：`ftp://`

        本地文件：`file:///`
    </Jiexi>
  </Workitem>
</Workpaper>

## 填空

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>7. 断言的目的是验证软件开发的（1）与实际结果是否一致。</Wenben>
    <Ansinput />
    <Jiexi>预期结果</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>8. 接口测试原理是模拟（1）向服务器发送请求。</Wenben>
    <Ansinput />
    <Jiexi>客户端</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>9. 参数化常用的数据文件格式有 CSV 和</Wenben>
    <Ansinput />
    <Jiexi>JSON</Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>10. （1）是客户端和服务器之间的通信协议。</Wenben>
    <Ansinput />
    <Jiexi>
        答案：HTTP

        | 协议类型 | 定位 | 作用 |
        | :---: | :---: | :---: |
        | TCP | 传输层通用协议 | 提供**可靠的、面向连接的**数据传输服务，是很多应用层协议的底层支撑 |
        | HTTP | 应用层专属协议 | 专门用于**客户端（比如浏览器）和Web服务器**之间的网页资源通信，是我们日常访问网站时最常用的应用层协议 |
    </Jiexi>
  </Workitem>
</Workpaper>

## 判断

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>11. 在接口测试中，测试人员只需要关注被测接口之间数据的传递，不需要关注接口之间的逻辑依赖关系。</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>12. 通过接口测试可以尽早发现一些页面操作难以发现的问题。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>13. 在开展接口测试前，需要对接口文档进行解析和评审。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>14. 如果没有接口文档，则无法获取接口的相关信息。</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
    <Jiexi>即使没有公开的接口文档，也可以通过抓包、逆向分析、参考同类型项目等方式获取接口信息。</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>15. 在 Postman 中可以设置多组环境变量，但是只能设置一组全局变量。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>16. POST 请求方法用于请求服务器更新指定的资源。</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
    <Jiexi>PUT 请求方法才是请求服务器更新指定的已有资源。</Jiexi>
  </Workitem>
</Workpaper>

## 简答

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>17. 请简述实现接口测试的方式。</Wenben>
    <Ansinput />
    <Jiexi>
      实现接口测试的方式有两种，分别是通过工具实现和通过代码实现。

      常用的接口测试工具有Postman、JMeter等。
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>18. 请简述接口测试的流程。</Wenben>
    <Ansinput />
    <Jiexi>
      1. 需求分析，明确接口参数、协议、业务逻辑，解析与评审接口文档、编写接口测试计划
      2. 梳理接口文档，确定请求方式、入参、出参
      3. 设计测试用例，覆盖正常、异常、边界场景
      4. 搭建测试环境，准备测试数据
      5. 执行接口测试，发送请求核对响应结果
      6. 发现提交缺陷，跟进修复复测
      7. 进行接口自动化持续集成测试
      8. 整理测试报告，完成测试总结
    </Jiexi>
  </Workitem>
</Workpaper>