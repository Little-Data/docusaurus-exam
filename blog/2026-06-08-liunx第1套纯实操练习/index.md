---
slug: Linux_Practice_Exercises_01
title: Liunx 第1套纯实操练习
tags: [Linux网络操作系统]
description: Liunx 第1套纯实操练习
hide_table_of_contents: false
date: 2026-06-08T08:00
last_update:
  date: 2026-06-21T17:16
unlisted: false
---

Liunx 第1套纯实操练习。

相关图书：《Linux网络操作系统项目教程》-中国工信出版集团、人民邮电出版社-杨云-ISBN9787115673602

印次：2025年8月第 1 次

{/* truncate */}

:::warning
以下执行命令之后的输出仅供参考，不一定完全与示例内容一致！
:::

## 上机实操在 /home 目录下创建 test 文件夹的 Linux 命令是

```shell
// highlight-next-line
[a123@localhost /]$ sudo mkdir /home/test
[a123@localhost /]$ ls /home
a123  test
```

## 上机实操创建空白文件 hello.txt 的命令是

```shell
// highlight-next-line
[a123@localhost ~]$ touch hello.txt
[a123@localhost ~]$ ls
公共  模板  视频  图片  文档  下载  音乐  桌面  hello.txt
```

## 上机实操删除指定文件的命令是

```shell
// highlight-next-line
[a123@localhost ~]$ rm hello.txt
[a123@localhost ~]$ ls
公共  模板  视频  图片  文档  下载  音乐  桌面
```

## 上机实操查看 /etc/profile 文件全部内容的命令是

```shell
[a123@localhost ~]$ cat /etc/profile
```

## 上机实操人性化查看系统整体磁盘空间的命令是

```shell
// highlight-next-line
[a123@localhost ~]$ df -h
文件系统             容量  已用  可用 已用% 挂载点
devtmpfs             793M     0  793M    0% /dev
tmpfs                826M     0  826M    0% /dev/shm
tmpfs                331M  7.1M  324M    3% /run
/dev/mapper/cs-root   17G  5.0G   12G   30% /
/dev/nvme0n1p1       960M  440M  521M   46% /boot
tmpfs                166M   52K  166M    1% /run/user/42
tmpfs                166M  104K  165M    1% /run/user/1000
```

## 上机实操查看系统所有运行进程的命令是

```shell
// highlight-next-line
[a123@localhost ~]$ ps -ef
UID          PID    PPID  C STIME TTY          TIME CMD
root           1       0  0 21:28 ?        00:00:01 /usr/lib/systemd/systemd --switched-root --system --deserialize 31 rh
root           2       0  0 21:28 ?        00:00:00 [kthreadd]
root           3       2  0 21:28 ?        00:00:00 [pool_workqueue_]
root           4       2  0 21:28 ?        00:00:00 [kworker/R-rcu_gp]
root           5       2  0 21:28 ?        00:00:00 [kworker/R-sync_wq]
root           6       2  0 21:28 ?        00:00:00 [kworker/R-slub_flushwq]
root           7       2  0 21:28 ?        00:00:00 [kworker/R-netns]
```

## 上机实操永久关闭防火墙并禁止开机自启的完整命令组中，关闭防火墙的命令是

```shell
// highlight-start
[a123@localhost ~]$ sudo systemctl stop firewalld
[a123@localhost ~]$ sudo systemctl disable firewalld
// highlight-end
Removed "/etc/systemd/system/multi-user.target.wants/firewalld.service".
Removed "/etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service".
[a123@localhost ~]$ systemctl status firewalld
○ firewalld.service - firewalld - dynamic firewall daemon
     Loaded: loaded (/usr/lib/systemd/system/firewalld.service; disabled; preset: enabled)
     Active: inactive (dead)
       Docs: man:firewalld(1)

6月 12 21:58:48 localhost.localdomain systemd[1]: Starting firewalld - dynamic firewall daemon...
6月 12 21:58:49 localhost.localdomain systemd[1]: Started firewalld - dynamic firewall daemon.
6月 12 21:58:58 localhost.localdomain systemd[1]: Stopping firewalld - dynamic firewall daemon...
6月 12 21:58:58 localhost.localdomain systemd[1]: firewalld.service: Deactivated successfully.
6月 12 21:58:58 localhost.localdomain systemd[1]: Stopped firewalld - dynamic firewall daemon.
6月 12 22:02:03 localhost.localdomain systemd[1]: Starting firewalld - dynamic firewall daemon...
6月 12 22:02:03 localhost.localdomain systemd[1]: Started firewalld - dynamic firewall daemon.
6月 12 22:07:39 localhost.localdomain systemd[1]: Stopping firewalld - dynamic firewall daemon...
6月 12 22:07:39 localhost.localdomain systemd[1]: firewalld.service: Deactivated successfully.
6月 12 22:07:39 localhost.localdomain systemd[1]: Stopped firewalld - dynamic firewall daemon.
```

## 上机实操测试外网连通性、发送 3 次数据包的 ping 命令是

```shell
// highlight-next-line
[a123@localhost ~]$ ping -c 3 www.baidu.com
PING www.a.shifen.com (157.148.69.186) 56(84) 比特的数据。
64 比特，来自 157.148.69.186 (157.148.69.186): icmp_seq=1 ttl=128 时间=39.4 毫秒
64 比特，来自 157.148.69.186 (157.148.69.186): icmp_seq=2 ttl=128 时间=47.2 毫秒
64 比特，来自 157.148.69.186 (157.148.69.186): icmp_seq=3 ttl=128 时间=39.2 毫秒

--- www.a.shifen.com ping 统计 ---
已发送 3 个包， 已接收 3 个包, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 39.218/41.938/47.226/3.739 ms
```

## 上机实操测试，用于创建 Linux 普通用户的命令是

```shell
// highlight-next-line
[a123@localhost ~]$ sudo useradd au21
[sudo] a123 的密码：
```

## 上机实操进程管理操作，用于强制结束指定 PID 进程的基础命令是

```shell
[a123@localhost ~]$ kill -9 33742
```

进程 PID 不是固定的，要配合 `ps -ef` 的查询结果来输入

## 上机实操网络配置，以下可实现网卡开机自动启动的配置参数是

```shell
// highlight-next-line
[a123@localhost ~]$ nmcli connection show
NAME    UUID                                  TYPE      DEVICE 
ens160  06ebdf02-5685-3f02-8722-1c2a0ffb2121  ethernet  ens160 
lo      5eb69c55-439a-48c9-b607-f033993fb8fb  loopback  lo    
// highlight-start 
[a123@localhost ~]$ nmcli connection modify ens160 connection.autoconnect yes
[a123@localhost ~]$ nmcli connection show ens160 | grep autoconnect
// highlight-end
connection.autoconnect:                 是
connection.autoconnect-priority:        -999
connection.autoconnect-retries:         -1 (default)
connection.autoconnect-slaves:          -1（default）
connection.autoconnect-ports:           -1（default）
```

:::warning
网络相关的配置文件路径已变为：
```shell
/etc/NetworkManager/system-connections/
```

重启网络服务：

```shell
systemctl restart NetworkManager
```
:::

## 上机实操 yum 服务操作，安装 httpd 网页服务的正确命令是

```shell
// highlight-next-line
[a123@localhost ~]$ sudo yum install -y httpd
[sudo] a123 的密码：
上次元数据过期检查：0:42:15 前，执行于 2026年06月12日 星期五 21时51分01秒。
依赖关系解决。
=========================================================================================================================
 软件包                             架构                   版本                          仓库                       大小
=========================================================================================================================
安装:
 httpd                              x86_64                 2.4.62-14.el9                 appstream                  47 k
安装依赖关系:
 apr                                x86_64                 1.7.0-12.el9                  appstream                 123 k
 apr-util                           x86_64                 1.6.1-23.el9                  appstream                  95 k
 apr-util-bdb                       x86_64                 1.6.1-23.el9                  appstream                  13 k
 centos-logos-httpd                 noarch                 90.9-1.el9                    appstream                 1.5 M
 httpd-core                         x86_64                 2.4.62-14.el9                 appstream                 1.5 M
 httpd-filesystem                   noarch                 2.4.62-14.el9                 appstream                  12 k
 httpd-tools                        x86_64                 2.4.62-14.el9                 appstream                  81 k
安装弱的依赖:
 apr-util-openssl                   x86_64                 1.6.1-23.el9                  appstream                  15 k
 mod_http2                          x86_64                 2.0.26-6.el9                  appstream                 163 k
 mod_lua
```

## 上机实操测试，查看系统路由表信息的命令是

```shell
// highlight-next-line
[a123@localhost ~]$ route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         192.168.42.2    0.0.0.0         UG    100    0        0 ens160
192.168.42.0    0.0.0.0         255.255.255.0   U     100    0        0 ens160
```

## 上机实操用户权限配置，将用户加入附属组的参数是

```shell
[a123@localhost ~]$ sudo useradd test
[a123@localhost ~]$ sudo groupadd test2
[a123@localhost ~]$ sudo usermod -aG test2 test
```

## 上机实操 Shell 脚本测试，以下可实现循环输出数字 1-5 的语法是

```shell
[a123@localhost ~]$ nano shelljiaoben.sh
```

`shelljiaoben.sh`文件内写

```sh
for i in {1..5}
do
    echo "当前数字：$i"
done
```

保存后退出，继续执行下面命令：

```shell
[a123@localhost ~]$ chmod +x ./shelljiaoben.sh
[a123@localhost ~]$ ./shelljiaoben.sh
当前数字：1
当前数字：2
当前数字：3
当前数字：4
当前数字：5
```

## nmcli 网卡配置文件示例

权限要求：连接配置文件必须 `600`，属主 `root:root`

```ini
[connection]
# 连接名称，nmcli connection show 显示的名字
id=ens33-static
# 网卡设备名
interface-name=ens33
# 连接类型，以太网（有线连接）固定为 ethernet
type=ethernet
# 自动连接开机启用
autoconnect=yes

[ethernet]
# 硬件MAC地址
mac-address=00:0c:29:xx:xx:xx
# 关闭网卡节能
wakeonlan=ignore
# 自动协商速率
auto-negotiation=yes

[ipv4]
# 方法 manual=静态，auto=DHCP，disabled=关闭IPv4
method=manual
# IP地址/CIDR 前缀，多地址逗号分隔
addresses=192.168.1.100/24,192.168.1.101/24
# 网关，多网关用;分隔
gateway=192.168.1.1
# DNS服务器，逗号分隔
dns=223.5.5.5,114.114.114.114
# DNS搜索域
dns-search=local.lan
# 允许默认路由
may-fail=no
# 不自动获取路由
never-default=false

# 额外静态路由（可选）
routes=10.0.0.0/8,192.168.1.1;172.16.0.0/12,192.168.1.1

[ipv6]
# ignore=禁用IPv6，auto=自动，manual=静态
method=ignore
addr-gen-mode=stable-privacy

[proxy]
method=none
```

重载配置文件

```shell
nmcli connection reload
```

启用 / 重启连接

```shell
nmcli connection up ens33-static
nmcli device reapply ens33
```

权限更改

```shell
chmod 600 /etc/NetworkManager/system-connections/<新建的配置文件>
chown root:root /etc/NetworkManager/system-connections/<新建的配置文件>
```

常用掩码对应表

| 子网掩码 | CIDR 前缀 | 适用场景 |
| --- | --- | --- |
| 255.0.0.0 | /8 | A 类大段 10.x.x.x |
| 255.255.0.0 | /16 | 大型内网分段 |
| 255.255.255.0 | /24 | 最常用，局域网 |
| 255.255.255.128 | /25 | 半段子网 |
| 255.255.255.192 | /26 | 小网段 |
| 255.255.255.224 | /27 | 小型业务网段 |
| 255.255.255.240 | /28 | 设备极少场景 |
| 255.255.255.252 | /30 | 点对点互联 |