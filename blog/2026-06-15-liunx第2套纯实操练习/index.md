---
slug: Linux_Practice_Exercises_02
title: Liunx 第2套纯实操练习
tags: [Linux网络操作系统]
description: Liunx 第2套纯实操练习
hide_table_of_contents: false
date: 2026-06-15T08:00
last_update:
  date: 2026-06-21T20:49
unlisted: false
---

Liunx 第2套纯实操练习。

相关图书：《Linux网络操作系统项目教程》-中国工信出版集团、人民邮电出版社-杨云-ISBN9787115673602

印次：2025年8月第 1 次

{/* truncate */}

:::warning

以下执行命令之后的输出仅供参考，不一定完全与示例内容一致！

本套试题都在**管理员权限**下操作！
:::

## 上机实操一步式递归创建 /usr/project/dev/data 嵌套层级目录

```shell
// highlight-next-line
[root@localhost ~]# mkdir -p /usr/project/dev/data
[root@localhost ~]# ls /usr/project/dev/
data
```

`-p` 递归创建多层目录，且目录已存在时不报错

## 在 /usr/project 目录创建 app.log 文件，设置权限为755

```shell
// highlight-start
[root@localhost ~]# touch /usr/project/app.log
[root@localhost ~]# chmod 755 /usr/project/app.log
// highlight-end
[root@localhost ~]# ls -l /usr/project/
总用量 0
-rwxr-xr-x. 1 root root  0  6月 21 19:25 app.log
drwxr-xr-x. 3 root root 18  6月 21 18:34 dev
```

755权限为 `-rwxr-xr-x`

## 将 /etc/profile.d/lang.sh 文件复制到 /usr/project/dev/ 目录，保留所有属性权限

```shell
// highlight-next-line
[root@localhost ~]# cp -p /etc/profile.d/lang.sh /usr/project/dev/
[root@localhost ~]# ls -l /usr/project/dev/
总用量 4
drwxr-xr-x. 2 root root    6  6月 21 18:34 data
-rw-r--r--. 1 root root 3187  6月 23  2020 lang.sh
```

`-p` 保留文件原有全部属性

## 递归删除 /usr/project/dev/data 目录下所有内容，保留空目录

```shell
// highlight-next-line
[root@localhost ~]# rm -rf /usr/project/dev/data/*
[root@localhost ~]# ls /usr/project/dev/data/
[root@localhost ~]# ls -d /usr/project/dev/data/
/usr/project/dev/data/
```

`-d` 只显示目录本身，不展开内部文件

## 创建普通测试用户 testuser，指定专属家目录 /home/testuser

```shell
// highlight-next-line
[root@localhost ~]# useradd testuser
[root@localhost ~]# id testuser
用户id=1001(testuser) 组id=1001(testuser) 组=1001(testuser)
[root@localhost ~]# ls /home/
a123  testuser
```

## 创建用户组 testgroup，将 testuser 用户加入附属组 testgroup

```shell
// highlight-start
[root@localhost ~]# groupadd testgroup
[root@localhost ~]# usermod -aG testgroup testuser
// highlight-end
[root@localhost ~]# id testuser
用户id=1001(testuser) 组id=1001(testuser) 组=1001(testuser),1002(testgroup)
```

## 设置 testuser 密码有效期最长15天，过期自动提醒改密

```shell
[root@localhost ~]# chage -M 15 testuser
```

## 查看 testuser 用户的密码有效期详细配置信息

```shell
[root@localhost ~]# chage -l testuser
最近一次密码修改时间					：6月 21, 2026
密码过期时间					：7月 06, 2026
密码失效时间					：从不
帐户过期时间						：从不
两次改变密码之间相距的最小天数		：0
两次改变密码之间相距的最大天数		：15
在密码过期之前警告的天数	：7
```

## 人性化查看系统磁盘分区总容量、已用、剩余空间

```shell
[root@localhost ~]# df -h
文件系统             容量  已用  可用 已用% 挂载点
devtmpfs             793M     0  793M    0% /dev
tmpfs                826M     0  826M    0% /dev/shm
tmpfs                331M  6.9M  324M    3% /run
/dev/mapper/cs-root   17G  5.1G   12G   30% /
/dev/nvme0n1p1       960M  440M  521M   46% /boot
tmpfs                166M  100K  165M    1% /run/user/1000
```

## 创建 /mnt/iso 目录，临时挂载光盘镜像至该目录并验证

:::warning
执行命令之前必须确保虚拟机已挂载一个 ISO 镜像文件！
:::

```shell
// highlight-start
[root@localhost ~]# mkdir -p /mnt/iso
[root@localhost ~]# mount /dev/cdrom /mnt/iso
// highlight-end
mount: /mnt/iso: WARNING: source write-protected, mounted read-only.
[root@localhost ~]# ls /mnt/iso/
 autorun.ico   certified.txt  'Program Files'   setup.exe
 autorun.inf   manifest.txt    setup64.exe      VMwareToolsUpgrader.exe
```

## 查看系统所有进程，筛选精准匹配 nginx 守护进程

```shell
[root@localhost ~]# ps -ef | grep nginx | grep -v grep
```

`ps -ef | grep <要查找的进程名称> | grep -v grep`

## 强制终止 PID 为1200的异常进程，释放系统资源

```shell
[root@localhost ~]# kill -9 1200
```

进程 PID 不是固定的，要配合 `ps -ef` 的查询结果来输入

## 查看系统所有网络接口、IP、MAC 地址完整信息

```shell
[root@localhost ~]# ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens160: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:0c:29:48:ee:d6 brd ff:ff:ff:ff:ff:ff
    altname enp3s0
    inet 192.168.42.131/24 brd 192.168.42.255 scope global dynamic noprefixroute ens160
       valid_lft 1308sec preferred_lft 1308sec
    inet6 fe80::20c:29ff:fe48:eed6/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
```

## 永久配置网卡静态 IP、网关、DNS，设置开机自启并验证

```shell
[root@localhost ~]# nmcli connection show
NAME    UUID                                  TYPE      DEVICE 
ens160  06ebdf02-5685-3f02-8722-1c2a0ffb2121  ethernet  ens160 
lo      a232714a-585d-4f59-88ed-3a9813c39b81  loopback  lo     
[root@localhost ~]# ls /etc/NetworkManager/system-connections/
ens160.nmconnection
[root@localhost ~]# nano /etc/NetworkManager/system-connections/ens160.nmconnection
```

`ens160.nmconnection` 的原始内容：

具体修改看下文

```ini
[connection]
id=ens160
uuid=06ebdf02-5685-3f02-8722-1c2a0ffb2121
type=ethernet
autoconnect-priority=-999
interface-name=ens160
timestamp=1780931579

[ethernet]

[ipv4]
method=auto

[ipv6]
addr-gen-mode=eui64
method=auto

[proxy]
```

重载配置：`nmcli connection reload`

重新激活网卡：`nmcli connection up ens160`

重启网络服务：`systemctl restart NetworkManager`

之后执行：
```shell
[root@localhost ~]# ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens160: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:0c:29:48:ee:d6 brd ff:ff:ff:ff:ff:ff
    altname enp3s0
    inet 192.168.42.131/24 brd 192.168.42.255 scope global dynamic noprefixroute ens160
       valid_lft 964sec preferred_lft 964sec
    inet6 fe80::20c:29ff:fe48:eed6/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
```

具体修改位置参考示例：

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

出现权限问题时的权限更改：

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

## 查看系统当前默认网关路由信息

```shell
[root@localhost ~]# route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         192.168.42.2    0.0.0.0         UG    100    0        0 ens160
192.168.42.0    0.0.0.0         255.255.255.0   U     100    0        0 ens160
```

## 解析域名 `www.baidu.com`，获取对应公网IP

```shell
[root@localhost ~]# nslookup www.baidu.com
Server:		192.168.42.2
Address:	192.168.42.2#53

Non-authoritative answer:
www.baidu.com	canonical name = www.a.shifen.com.
Name:	www.a.shifen.com
Address: 157.148.69.151
Name:	www.a.shifen.com
Address: 157.148.69.186
Name:	www.a.shifen.com
Address: 2408:8756:c52:1a18:0:ff:b030:7606
Name:	www.a.shifen.com
Address: 2408:8756:c52:15df:0:ff:b073:d207
```

## 安装 httpd 网页服务，启动、设置开机自启、查看运行状态

```shell
// highlight-next-line
[root@localhost ~]# yum install -y httpd
上次元数据过期检查：1:43:11 前，执行于 2026年06月21日 星期日 18时38分20秒。
依赖关系解决。
================================================================================
 软件包                  架构        版本                  仓库            大小
================================================================================
安装:
 httpd                   x86_64      2.4.62-14.el9         appstream       47 k
安装依赖关系:
 apr                     x86_64      1.7.0-12.el9          appstream      123 k
 apr-util                x86_64      1.6.1-23.el9          appstream       95 k
 apr-util-bdb            x86_64      1.6.1-23.el9          appstream       13 k
 centos-logos-httpd      noarch      90.9-1.el9            appstream      1.5 M
 httpd-core              x86_64      2.4.62-14.el9         appstream      1.5 M
 httpd-filesystem        noarch      2.4.62-14.el9         appstream       12 k
 httpd-tools             x86_64      2.4.62-14.el9         appstream       81 k
安装弱的依赖:
 apr-util-openssl        x86_64      1.6.1-23.el9          appstream       15 k
 mod_http2               x86_64      2.0.26-6.el9          appstream      163 k
 mod_lua                 x86_64      2.4.62-14.el9         appstream       59 k

事务概要
================================================================================
安装  11 软件包

总下载：3.6 M
安装大小：8.6 M
// highlight-start
[root@localhost ~]# systemctl start httpd
[root@localhost ~]# systemctl enable httpd
// highlight-end
Created symlink /etc/systemd/system/multi-user.target.wants/httpd.service → /usr/lib/systemd/system/httpd.service.
// highlight-next-line
[root@localhost ~]# systemctl status httpd
● httpd.service - The Apache HTTP Server
     Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; preset: di>
     Active: active (running) since Sun 2026-06-21 20:22:04 CST; 21s ago
       Docs: man:httpd.service(8)
   Main PID: 33952 (httpd)
     Status: "Total requests: 0; Idle/Busy workers 100/0;Requests/sec: 0; Bytes>
      Tasks: 177 (limit: 10139)
     Memory: 14.5M (peak: 15.9M)
        CPU: 68ms
     CGroup: /system.slice/httpd.service
             ├─33952 /usr/sbin/httpd -DFOREGROUND
             ├─33953 /usr/sbin/httpd -DFOREGROUND
             ├─33954 /usr/sbin/httpd -DFOREGROUND
             ├─33955 /usr/sbin/httpd -DFOREGROUND
             └─33965 /usr/sbin/httpd -DFOREGROUND
```

## 修改 vsftpd 配置，开启本地用户登录权限，重启服务生效

:::warning

修改 vsftpd 配置前先安装 `vsftpd`，系统没有预装该软件：`yum install -y vsftpd`

:::

```shell
[root@localhost ~]# nano /etc/vsftpd/vsftpd.conf
```

`vsftpd.conf`文件内容：

```ini
# Example config file /etc/vsftpd/vsftpd.conf
#
# The default compiled in settings are fairly paranoid. This sample file
# loosens things up a bit, to make the ftp daemon more usable.
# Please see vsftpd.conf.5 for all compiled in defaults.
#
# READ THIS: This example file is NOT an exhaustive list of vsftpd options.
# Please read the vsftpd.conf.5 manual page to get a full idea of vsftpd's
# capabilities.
#
# Allow anonymous FTP? (Beware - allowed by default if you comment this out).
anonymous_enable=NO
#
# Uncomment this to allow local users to log in.
// highlight-next-line
local_enable=YES
#
# Uncomment this to enable any form of FTP write command.
write_enable=YES
#
# Default umask for local users is 077. You may wish to change this to 022,
# if your users expect that (022 is used by most other ftpd's)
local_umask=022
# 省略其余部分内容
```

之后执行：

```shell
[root@localhost ~]# systemctl restart vsftpd
```

## 清除系统全部 YUM 缓存，重新生成最新缓存

```shell
// highlight-next-line
[root@localhost ~]# yum clean all
21 个文件已删除
// highlight-next-line
[root@localhost ~]# yum makecache
CentOS Stream 9 - BaseOS              1.2 MB/s | 8.9 MB     00:07    
CentOS Stream 9 - AppStream           1.6 MB/s |  28 MB     00:17    
CentOS Stream 9 - Extras packages     22 kB/s |  21 kB     00:00    
元数据缓存已建立。
```

## 防火墙永久放行https服务，重载规则并查看放行列表

```shell
// highlight-next-line
[root@localhost ~]# firewall-cmd --add-service=https --permanent
success
// highlight-next-line
[root@localhost ~]# firewall-cmd --reload
success
// highlight-next-line
[root@localhost ~]# firewall-cmd --list-services
cockpit dhcpv6-client https ssh
```

## 编写脚本输出系统当前操作系统版本

```shell
[root@localhost ~]# nano system-version.sh
```

`system-version.sh` 文件内容：

```shell
#!/bin/bash
cat /etc/redhat-release
```

之后执行：

```shell
[root@localhost ~]# chmod +x system-version.sh
[root@localhost ~]# ./system-version.sh
CentOS Stream release 9
```

## 编写脚本判断 /usr/project 目录是否存在，不存在则创建

```shell
[root@localhost ~]# nano check-dir.sh
```

`check-dir.sh` 文件内容：

```shell
#!/bin/bash
if [ ! -d /usr/project ];then
mkdir -p /usr/project
fi
```

之后执行：

```shell
[root@localhost ~]# chmod +x check-dir.sh
[root@localhost ~]# ./check-dir.sh
[root@localhost ~]# ls -d /usr/project
/usr/project
```

## 编写脚本批量创建 user10 - user12 三个普通用户

```shell
[root@localhost ~]# nano batch-user.sh
```

`batch-user.sh` 文件内容：

```shell
#!/bin/bash
for i in {10..12}
do
useradd user$i
done
```

之后执行：

```shell
[root@localhost ~]# chmod +x batch-user.sh
[root@localhost ~]# ./batch-user.sh
[root@localhost ~]# id user10
用户id=1002(user10) 组id=1003(user10) 组=1003(user10)
```

## 编写脚本统计当前系统内存使用情况并输出

```shell
[root@localhost ~]# nano mem-info.sh
```

`mem-info.sh` 文件内容：

```shell
#!/bin/bash
free -h
```

```shell
[root@localhost ~]# chmod +x mem-info.sh
[root@localhost ~]# ./mem-info.sh
               total        used        free      shared  buff/cache   available
Mem:           1.6Gi       1.2Gi       234Mi        10Mi       364Mi       405Mi
Swap:          2.0Gi        90Mi       1.9Gi
```