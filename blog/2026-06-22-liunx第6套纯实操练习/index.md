---
slug: Linux_Practice_Exercises_06
title: Liunx 第6套纯实操练习
tags: [Linux网络操作系统]
description: Liunx 第6套纯实操练习
hide_table_of_contents: false
date: 2026-06-22T08:03
last_update:
  date: 2026-06-25T00:16
unlisted: false
---

Liunx 第6套纯实操练习。

相关图书：《Linux网络操作系统项目教程》-中国工信出版集团、人民邮电出版社-杨云-ISBN9787115673602

印次：2025年8月第 1 次

{/* truncate */}

:::warning

以下执行命令之后的输出仅供参考，不一定完全与示例内容一致！

本套试题都在**管理员权限**下操作！
:::

## 上机实操在 /usr/soft 目录下一次性创建嵌套目录 nginx/conf/logs 的命令

```shell
// highlight-next-line
[root@localhost ~]# mkdir -p /usr/soft/nginx/conf/logs
[root@localhost ~]# ls -R /usr/soft
/usr/soft:
nginx

/usr/soft/nginx:
conf

/usr/soft/nginx/conf:
logs

/usr/soft/nginx/conf/logs:
```


## 上机实操在 /usr/soft/nginx/conf 目录创建 nginx.bak 文件并设置权限为 640 的权限命令

```shell
// highlight-start
[root@localhost ~]# touch /usr/soft/nginx/conf/nginx.bak
[root@localhost ~]# chmod 640 /usr/soft/nginx/conf/nginx.bak
// highlight-end
[root@localhost ~]# ls -l /usr/soft/nginx/conf
总用量 0
drwxr-xr-x. 2 root root 6  6月 24 23:59 logs
-rw-r-----. 1 root root 0  6月 25 00:00 nginx.bak
```

640权限为：`-rw-r-----`

## 上机实操保留文件所有属性，将文件备份复制的参数

```shell
// highlight-next-line
[root@localhost ~]# cp -p /etc/resolv.conf /usr/soft/nginx/conf/logs/
[root@localhost ~]# ls -l /etc/resolv.conf
-rw-r--r--. 1 root root 73  6月 12 21:28 /etc/resolv.conf
[root@localhost ~]# ls -l /usr/soft/nginx/conf/logs/resolv.conf
-rw-r--r--. 1 root root 73  6月 12 21:28 /usr/soft/nginx/conf/logs/resolv.conf
```

:::warning
原说明中的 `/etc/resolv.conf /usr/soft/nginx/logs/` 路径有误，应为 `/usr/soft/nginx/conf/logs/`
:::

## 上机实操查找 /var/log 目录下所有后缀为 .log 的日志文件命令

```shell
[root@localhost ~]# find /var/log -name "*.log"
/var/log/sssd/sssd_kcm.log
/var/log/audit/audit.log
/var/log/tuned/tuned.log
/var/log/tuned/tuned-ppd.log
/var/log/anaconda/anaconda.log
```

## 上机实操创建用户并指定用户 UID 的参数

```shell
// highlight-next-line
[root@localhost ~]# useradd -u 1010 -s /bin/bash webuser
[root@localhost ~]# id webuser
用户id=1010(webuser) 组id=1010(webuser) 组=1010(webuser)
```

## 上机实操设置用户密码最短使用期限为7天的命令

```shell
// highlight-next-line
[root@localhost ~]# chage -m 7 webuser
[root@localhost ~]# chage -l webuser
最近一次密码修改时间					：6月 24, 2026
密码过期时间					：从不
密码失效时间					：从不
帐户过期时间						：从不
两次改变密码之间相距的最小天数		：7
两次改变密码之间相距的最大天数		：99999
在密码过期之前警告的天数	：7
```

## 上机实操查看系统主机名配置文件的命令

```shell
[root@localhost ~]# cat /etc/hostname

[root@localhost ~]# 
```

## 上机实操测试外网连通性，持续 ping 百度域名5次的命令

```shell
[root@localhost ~]# ping -c 5 www.baidu.com
PING www.a.shifen.com (157.148.69.186) 56(84) 比特的数据。
64 比特，来自 157.148.69.186 (157.148.69.186): icmp_seq=1 ttl=128 时间=152 毫秒
64 比特，来自 157.148.69.186 (157.148.69.186): icmp_seq=2 ttl=128 时间=50.1 毫秒
64 比特，来自 157.148.69.186 (157.148.69.186): icmp_seq=3 ttl=128 时间=88.1 毫秒
64 比特，来自 157.148.69.186 (157.148.69.186): icmp_seq=4 ttl=128 时间=240 毫秒
64 比特，来自 157.148.69.186 (157.148.69.186): icmp_seq=5 ttl=128 时间=179 毫秒

--- www.a.shifen.com ping 统计 ---
已发送 5 个包， 已接收 5 个包, 0% packet loss, time 4008ms
rtt min/avg/max/mdev = 50.074/141.773/239.600/66.888 ms
```