---
slug: Linux_Practice_Exercises_03
title: Liunx 第3套练习
tags: [Linux网络操作系统]
description: Liunx 第3套练习
hide_table_of_contents: false
date: 2026-06-22T08:00
last_update:
  date: 2026-06-29T23:07
unlisted: false
---

Liunx 第3套练习。

相关图书：《Linux网络操作系统项目教程》-中国工信出版集团、人民邮电出版社-杨云-ISBN9787115673602

印次：2025年8月第 1 次

{/* truncate */}

:::warning

以下执行命令之后的输出仅供参考，不一定完全与示例内容一致！

本套试题都在**管理员权限**下操作！
:::

## 在 /usr/local 目录下一次性创建层级目录：tools/soft/run

```shell
// highlight-next-line
[root@localhost ~]# mkdir -p /usr/local/tools/soft/run
[root@localhost ~]# ls /usr/local/tools/soft/
run
```

## 在 /usr/local/tools 目录创建空文件 config.ini，将文件权限设置为700

```shell
// highlight-start
[root@localhost ~]# touch /usr/local/tools/config.ini
[root@localhost ~]# chmod 700 /usr/local/tools/config.ini
// highlight-end
[root@localhost ~]# ls -l /usr/local/tools/
总用量 0
-rwx------. 1 root root  0  6月 24 15:33 config.ini
drwxr-xr-x. 3 root root 17  6月 24 15:32 soft
```

700权限为 `-rwx------`

## 将 /etc/profile 文件复制到 /usr/local/tools/ 目录，保留文件属性

```shell
// highlight-next-line
[root@localhost ~]# cp -a /etc/profile /usr/local/tools/
[root@localhost ~]# ls -l /usr/local/tools/
总用量 4
-rwx------. 1 root root    0  6月 24 15:33 config.ini
-rw-r--r--. 1 root root 1899  2月  7  2024 profile
drwxr-xr-x. 3 root root   17  6月 24 15:32 soft
[root@localhost ~]# ls -l /etc/profile
-rw-r--r--. 1 root root 1899  2月  7  2024 /etc/profile
```

## 递归强制删除 /home/exam 整个目录及内部所有文件，无提示删除

```shell
// highlight-next-line
[root@localhost ~]# rm -rf /home/exam
[root@localhost ~]# ls /home/
a123456789
```

## 创建系统用户 sysuser，该用户无登录shell，无家目录

```shell
// highlight-next-line
[root@localhost ~]# useradd -M -s /sbin/nologin sysuser
[root@localhost ~]# id sysuser
用户id=1001(sysuser) 组id=1001(sysuser) 组=1001(sysuser)
[root@localhost ~]# grep sysuser /etc/passwd
sysuser:x:1001:1001::/home/sysuser:/sbin/nologin
[root@localhost ~]# ls /home
a123456789
```

`-M` 不创建家目录，`-s` 指定登录 shell 为不可登录终端

## 创建用户组 netgroup，将 student 用户加入该附属组

```shell
[root@localhost ~]# useradd student
// highlight-start
[root@localhost ~]# groupadd netgroup
[root@localhost ~]# usermod -aG netgroup student
// highlight-end
[root@localhost ~]# id student
用户id=1002(student) 组id=1003(student) 组=1003(student),1002(netgroup)
```

:::warning
要先新建用户 `useradd student`
:::

## 修改 sysuser 用户密码为 Sys@2026，强制用户下次登录必须修改密码

```shell
// highlight-next-line
[root@localhost ~]# echo Sys@2026 | passwd --stdin sysuser
更改用户 sysuser 的密码 。
passwd：所有的身份验证令牌已经成功更新。
// highlight-next-line
[root@localhost ~]# chage -d 0 sysuser
[root@localhost ~]# chage -l sysuser
最近一次密码修改时间					：密码必须更改
密码过期时间					：密码必须更改
密码失效时间					：密码必须更改
帐户过期时间						：从不
两次改变密码之间相距的最小天数		：0
两次改变密码之间相距的最大天数		：99999
在密码过期之前警告的天数	：7
```

## 查看 student 用户的 UID、GID 及所属所有组信息

```shell
[root@localhost ~]# id student
用户id=1002(student) 组id=1003(student) 组=1003(student),1002(netgroup)
```

## 查看系统块设备信息、查看当前系统所有挂载点详细信息

```shell
// highlight-next-line
[root@localhost ~]# lsblk
NAME        MAJ:MIN RM SIZE RO TYPE MOUNTPOINTS
sda           8:0    0  20G  0 disk 
├─sda1        8:1    0   1G  0 part /boot
└─sda2        8:2    0  19G  0 part 
  ├─cs-root 253:0    0  17G  0 lvm  /
  └─cs-swap 253:1    0   2G  0 lvm  [SWAP]
sr0          11:0    1  51M  0 rom  
// highlight-next-line
[root@localhost ~]# mount
proc on /proc type proc (rw,nosuid,nodev,noexec,relatime)
sysfs on /sys type sysfs (rw,nosuid,nodev,noexec,relatime,seclabel)
devtmpfs on /dev type devtmpfs (rw,nosuid,seclabel,size=828456k,nr_inodes=207114,mode=755,inode64)
securityfs on /sys/kernel/security type securityfs (rw,nosuid,nodev,noexec,relatime)
tmpfs on /dev/shm type tmpfs (rw,nosuid,nodev,seclabel,inode64)
```

## 临时挂载光盘镜像到 /media/cdrom，只读挂载，验证挂载成功

```shell
// highlight-start
[root@localhost ~]# mkdir -p /media/cdrom
[root@localhost ~]# mount -r /dev/cdrom /media/cdrom
// highlight-end
[root@localhost ~]# ls /media/cdrom/
EFI  images  isolinux  LICENSE
```

:::warning
要先挂载 ISO 文件！
:::

## 动态监控系统进程，筛选出 cpu 占用最高的进程

```shell
[root@localhost ~]# top
top - 15:47:09 up 25 min,  2 users,  load average: 0.00, 0
Tasks: 202 total,   1 running, 201 sleeping,   0 stopped, 
%Cpu(s):  0.7 us,  0.0 sy,  0.0 ni, 99.0 id,  0.0 wa,  0.3
MiB Mem :   1683.6 total,    266.6 free,    945.7 used,   
MiB Swap:   2048.0 total,   2047.5 free,      0.5 used.   

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU 
   2749 a123456+  20   0 3685892 382832 145284 S   0.7 
   3952 root      20   0  225800   4276   3480 R   0.3 
      1 root      20   0  109368  17272  11180 S   0.0 
      2 root      20   0       0      0      0 S   0.0 
      3 root      20   0       0      0      0 S   0.0 
      4 root       0 -20       0      0      0 I   0.0 
```
按 <kbd>Q</kbd> 退出

## 查询系统中所有包含 ssh 的进程，优雅终止所有 ssh 相关进程

```shell
// highlight-next-line
[root@localhost ~]# ps aux | grep ssh | grep -v grep
root        1120  0.0  0.5  14408  8760 ?        Ss   15:22   0:00 sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups
// highlight-next-line
[root@localhost ~]# killall sshd
[root@localhost ~]# ps aux | grep ssh | grep -v grep
```

## 查看网卡详细信息、MAC 地址、IP 地址及网络接口状态

```shell
[root@localhost ~]# ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: enp0s3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 08:00:27:91:96:b4 brd ff:ff:ff:ff:ff:ff
    inet 10.0.2.15/24 brd 10.0.2.255 scope global dynamic noprefixroute enp0s3
       valid_lft 84680sec preferred_lft 84680sec
    inet6 fd17:625c:f037:2:a00:27ff:fe91:96b4/64 scope global dynamic noprefixroute 
       valid_lft 86390sec preferred_lft 14390sec
    inet6 fe80::a00:27ff:fe91:96b4/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
```

## 永久配置网卡参数：IP地址192.168.30.10/24、网关192.168.30.1、DNS1=223.5.5.5，开机自动启用网卡，重启网卡生效

参考 [Liunx 第2套纯实操练习 永久配置网卡静态-ip网关dns设置开机自启并验证](/Linux_Practice_Exercises_02#永久配置网卡静态-ip网关dns设置开机自启并验证) 部分

:::danger
完成该题后请将配置恢复成未修改前的样子，否则后续题目无法正常完成！
:::

## 永久修改主机名为 server-exam，退出重新登录生效并查看主机名

```shell
[root@localhost ~]# hostnamectl set-hostname server-exam
```

关闭终端后重新打开，继续命令

```shell
[root@server-exam ~]# hostname
server-exam
```

## 清空系统路由表，添加静态路由，访问 192.168.40.0 网段走网关 192.168.30.1

参考 [Liunx 第2套纯实操练习 永久配置网卡静态-ip网关dns设置开机自启并验证](/Linux_Practice_Exercises_02#永久配置网卡静态-ip网关dns设置开机自启并验证) 部分

要修改的部分：

```ini
[ipv4]

method=manual
addresses=192.168.40.0/24
gateway=192.168.30.1
```

:::danger
完成该题后请将配置恢复成未修改前的样子，否则后续题目无法正常完成！
:::

## 安装 telnet 服务，启动服务、设置开机自启，测试本机 telnet 连通性

```shell
// highlight-start
[root@server-exam ~]# yum install -y telnet-server
[root@server-exam ~]# systemctl start telnet.socket
[root@server-exam ~]# systemctl enable telnet.socket
// highlight-end
Created symlink /etc/systemd/system/sockets.target.wants/telnet.socket → /usr/lib/systemd/system/telnet.socket.
[root@server-exam ~]# systemctl status telnet.socket
● telnet.socket - Telnet Server Activation Socket
     Loaded: loaded (/usr/lib/systemd/system/telnet.socket; enabled>
     Active: active (listening) since Wed 2026-06-24 16:00:12 CST; >
      Until: Wed 2026-06-24 16:00:12 CST; 46s ago
       Docs: man:telnetd(8)
     Listen: [::]:23 (Stream)
   Accepted: 0; Connected: 0;
      Tasks: 0 (limit: 10355)
     Memory: 8.0K (peak: 256.0K)
        CPU: 461us
     CGroup: /system.slice/telnet.socket
```

## 重置 httpd 默认首页，自定义网页内容为“考试专用服务页面”，重启服务验证

```shell
[root@server-exam ~]# yum install httpd -y
// highlight-start
[root@server-exam ~]# echo "考试专用服务页面" > /var/www/html/index.html
[root@server-exam ~]# systemctl restart httpd
// highlight-end
```

执行命令之后，打开浏览器，访问 `http://127.0.0.1` ，页面出现“考试专用服务页面”即完成

:::warning
要先安装 httpd ：`yum install httpd -y`
:::

## 搭建本地 YUM 源，禁用所有网络 yum 源，测试 yum 查询可用软件

```shell
[root@localhost ~]# mkdir -p /mnt/cdrom
[root@localhost ~]# mount /dev/cdrom /mnt/cdrom
mount: /mnt/cdrom: WARNING: source write-protected, mounted read-only.
[root@localhost ~]# mkdir -p /etc/yum.repos.d/bak
[root@localhost ~]# mv /etc/yum.repos.d/*.repo /etc/yum.repos.d/bak/
[root@localhost ~]# nano /etc/yum.repos.d/localyum.repo
```

`localyum.repo` 文件内容：

```ini
[localyum]
name=local source
baseurl=file:///mnt/cdrom/BaseOS
enabled=1
gpgcheck=0
```

继续执行命令：

```shell
[root@localhost ~]# yum clean all && yum makecache
46 个文件已删除
local source                        141 MB/s | 2.2 MB     00:00    
元数据缓存已建立。
[root@localhost ~]# yum list | head -20
上次元数据过期检查：0:00:09 前，执行于 2026年06月24日 星期三 16时39分27秒。
已安装的软件包
ModemManager.x86_64                                1.20.2-1.el9                     @baseos       
ModemManager-glib.x86_64                           1.20.2-1.el9                     @baseos       
NetworkManager.x86_64                              1:1.54.4-1.el9                   @baseos       
NetworkManager-adsl.x86_64                         1:1.54.4-1.el9                   @baseos       
NetworkManager-bluetooth.x86_64                    1:1.54.4-1.el9                   @baseos       
NetworkManager-config-server.noarch                1:1.54.4-1.el9                   @baseos       
NetworkManager-libnm.x86_64                        1:1.54.4-1.el9                   @baseos       
NetworkManager-team.x86_64                         1:1.54.4-1.el9                   @baseos       
NetworkManager-tui.x86_64                          1:1.54.4-1.el9                   @baseos       
NetworkManager-wifi.x86_64                         1:1.54.4-1.el9                   @baseos       
NetworkManager-wwan.x86_64                         1:1.54.4-1.el9                   @baseos       
PackageKit.x86_64                                  1.2.6-2.el9                      @appstream    
PackageKit-command-not-found.x86_64                1.2.6-2.el9                      @appstream    
PackageKit-glib.x86_64                             1.2.6-2.el9                      @appstream    
PackageKit-gstreamer-plugin.x86_64                 1.2.6-2.el9                      @appstream    
PackageKit-gtk3-module.x86_64                      1.2.6-2.el9                      @appstream    
aardvark-dns.x86_64                                2:1.17.0-1.el9                   @appstream    
abattis-cantarell-fonts.noarch                     0.301-4.el9                      @appstream    
```

:::warning
执行命令前要挂载安装系统时的 ISO 镜像！
:::

:::danger
完成该题后请恢复未修改时的配置，否则影响后续题目操作！

删除自己添加的 `localyum.repo` 文件：`rm -f /etc/yum.repos.d/localyum.repo`

恢复原有文件：`mv /etc/yum.repos.d/bak/*.repo /etc/yum.repos.d/`

重建软件列表： `yum clean all && yum makecache`
:::

## 查询 vsftpd 服务状态，关闭开机自启，禁止外网访问 ftp 服务端口

```shell
[root@localhost ~]# yum install vsftpd -y
// highlight-start
[root@localhost ~]# systemctl disable vsftpd
[root@localhost ~]# systemctl stop vsftpd
[root@localhost ~]# systemctl status vsftpd
// highlight-end
○ vsftpd.service - Vsftpd ftp daemon
     Loaded: loaded (/usr/lib/systemd/system/vsftpd.service; disabl>
     Active: inactive (dead)
```

:::warning
要先安装 vsftpd ：`yum install vsftpd -y`
:::

## 编写脚本，输出当前系统的系统版本信息

```shell
[root@localhost ~]# nano system-version.sh
```

`system-version.sh` 文件内容：

```shell
cat /etc/redhat-release
```

继续执行：

```shell
[root@localhost ~]# chmod +x system-version.sh
[root@localhost ~]# ./system-version.sh
CentOS Stream release 9
```

## 编写脚本，判断 /tmp 目录是否为目录文件，是则输出“目录正常”

```shell
[root@localhost ~]# nano check-tmp.sh
```

`check-tmp.sh` 文件内容：

```shell
if [ -d /tmp ];then
echo "目录正常"
fi
```

:::warning
注意空格！
:::

继续执行：

```shell
[root@localhost ~]# chmod +x check-tmp.sh
[root@localhost ~]# ./check-tmp.sh
目录正常
```

## 编写脚本，批量创建 user02-user04 三个普通用户

```shell
[root@localhost ~]# nano batch-user2.sh
```

`batch-user2.sh` 文件内容：

```shell
for i in {02..04}
do
useradd user$i
done
```

继续执行：

```shell
[root@localhost ~]# chmod +x batch-user2.sh
[root@localhost ~]# ./batch-user2.sh
[root@localhost ~]# id user02
```

## 编写脚本，统计当前系统进程总数量并打印输出

```shell
[root@localhost ~]# nano proc-count.sh
```

`proc-count.sh` 文件内容：

```shell
pro_num=`ps aux | wc -l`
echo "当前系统进程总数：$pro_num"
```

:::warning
<code>``</code>不是 <code>''</code> 单引号！
:::

继续执行：

```shell
[root@localhost ~]# chmod +x proc-count.sh
[root@localhost ~]# ./proc-count.sh
当前系统进程总数：206
```

## 填空

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>1. 上机实操在 /usr/local 目录下一次性递归创建层级目录 tools/soft/run 的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    mkdir -p /usr/local/tools/soft/run

    [实操：在 /usr/local 目录下一次性创建层级目录：tools/soft/run](#在-usrlocal-目录下一次性创建层级目录toolssoftrun)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>2. 上机实操在 /usr/local/tools 目录创建空白文件 config.ini 的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    touch /usr/local/tools/config.ini

    [实操：在 /usr/local/tools 目录创建空文件 config.ini，将文件权限设置为700](#在-usrlocaltools-目录创建空文件-configini将文件权限设置为700)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>3. 上机实操将 /usr/local/tools/config.ini 文件权限设置为 700 的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    chmod 700 /usr/local/tools/config.ini

    [实操：在 /usr/local/tools 目录创建空文件 config.ini，将文件权限设置为700](#在-usrlocaltools-目录创建空文件-configini将文件权限设置为700)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>4. 上机实操保留文件所有属性，将/etc/profile文件复制到/usr/local/tools/目录的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    cp -a /etc/profile /usr/local/tools/

    [实操：将 /etc/profile 文件复制到 /usr/local/tools/ 目录，保留文件属性](#将-etcprofile-文件复制到-usrlocaltools-目录保留文件属性)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>5. 上机实操无提示递归强制删除 /home/exam 整个目录的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    rm -rf /home/exam

    [实操：递归强制删除 /home/exam 整个目录及内部所有文件，无提示删除](#递归强制删除-homeexam-整个目录及内部所有文件无提示删除)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>6. 上机实操查看系统所有块设备信息的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    lsblk

    [实操：查看系统块设备信息、查看当前系统所有挂载点详细信息](#查看系统块设备信息查看当前系统所有挂载点详细信息)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>7. 上机实操查看系统全部挂载点详细信息的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    mount

    [实操：查看系统块设备信息、查看当前系统所有挂载点详细信息](#查看系统块设备信息查看当前系统所有挂载点详细信息)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>8. 上机实操动态监控系统进程、默认按CPU使用率排序的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    top

    [实操：动态监控系统进程，筛选出 cpu 占用最高的进程](#动态监控系统进程筛选出-cpu-占用最高的进程)
    </Jiexi>
  </Workitem>
</Workpaper>

## 单选

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. 上机实操测试，可创建无家目录、无登录 shell 系统用户的参数组合是</Wenben>
    <Xuanxiang ans>-M -s /sbin/nologin</Xuanxiang>
    <Xuanxiang>-m -s /bin/bash</Xuanxiang>
    <Xuanxiang>-u -g /sbin/nologin</Xuanxiang>
    <Xuanxiang>-M -b /bin/bash</Xuanxiang>
    <Jiexi>[实操：创建系统用户 sysuser，该用户无登录shell，无家目录](#创建系统用户-sysuser该用户无登录shell无家目录)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. 上机实操测试，usermod 命令中将用户添加至附属用户组的参数是</Wenben>
    <Xuanxiang>-g</Xuanxiang>
    <Xuanxiang ans>-aG</Xuanxiang>
    <Xuanxiang>-u</Xuanxiang>
    <Xuanxiang>-m</Xuanxiang>
    <Jiexi>[实操：创建用户组 netgroup，将 student 用户加入该附属组](#创建用户组-netgroup将-student-用户加入该附属组)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>3. 上机实操光盘挂载操作，实现光盘只读模式挂载的参数是</Wenben>
    <Xuanxiang>-w</Xuanxiang>
    <Xuanxiang ans>-r</Xuanxiang>
    <Xuanxiang>-o</Xuanxiang>
    <Xuanxiang>-t</Xuanxiang>
    <Jiexi>[实操：临时挂载光盘镜像到 /media/cdrom，只读挂载，验证挂载成功](#临时挂载光盘镜像到-mediacdrom只读挂载验证挂载成功)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>4. 上机实操查看网卡完整 IP、MAC 地址、网络接口状态的命令是</Wenben>
    <Xuanxiang>ping</Xuanxiang>
    <Xuanxiang>route</Xuanxiang>
    <Xuanxiang ans>ip addr</Xuanxiang>
    <Xuanxiang>lsblk</Xuanxiang>
    <Jiexi>[实操：查看网卡详细信息、MAC 地址、IP 地址及网络接口状态](#查看网卡详细信息mac-地址ip-地址及网络接口状态)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>5. 上机实操修改主机名并永久生效的命令是</Wenben>
    <Xuanxiang>hostname</Xuanxiang>
    <Xuanxiang ans>hostnamectl set-hostname</Xuanxiang>
    <Xuanxiang>echo 主机名</Xuanxiang>
    <Xuanxiang>systemctl hostname</Xuanxiang>
    <Jiexi>[实操：永久修改主机名为 server-exam，退出重新登录生效并查看主机名](#永久修改主机名为-server-exam退出重新登录生效并查看主机名)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>6. 上机实操清空 YUM 旧缓存、生成新缓存的组合命令是</Wenben>
    <Xuanxiang ans>yum clean all \&\& yum makecache</Xuanxiang>
    <Xuanxiang>yum remove \&\& yum install</Xuanxiang>
    <Xuanxiang>yum update</Xuanxiang>
    <Xuanxiang>yum list</Xuanxiang>
    <Jiexi>[实操：搭建本地 YUM 源，禁用所有网络 yum 源，测试 yum 查询可用软件](#搭建本地-yum-源禁用所有网络-yum-源测试-yum-查询可用软件)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>7. 上机实操禁止服务开机自启、仅临时关闭服务的命令组合是</Wenben>
    <Xuanxiang>systemctl start、systemctl enable</Xuanxiang>
    <Xuanxiang ans>systemctl stop、systemctl disable</Xuanxiang>
    <Xuanxiang>systemctl status、systemctl restart</Xuanxiang>
    <Xuanxiang>systemctl reload、systemctl daemon-reload</Xuanxiang>
    <Jiexi>[实操：查询 vsftpd 服务状态，关闭开机自启，禁止外网访问 ftp 服务端口](#查询-vsftpd-服务状态关闭开机自启禁止外网访问-ftp-服务端口)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>8. 上机实操 Shell 脚本，可实现循环批量创建用户的语句是</Wenben>
    <Xuanxiang>if 判断语句</Xuanxiang>
    <Xuanxiang ans>for 循环语句</Xuanxiang>
    <Xuanxiang>while 单条件语句</Xuanxiang>
    <Xuanxiang>case 选择语句</Xuanxiang>
    <Jiexi>[实操：编写脚本，批量创建 user02-user04 三个普通用户](#编写脚本批量创建-user02-user04-三个普通用户)</Jiexi>
  </Workitem>
</Workpaper>

## 判断

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. 上机实操 mkdir -p 命令，可以一次性递归创建多层嵌套空目录</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. 上机实操 cp -a 命令复制文件，可完整保留文件权限、属主、修改时间等所有属性</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>3. 上机实操创建用户时，/sbin/nologin 为可交互登录终端 shell</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>4. 上机实操 top 命令，可动态实时监控系统 CPU、内存及进程运行状态</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>5. 网卡配置文件修改后，不重启网络服务，静态 IP 配置也可永久生效</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>6. 上机实操本地 YUM 源搭建，需禁用默认网络 YUM 源才可避免冲突</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>7. 上机实操 chage -d 0 命令，可强制用户下次登录必须修改密码</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>8. Shell脚本赋予执行权限后，方可直接运行脚本文件实现功能</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
</Workpaper>

## 实操简答

1. 上机实操创建无家目录、无登录Shell的系统专用用户，完成用户创建、密码配置、信息验证全套实操，写出实操步骤与运行现象

[实操：创建系统用户 sysuser，该用户无登录shell，无家目录](#创建系统用户-sysuser该用户无登录shell无家目录)

2. 上机实操完整搭建本地 YUM 离线源，完成光盘挂载、禁用网络源、配置本地源、缓存更新、软件测试全套操作，写出实操流程与实测效果

[实操：搭建本地 YUM 源，禁用所有网络 yum 源，测试 yum 查询可用软件](#搭建本地-yum-源禁用所有网络-yum-源测试-yum-查询可用软件)

3. 上机实操查询 SSH 相关进程、优雅终止 sshd 服务进程，写出全套实操步骤、对应命令与进程终止效果

[实操：查询系统中所有包含 ssh 的进程，优雅终止所有 ssh 相关进程](#查询系统中所有包含-ssh-的进程优雅终止所有-ssh-相关进程)

## 实操复现

1. Linux静态网络配置与静态路由实操复现

上机基于CentOS系统独立完成全套网络实操：

①编辑网卡配置文件，永久配置静态IP、网关、DNS并设置网卡开机自启；

②重启网络服务使配置生效；

③清空系统默认路由；

④添加指定网段静态路由；

⑤重启虚拟机复测所有配置永久生效，留存全程实操截图。请详细写出实操步骤、对应命令及实操结果。

[实操：永久配置网卡参数：IP地址192.168.30.10/24、网关192.168.30.1、DNS1=223.5.5.5，开机自动启用网卡，重启网卡生效](#永久配置网卡参数ip地址192168301024网关192168301dns1223555开机自动启用网卡重启网卡生效)

2. Linux服务部署与安全加固实操复现

上机独立完成服务运维与安全加固全套实操：

①安装telnet服务，启动服务并设置开机自启；

②自定义httpd网页默认首页内容，重启服务验证页面更新生效；

③停止vsftpd服务并关闭开机自启，完成安全加固；

④逐项验证所有服务状态，重启系统复测配置，留存全套实操截图。

请详细写出实操步骤、对应命令及实操效果。

[实操：安装 telnet 服务，启动服务、设置开机自启，测试本机 telnet 连通性](#安装-telnet-服务启动服务设置开机自启测试本机-telnet-连通性)

[实操：重置 httpd 默认首页，自定义网页内容为“考试专用服务页面”，重启服务验证](#重置-httpd-默认首页自定义网页内容为考试专用服务页面重启服务验证)

[实操：查询 vsftpd 服务状态，关闭开机自启，禁止外网访问 ftp 服务端口](#查询-vsftpd-服务状态关闭开机自启禁止外网访问-ftp-服务端口)

## 实操项目

该部分在本页实操部分已有对应，自行查找对应题目的答案。