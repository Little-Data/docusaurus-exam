---
slug: Linux_Practice_Exercises_04
title: Liunx 第4套纯实操练习
tags: [Linux网络操作系统]
description: Liunx 第4套纯实操练习
hide_table_of_contents: false
date: 2026-06-22T08:01
last_update:
  date: 2026-06-23T22:35
unlisted: false
---

Liunx 第4套纯实操练习。

相关图书：《Linux网络操作系统项目教程》-中国工信出版集团、人民邮电出版社-杨云-ISBN9787115673602

印次：2025年8月第 1 次

{/* truncate */}

:::warning

以下执行命令之后的输出仅供参考，不一定完全与示例内容一致！

本套试题都在**管理员权限**下操作！
:::

## 在 /opt 目录下批量创建 test1、test2、test3 三个同级目录

```shell
// highlight-next-line
[root@localhost ~]# mkdir /opt/test{1..3}
[root@localhost ~]# ls /opt/
test1  test2  test3
```

## 在 /opt/test1 目录创建 log.txt 文件，设置文件权限为555

```shell
// highlight-start
[root@localhost ~]# touch /opt/test1/log.txt
[root@localhost ~]# chmod 555 /opt/test1/log.txt
// highlight-end
[root@localhost ~]# ls -l /opt/test1/log.txt
-r-xr-xr-x. 1 root root 0  6月 22 08:30 /opt/test1/log.txt
```

555权限为`-r-xr-xr-x`

## 将 /var/log/boot.log 文件移动到 /opt/test2 目录，并重命名为 boot_test.log

```shell
[root@localhost ~]# ls /var/log |grep boot.log
boot.log
// highlight-next-line
[root@localhost ~]# mv /var/log/boot.log /opt/test2/boot_test.log
[root@localhost ~]# ls /opt/test2
boot_test.log
[root@localhost ~]# ls /var/log |grep boot.log
```

## 查看 /etc/passwd 文件后5行内容

```shell
[root@localhost ~]# tail -5 /etc/passwd
sshd:x:74:74:Privilege-separated SSH:/usr/share/empty.sshd:/usr/sbin/nologin
dnsmasq:x:985:985:Dnsmasq DHCP and DNS server:/var/lib/dnsmasq:/usr/sbin/nologin
tcpdump:x:72:72::/:/sbin/nologin
a123456:x:1000:1000:a123456:/home/a123456:/bin/bash
vboxadd:x:984:1::/var/run/vboxadd:/bin/false
```

## 创建普通用户 netuser，指定家目录为 /opt/netuser，默认 shell 为 bash

```shell
// highlight-next-line
[root@localhost ~]# useradd -d /opt/netuser -s /bin/bash netuser
[root@localhost ~]# id netuser
用户id=1001(netuser) 组id=1001(netuser) 组=1001(netuser)
```

## 创建工作组 tech，将 netuser 用户设置为该组主属用户

```shell
// highlight-start
[root@localhost ~]# groupadd tech
[root@localhost ~]# usermod -g tech netuser
// highlight-end
[root@localhost ~]# id netuser 
用户id=1001(netuser) 组id=1002(tech) 组=1002(tech)
```

## 锁定 netuser 用户，禁止其登录系统

```shell
// highlight-next-line
[root@localhost ~]# usermod -L netuser
[root@localhost ~]# passwd -S netuser 
netuser LK 2026-06-22 0 99999 7 -1 (密码已被锁定。)
```

## 解锁已锁定的 netuser 用户，恢复正常登录权限

```shell
// highlight-next-line
[root@localhost ~]# passwd -u -f netuser 
解锁用户 netuser 的密码。
passwd: 操作成功
[root@localhost ~]# passwd -S netuser 
netuser NP 2026-06-22 0 99999 7 -1 (密码为空。)
```

## 统计 /home 目录整体占用磁盘空间大小，查看磁盘 inode 使用情况

```shell
// highlight-next-line
[root@localhost ~]# du -sh /home
63M	/home
// highlight-next-line
[root@localhost ~]# df -i
文件系统              Inodes 已用(I)  可用(I) 已用(I)% 挂载点
devtmpfs              210048     435   209613       1% /dev
tmpfs                 218572       2   218570       1% /dev/shm
tmpfs                 819200     833   818367       1% /run
/dev/mapper/cs-root 24616960  134894 24482066       1% /
/dev/sda1             524288     369   523919       1% /boot
tmpfs                  43714     144    43570       1% /run/user/1000
```

## 永久卸载 /mnt/cdrom 挂载点，删除 fstab 中挂载配置并验证

```shell
[root@localhost ~]# umount /dev/sr0
[root@localhost ~]# nano /etc/fstab 
[root@localhost ~]# mount -a
```

:::warning
执行命令之前确保虚拟机已挂载一个 ISO 镜像文件！
:::

## 查看系统所有后台进程，筛选出所有终端无关的守护进程

```shell
[root@localhost ~]# ps -ef
UID          PID    PPID  C STIME TTY          TIME CMD
a123456     3045    2978  0 08:08 ?        00:00:00 /usr/libexec/gnome-session-c
a123456     3047    2978  0 08:08 ?        00:00:00 /usr/libexec/gnome-session-b
a123456     3064    2978  2 08:08 ?        00:01:33 /usr/bin/gnome-shell
a123456     3072    2978  0 08:08 ?        00:00:00 /usr/libexec/gvfsd
a123456     3077    2978  0 08:08 ?        00:00:00 /usr/libexec/gvfsd-fuse /run
a123456     3084    2978  0 08:08 ?        00:00:00 /usr/libexec/at-spi-bus-laun
a123456     3090    3084  0 08:08 ?        00:00:00 /usr/bin/dbus-broker-launch 
a123456     3091    3090  0 08:08 ?        00:00:00 dbus-broker --log 4 --contro
a123456     3095    3064  0 08:08 ?        00:00:03 ibus-daemon --panel disable
a123456     3097    2978  0 08:08 ?        00:00:00 /usr/libexec/xdg-permission-
a123456     3102    2978  0 08:08 ?        00:00:00 /usr/libexec/gnome-shell-cal
a123456     3104    3095  0 08:08 ?        00:00:00 /usr/libexec/ibus-dconf
a123456     3105    3095  0 08:08 ?        00:00:01 /usr/libexec/ibus-extension-
a123456     3107    2978  0 08:08 ?        00:00:00 /usr/libexec/ibus-portal
a123456     3118    2978  0 08:08 ?        00:00:00 /usr/libexec/evolution-sourc
a123456     3129    2978  0 08:08 ?        00:00:00 /usr/libexec/goa-daemon
a123456     3132    2978  0 08:08 ?        00:00:00 /usr/libexec/evolution-calen
a123456     3141    2978  0 08:08 ?        00:00:00 /usr/libexec/goa-identity-se
```

`TTY` 为 `?` 即无终端

## 强制终止 PID 为 1000 的进程

```shell
[root@localhost ~]# kill -9 1000
```

## 临时关闭网卡 ens33，再重新启用网卡

```shell
[root@localhost ~]# nmcli connection show
NAME    UUID                                  TYPE      DEVICE 
enp0s3  45da2f3c-af89-38dc-b83b-c1a02af27802  ethernet  enp0s3 
lo      b2ee3f0b-b041-4dc2-9118-a7fcc11fe0e8  loopback  lo     
// highlight-next-line
[root@localhost ~]# nmcli connection down enp0s3
成功停用连接 "enp0s3"（D-Bus 活动路径：/org/freedesktop/NetworkManager/ActiveConnection/2）
// highlight-next-line
[root@localhost ~]# nmcli connection up enp0s3
连接已成功激活（D-Bus 活动路径：/org/freedesktop/NetworkManager/ActiveConnection/3）
```

:::warning
请先使用 `nmcli connection show` 来查询当前使用的网卡名称！
:::

## 配置永久静态网络参数，重启网络并验证

参考 [Liunx 第2套纯实操练习 永久配置网卡静态-ip网关dns设置开机自启并验证](/Linux_Practice_Exercises_02#永久配置网卡静态-ip网关dns设置开机自启并验证) 部分

## 查看系统所有网络端口监听状态，筛选 TCP 协议监听端口

```shell
[root@localhost ~]# netstat -an |grep tcp
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN     
tcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN     
tcp6       0      0 ::1:631                 :::*                    LISTEN     
tcp6       0      0 :::22                   :::*                    LISTEN
```

## 测试与网关的连通性，发送3次测试数据包后自动停止

```shell
[root@localhost ~]# ping -c 3 www.baidu.com
PING www.baidu.com (183.240.99.224) 56(84) 比特的数据。
64 比特，来自 183.240.99.224 (183.240.99.224): icmp_seq=1 ttl=64 时间=20.4 毫秒
64 比特，来自 183.240.99.224 (183.240.99.224): icmp_seq=2 ttl=64 时间=20.7 毫秒
64 比特，来自 183.240.99.224 (183.240.99.224): icmp_seq=3 ttl=64 时间=20.9 毫秒
```

## 安装 nfs 共享服务，启动服务并设置开机自启，查看 nfs 服务状态

```shell
[root@localhost ~]# yum install nfs-utils -y
[root@localhost ~]# systemctl start nfs-server
[root@localhost ~]# systemctl enable nfs-server
Created symlink /etc/systemd/system/multi-user.target.wants/nfs-server.service → /usr/lib/systemd/system/nfs-server.service.
[root@localhost ~]# systemctl status nfs-server
● nfs-server.service - NFS server and services
     Loaded: loaded (/usr/lib/systemd/system/nfs-server.service; enabled; prese>
     Active: active (exited) since Mon 2026-06-22 09:32:59 CST; 39s ago
       Docs: man:rpc.nfsd(8)
             man:exportfs(8)
   Main PID: 35880 (code=exited, status=0/SUCCESS)
        CPU: 14ms
```

## 修改 vsftpd 配置，禁止匿名用户登录，仅允许系统用户登录

```shell
[root@localhost ~]# yum install vsftpd -y
[root@localhost ~]# nano /etc/vsftpd/vsftpd.conf
```

`vsftpd.conf` 部分文件内容：

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
// highlight-next-line
anonymous_enable=NO
#
# Uncomment this to allow local users to log in.
```

之后继续命令：

```shell
[root@localhost ~]# systemctl restart vsftpd
```

:::warning
请先使用 `yum install vsftpd -y` 来安装 `vsftpd` 后再编辑配置文件！
:::

## 使用 yum 卸载 tree 软件，清理 yum 多余缓存文件

```shell
[root@localhost ~]# yum remove tree -y
[root@localhost ~]# yum clean all
21 个文件已删除
```

## 设置 httpd 服务开机不自启，临时关闭服务，确认服务已停止运行

```shell
[root@localhost ~]# yum install httpd -y
[root@localhost ~]# systemctl start httpd
[root@localhost ~]# systemctl disable httpd
[root@localhost ~]# systemctl stop httpd
[root@localhost ~]# systemctl status httpd
○ httpd.service - The Apache HTTP Server
     Loaded: loaded (/usr/lib/systemd/system/httpd.service; disabled; preset: d>
     Active: inactive (dead)
       Docs: man:httpd.service(8)
```

:::warning
请先使用 `yum install httpd -y` 来安装 `httpd` 后再配置服务！
:::

## 编写 Shell 脚本，输出当前系统登录用户名

```shell
[root@localhost ~]# nano /opt/show_user.sh
```

`show_user.sh` 文件内容：

```shell
echo "当前用户：$USER"
```

之后继续命令：

```shell
[root@localhost ~]# chmod +x /opt/show_user.sh
[root@localhost ~]# /opt/show_user.sh
当前用户：root
```

## 编写脚本，判断 test.txt 文件是否存在，存在则删除该文件

```shell
[root@localhost ~]# nano /opt/check_file.sh
```

`check_file.sh` 文件内容：

```shell
if [ -f test.txt ];then
rm -f test.txt
fi
```

:::warning
注意空格！
:::

之后继续命令：

```shell
[root@localhost ~]# chmod +x /opt/check_file.sh
[root@localhost ~]# /opt/check_file.sh
```

## 编写脚本，循环输出1-5的数字

```shell
[root@localhost ~]# nano /opt/for_loop.sh
```

`for_loop.sh` 文件内容：

```shell
for i in {1..5}
do
    echo $i
done
```

之后继续命令：

```shell
[root@localhost ~]# chmod +x /opt/for_loop.sh
[root@localhost ~]# /opt/for_loop.sh
```

## 编写脚本，统计 /etc 目录下所有文件数量并输出

```shell
[root@localhost ~]# nano /opt/count_etc.sh
```

`count_etc.sh` 文件内容：

```shell
file_num=`ls /etc | wc -l`
echo "etc 目录文件总数：$file_num"
```
:::warning
<code>``</code>不是 <code>''</code> 单引号！
:::

之后继续命令：

```shell
[root@localhost ~]# chmod +x /opt/count_etc.sh
[root@localhost ~]# /opt/count_etc.sh 
etc 目录文件总数：246
```