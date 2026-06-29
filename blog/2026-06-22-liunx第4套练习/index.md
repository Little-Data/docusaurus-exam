---
slug: Linux_Practice_Exercises_04
title: Liunx 第4套练习
tags: [Linux网络操作系统]
description: Liunx 第4套练习
hide_table_of_contents: false
date: 2026-06-22T08:01
last_update:
  date: 2026-06-29T22:08
unlisted: false
---

Liunx 第4套练习。

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

## 填空

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>1. 上机实操在/opt目录下批量创建test1、test2、test3目录的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    mkdir /opt/test\{1..3\}

    [实操：在 /opt 目录下批量创建 test1、test2、test3 三个同级目录](#在-opt-目录下批量创建-test1test2test3-三个同级目录)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>2. 上机实操设置文件权限为555的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    chmod 555 文件名

    [实操：在 /opt/test1 目录创建 log.txt 文件，设置文件权限为555](#在-opttest1-目录创建-logtxt-文件设置文件权限为555)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>3. 上机实操移动文件并重命名的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    mv 原文件路径/原文件名 目标路径/新文件名

    [实操：将 /var/log/boot.log 文件移动到 /opt/test2 目录，并重命名为 boot_test.log](#将-varlogbootlog-文件移动到-opttest2-目录并重命名为-boot_testlog)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>4. 上机实操查看文件末尾5行内容的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    tail -5 /etc/passwd

    [实操：查看 /etc/passwd 文件后5行内容](#查看-etcpasswd-文件后5行内容)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>5. 上机实操指定用户家目录与登录 Shell 创建用户的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    useradd -d /opt/netuser -s /bin/bash netuser

    [实操：创建普通用户 netuser，指定家目录为 /opt/netuser，默认 shell 为 bash](#创建普通用户-netuser指定家目录为-optnetuser默认-shell-为-bash)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>6. 上机实操锁定普通用户禁止登录的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    usermod -L 用户名

    [实操：锁定 netuser 用户，禁止其登录系统](#锁定-netuser-用户禁止其登录系统)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>7. 上机实操查看磁盘 inode 使用情况的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    df -i

    [实操：统计 /home 目录整体占用磁盘空间大小，查看磁盘 inode 使用情况](#统计-home-目录整体占用磁盘空间大小查看磁盘-inode-使用情况)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>8. 上机实操强制终止指定 PID 进程的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    kill -9 PID

    [实操：强制终止 PID 为 1000 的进程](#强制终止-pid-为-1000-的进程)
    </Jiexi>
  </Workitem>
</Workpaper>

## 单选

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. 上机实操测试，以下可实现批量创建同名前缀目录的符号是</Wenben>
    <Xuanxiang>\[\]</Xuanxiang>
    <Xuanxiang ans>\{\}</Xuanxiang>
    <Xuanxiang>()</Xuanxiang>
    <Xuanxiang>\<\></Xuanxiang>
    <Jiexi>[实操：在 /opt 目录下批量创建 test1、test2、test3 三个同级目录](#在-opt-目录下批量创建-test1test2test3-三个同级目录)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. 上机实操测试，Linux 权限555对应的用户权限是</Wenben>
    <Xuanxiang>读写执行</Xuanxiang>
    <Xuanxiang ans>读执行</Xuanxiang>
    <Xuanxiang>只读</Xuanxiang>
    <Xuanxiang>只执行</Xuanxiang>
    <Jiexi shouqi> 
    | **数字权限** | **权限字符** | **权限特征** |
    |---|---|---|
    | 000 | \-\-\-\-\-\-\-\-\- | 所有者、所属组、其他用户均无任何权限 |
    | 001 | \-\-\-\-\-\-\-\-x | 其他用户拥有执行权限 |
    | 002 | \-\-\-\-\-\-\-\-w\- | 其他用户拥有写入权限 |
    | 003 | \-\-\-\-\-\-\-\-wx | 其他用户拥有写入、执行权限 |
    | 004 | \-\-\-\-\-\-\-r\-\- | 其他用户拥有读取权限 |
    | 005 | \-\-\-\-\-\-\-r\-x | 其他用户拥有读取、执行权限 |
    | 006 | \-\-\-\-\-\-\-rw\- | 其他用户拥有读取、写入权限 |
    | 007 | \-\-\-\-\-\-\-rwx | 其他用户拥有读取、写入、执行权限 |
    | 010 | \-\-\-\-\-\-x\-\-\- | 所属组用户拥有执行权限 |
    | 020 | \-\-\-\-\-w\-\-\-\- | 所属组用户拥有写入权限 |
    | 030 | \-\-\-\-\-wx\-\-\- | 所属组用户拥有写入、执行权限 |
    | 040 | \-\-\-\-r\-\-\-\-\- | 所属组用户拥有读取权限 |
    | 050 | \-\-\-\-r\-x\-\-\- | 所属组用户拥有读取、执行权限 |
    | 060 | \-\-\-\-rw\-\-\-\- | 所属组用户拥有读取、写入权限 |
    | 070 | \-\-\-\-rwx\-\-\- | 所属组用户拥有读取、写入、执行权限 |
    | 100 | \-\-\-x\-\-\-\-\-\- | 所有者拥有执行权限 |
    | 200 | \-\-w\-\-\-\-\-\-\- | 所有者拥有写入权限 |
    | 300 | \-\-wx\-\-\-\-\-\- | 所有者拥有写入、执行权限 |
    | 400 | \-r\-\-\-\-\-\-\-\- | 所有者拥有读取权限 |
    | 500 | \-r\-x\-\-\-\-\-\- | 所有者拥有读取、执行权限 |
    | 600 | \-rw\-\-\-\-\-\-\- | 所有者拥有读写权限 |
    | 700 | \-rwx\-\-\-\-\-\- | 所有者拥有读写执行权限 |
    | 640 | \-rw\-r\-\-\-\-\- | 所有者读写、所属组读、其他无权限 |
    | 644 | \-rw\-r\-\-r\-\- | 所有者读写、所属组读、其他读 |
    | 660 | \-rw\-rw\-\-\-\- | 所有者读写、所属组读写、其他无权限 |
    | 664 | \-rw\-rw\-r\-\- | 所有者读写、所属组读写、其他读 |
    | 701 | \-rwx\-\-\-\-\-x | 所有者读写执行、其他执行 |
    | 711 | \-rwx\-\-x\-\-x | 所有者读写执行、所属组执行、其他执行 |
    | 750 | \-rwxr\-x\-\-\- | 所有者读写执行、所属组读执行、其他无权限 |
    | 751 | \-rwxr\-x\-\-x | 所有者读写执行、所属组读执行、其他执行 |
    | 754 | \-rwxr\-xr\-\- | 所有者读写执行、所属组读执行、其他读 |
    | 755 | \-rwxr\-xr\-x | 所有者读写执行、所属组读执行、其他读执行 |
    | 760 | \-rwxrw\-\-\-\- | 所有者读写执行、所属组读写、其他无权限 |
    | 764 | \-rwxrw\-r\-\- | 所有者读写执行、所属组读写、其他读 |
    | 765 | \-rwxrw\-r\-x | 所有者读写执行、所属组读写、其他读执行 |
    | 770 | \-rwxrwx\-\-\- | 所有者读写执行、所属组读写执行、其他无权限 |
    | 771 | \-rwxrwx\-\-x | 所有者读写执行、所属组读写执行、其他执行 |
    | 775 | \-rwxrwxr\-x | 所有者读写执行、所属组读写执行、其他读执行 |
    | 777 | \-rwxrwxrwx | 所有者、所属组、其他用户均拥有读写执行权限 |
    | 4755 | \-rwsr\-xr\-x | SUID权限，所有者读写执行、所属组读执行、其他读执行 |
    | 6755 | \-rwsr\-sr\-x | SUID\+SGID权限，所有者读写执行、所属组读执行、其他读执行 |
    | 1777 | drwxrwxrwt | Sticky Bit权限，目录所有用户可读写执行，仅文件所有者可删除文件 |
    </Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>3. 上机实操文件管理，mv 命令不具备的功能是</Wenben>
    <Xuanxiang>移动文件</Xuanxiang>
    <Xuanxiang>重命名文件</Xuanxiang>
    <Xuanxiang ans>复制文件</Xuanxiang>
    <Xuanxiang>移动目录</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>4. 上机实操文件查看，tail 命令的核心作用是</Wenben>
    <Xuanxiang>查看文件头部</Xuanxiang>
    <Xuanxiang ans>查看文件尾部</Xuanxiang>
    <Xuanxiang>分页查看文件</Xuanxiang>
    <Xuanxiang>实时监控文件</Xuanxiang>
    <Jiexi>[实操：查看 /etc/passwd 文件后5行内容](#查看-etcpasswd-文件后5行内容)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>5. 上机实操用户配置，-d 参数的作用是</Wenben>
    <Xuanxiang>指定登录 Shell</Xuanxiang>
    <Xuanxiang ans>指定家目录</Xuanxiang>
    <Xuanxiang>指定用户组</Xuanxiang>
    <Xuanxiang>指定UID</Xuanxiang>
    <Jiexi>[实操：创建普通用户 netuser，指定家目录为 /opt/netuser，默认 shell 为 bash](#创建普通用户-netuser指定家目录为-optnetuser默认-shell-为-bash)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>6. 上机实操用户管理，usermod -L命令的作用是</Wenben>
    <Xuanxiang>解锁用户</Xuanxiang>
    <Xuanxiang ans>锁定用户</Xuanxiang>
    <Xuanxiang>删除用户</Xuanxiang>
    <Xuanxiang>修改用户权限</Xuanxiang>
    <Jiexi>[实操：锁定 netuser 用户，禁止其登录系统](#锁定-netuser-用户禁止其登录系统)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>7. 上机实操磁盘管理，df -i 命令的作用是</Wenben>
    <Xuanxiang>查看磁盘容量</Xuanxiang>
    <Xuanxiang ans>查看 inode 使用情况</Xuanxiang>
    <Xuanxiang>查看目录占用</Xuanxiang>
    <Xuanxiang>查看挂载点</Xuanxiang>
    <Jiexi>[实操：统计 /home 目录整体占用磁盘空间大小，查看磁盘 inode 使用情况](#统计-home-目录整体占用磁盘空间大小查看磁盘-inode-使用情况)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>8. 上机实操进程管理，强制终止进程的参数是</Wenben>
    <Xuanxiang ans>-9</Xuanxiang>
    <Xuanxiang>-15</Xuanxiang>
    <Xuanxiang>-a</Xuanxiang>
    <Xuanxiang>-e</Xuanxiang>
    <Jiexi>[实操：强制终止 PID 为 1000 的进程](#强制终止-pid-为-1000-的进程)</Jiexi>
  </Workitem>
</Workpaper>

## 判断

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. 上机实操 mkdir \{1..3\} 可批量创建三个连续命名目录</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. 权限555表示所有用户仅拥有读、执行权限，无写入权限</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>3. mv 命令既可以移动文件，也可以对文件进行重命名操作</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>4. tail -5 文件名可以查看文件最后5行内容</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>5. useradd 命令无法自定义用户家目录和登录Shell</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>6. usermod -L 锁定用户后，该用户无法登录系统</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>7. df -i命令可以查看磁盘分区 inode 资源占用情况</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>8. kill -9 进程 PID 为强制终止进程，可结束顽固进程</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
</Workpaper>

## 实操简答

1. 上机实操批量目录创建、文件权限配置、文件移动重命名全套操作，写出实操步骤与运行现象

[实操：在 /opt 目录下批量创建 test1、test2、test3 三个同级目录](#在-opt-目录下批量创建-test1test2test3-三个同级目录)

[实操：在 /opt/test1 目录创建 log.txt 文件，设置文件权限为555](#在-opttest1-目录创建-logtxt-文件设置文件权限为555)

[实操：将 /var/log/boot.log 文件移动到 /opt/test2 目录，并重命名为 boot_test.log](#将-varlogbootlog-文件移动到-opttest2-目录并重命名为-boot_testlog)

2. 上机实操自定义用户创建、用户组配置、用户锁定解锁全套用户运维操作，写出实操流程和实测效果

[实操：创建普通用户 netuser，指定家目录为 /opt/netuser，默认 shell 为 bash](#创建普通用户-netuser指定家目录为-optnetuser默认-shell-为-bash)

[实操：创建工作组 tech，将 netuser 用户设置为该组主属用户](#创建工作组-tech将-netuser-用户设置为该组主属用户)

[实操：锁定 netuser 用户，禁止其登录系统](#锁定-netuser-用户禁止其登录系统)

[实操：解锁已锁定的 netuser 用户，恢复正常登录权限](#解锁已锁定的-netuser-用户恢复正常登录权限)

3. 上机实操磁盘资源统计、inode查看、进程查询与强制终止操作，写出实操步骤与运行效果

[实操：统计 /home 目录整体占用磁盘空间大小，查看磁盘 inode 使用情况](#统计-home-目录整体占用磁盘空间大小查看磁盘-inode-使用情况)

[实操：查看系统所有后台进程，筛选出所有终端无关的守护进程](#查看系统所有后台进程筛选出所有终端无关的守护进程)

[实操：强制终止 PID 为 1000 的进程](#强制终止-pid-为-1000-的进程)

## 实操复现

1. Linux磁盘挂载与进程管理场景实操复现

上机基于 CentOS 系统独立完成全套实操：

①查看/home目录整体磁盘占用空间；

②查看系统磁盘所有分区inode使用情况；

③永久卸载/mnt/cdrom挂载点并删除开机自动挂载配置；

④查看系统所有后台守护进程；

⑤强制终止指定PID进程

全程留存实操截图，重启复测配置生效，详细写出实操步骤、对应命令及实操结果

[实操：统计 /home 目录整体占用磁盘空间大小，查看磁盘 inode 使用情况](#统计-home-目录整体占用磁盘空间大小查看磁盘-inode-使用情况)

[实操：永久卸载 /mnt/cdrom 挂载点，删除 fstab 中挂载配置并验证](#永久卸载-mntcdrom-挂载点删除-fstab-中挂载配置并验证)

[实操：查看系统所有后台进程，筛选出所有终端无关的守护进程](#查看系统所有后台进程筛选出所有终端无关的守护进程)

[实操：强制终止 PID 为 1000 的进程](#强制终止-pid-为-1000-的进程)

2. Linux静态网络配置与端口运维实操复现


上机独立完成网络全套实操：

①临时关闭并重新启用ens33网卡；

②编辑网卡配置文件，配置永久静态IP、网关、DNS；

③重启网络服务使配置永久生效；

④查看系统所有TCP监听端口；

⑤测试网关连通性，发送3次数据包自动终止

全程截图留存，重启复测网络正常，写出完整实操步骤与效果

[实操：临时关闭网卡 ens33，再重新启用网卡](#临时关闭网卡-ens33再重新启用网卡)

[实操：配置永久静态网络参数，重启网络并验证](#配置永久静态网络参数重启网络并验证)

[实操：查看系统所有网络端口监听状态，筛选 TCP 协议监听端口](#查看系统所有网络端口监听状态筛选-tcp-协议监听端口)

[实操：测试与网关的连通性，发送3次测试数据包后自动停止](#测试与网关的连通性发送3次测试数据包后自动停止)

## 实操项目

:::note
1、2、3、4、6、7 已有题目，重复不列举。
:::

5. 完成NFS服务安装启停自启、vsftpd 匿名访问关闭、yum 缓存清理、httpd 服务安全加固全套操作

[实操：安装 nfs 共享服务，启动服务并设置开机自启，查看 nfs 服务状态](#安装-nfs-共享服务启动服务并设置开机自启查看-nfs-服务状态)

[实操：修改 vsftpd 配置，禁止匿名用户登录，仅允许系统用户登录](#修改-vsftpd-配置禁止匿名用户登录仅允许系统用户登录)

[实操：使用 yum 卸载 tree 软件，清理 yum 多余缓存文件](#使用-yum-卸载-tree-软件清理-yum-多余缓存文件)

[防火墙永久放行https服务，重载规则并查看放行列表](/Linux_Practice_Exercises_02#防火墙永久放行https服务重载规则并查看放行列表)