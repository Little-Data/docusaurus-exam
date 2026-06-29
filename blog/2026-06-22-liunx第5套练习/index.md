---
slug: Linux_Practice_Exercises_05
title: Liunx 第5套练习
tags: [Linux网络操作系统]
description: Liunx 第5套练习
hide_table_of_contents: false
date: 2026-06-22T08:02
last_update:
  date: 2026-06-25T00:16
unlisted: false
---

Liunx 第5套练习。

相关图书：《Linux网络操作系统项目教程》-中国工信出版集团、人民邮电出版社-杨云-ISBN9787115673602

印次：2025年8月第 1 次

{/* truncate */}

:::warning

以下执行命令之后的输出仅供参考，不一定完全与示例内容一致！

本套试题都在**管理员权限**下操作！
:::

## 在 /home 目录下一次性创建嵌套目录：service/log/backup

```shell
// highlight-next-line
[root@localhost ~]# mkdir -p /home/service/log/backup
[root@localhost ~]# ls -R /home/service/
/home/service/:
log

/home/service/log:
backup

/home/service/log/backup:
```

## 在 /home/service 目录创建 empty.txt 空文件，批量修改该文件权限为600

```shell
// highlight-next-line
[root@localhost ~]# touch /home/service/empty.txt
[root@localhost ~]# ls /home/service/
empty.txt  log
// highlight-next-line
[root@localhost ~]# chmod 600 /home/service/empty.txt
[root@localhost ~]# ls -l /home/service/
总用量 0
-rw-------. 1 root root  0  6月 24 22:57 empty.txt
drwxr-xr-x. 3 root root 20  6月 24 22:56 log
```

600权限为：`-rw-------`

## 将 /etc/hosts 文件强制复制到 /home/service/ 目录，覆盖原有文件不提示

```shell
// highlight-next-line
[root@localhost ~]# cp -f /etc/hosts /home/service/
[root@localhost ~]# ls /home/service/
empty.txt  hosts  log
```

## 查找 /etc 目录下所有后缀为 .conf 的配置文件

```shell
[root@localhost ~]# find /etc -name "*.conf"
/etc/lvm/lvm.conf
/etc/lvm/lvmlocal.conf
/etc/nvme/discovery.conf
/etc/resolv.conf
/etc/dnf/plugins/kpatch.conf
```

## 创建系统运维用户 opsuser，无家目录、不可登录系统

```shell
// highlight-next-line
[root@localhost ~]# useradd -M -s /usr/sbin/nologin opsuser
[root@localhost ~]# id opsuser
用户id=1001(opsuser) 组id=1001(opsuser) 组=1001(opsuser)
[root@localhost ~]# ls /home/
a123  service
```

`-M` 不创建家目录，`-s` 指定登录 shell 为不可登录终端

## 创建用户组 dev，将 opsuser 用户添加为附属组成员

```shell
// highlight-start
[root@localhost ~]# groupadd dev
[root@localhost ~]# usermod -aG dev opsuser
// highlight-end
[root@localhost ~]# id opsuser
用户id=1001(opsuser) 组id=1001(opsuser) 组=1001(opsuser),1002(dev)
```

## 修改 opsuser 用户密码有效期为30天

```shell
// highlight-next-line
[root@localhost ~]# chage -M 30 opsuser
[root@localhost ~]# chage -l opsuser
最近一次密码修改时间					：6月 24, 2026
密码过期时间					：7月 24, 2026
密码失效时间					：从不
帐户过期时间						：从不
两次改变密码之间相距的最小天数		：0
两次改变密码之间相距的最大天数		：30
在密码过期之前警告的天数	：7
```

## 彻底删除 opsuser 用户及其所有相关配置文件

```shell
// highlight-next-line
[root@localhost ~]# userdel -r opsuser
userdel：未找到 opsuser 的主目录“/home/opsuser”
[root@localhost ~]# id opsuser
id: “opsuser”：无此用户
```

## 查看系统磁盘整体分区使用情况，显示单位为GB/MB人性化格式

```shell
// highlight-next-line
[root@localhost ~]# df -h
文件系统             容量  已用  可用 已用% 挂载点
devtmpfs             793M     0  793M    0% /dev
tmpfs                826M     0  826M    0% /dev/shm
tmpfs                331M  7.1M  324M    3% /run
/dev/mapper/cs-root   17G  5.0G   12G   30% /
/dev/nvme0n1p1       960M  440M  521M   46% /boot
tmpfs                166M   52K  166M    1% /run/user/42
tmpfs                166M  104K  165M    1% /run/user/1000
[root@localhost ~]# df
文件系统               1K-块    已用     可用 已用% 挂载点
devtmpfs              811160       0   811160    0% /dev
tmpfs                 845220       0   845220    0% /dev/shm
tmpfs                 338092    7240   330852    3% /run
/dev/mapper/cs-root 17756160 5205964 12550196   30% /
/dev/nvme0n1p1        983040  450084   532956   46% /boot
tmpfs                 169044      52   168992    1% /run/user/42
tmpfs                 169044     104   168940    1% /run/user/1000
```

## 将 /dev/sdc1 分区永久挂载至 /backup 目录，开机自动挂载，无报错挂载

```shell
[root@localhost ~]# mkdir -p /backup
[root@localhost ~]# mount /dev/sr0 /backup
mount: /backup: WARNING: source write-protected, mounted read-only.
[root@localhost ~]# echo "/dev/sr0 /backup ext4 defaults 0 0" >> /etc/fstab
[root@localhost ~]# mount -a
[root@localhost ~]# 
```

:::warning
原题中的 `/dev/sdc1` 不存在，需换为 `/dev/sr0`，执行命令前确保已挂载 ISO 文件！
:::

## 查看系统所有进程，筛选包含 java 的进程信息

```shell
[root@localhost ~]# ps aux | grep java
root        4044  0.0  0.1 221696  2524 pts/1    S+   23:18   0:00 grep --color=auto java
```

## 查看当前系统所有后台守护进程，统计进程总个数

```shell
[root@localhost ~]# ps -ef | wc -l
352
```

## 查看系统路由表信息，写出完整操作命令

```shell
[root@localhost ~]# route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         192.168.42.2    0.0.0.0         UG    100    0        0 ens160
192.168.42.0    0.0.0.0         255.255.255.0   U     100    0        0 ens160
```

## 永久配置网卡参数：IP=192.168.60.60/24、网关=192.168.60.1、DNS1=223.5.5.5、DNS2=114.114.115.115，重启网络并验证

参考 [Liunx 第2套纯实操练习 永久配置网卡静态-ip网关dns设置开机自启并验证](/Linux_Practice_Exercises_02#永久配置网卡静态-ip网关dns设置开机自启并验证) 部分

## 临时设置系统主机名为 linux-test，临时生效无需重启

```shell
[root@localhost ~]# hostname linux-test
```
执行后重新打开终端

## 使用域名解析命令，解析 `www.baidu.com` 的IP地址

```shell
[root@linux-test ~]# nslookup www.baidu.com
Server:		192.168.42.2
Address:	192.168.42.2#53

Non-authoritative answer:
www.baidu.com	canonical name = www.a.shifen.com.
Name:	www.a.shifen.com
Address: 157.148.69.186
Name:	www.a.shifen.com
Address: 157.148.69.151
Name:	www.a.shifen.com
Address: 2408:8756:c52:1a18:0:ff:b030:7606
Name:	www.a.shifen.com
Address: 2408:8756:c52:15df:0:ff:b073:d207
```

## 安装 ftp 服务 vsftpd，设置开机自启，查看服务监听端口

```shell
[root@linux-test ~]# yum install -y vsftpd
[root@linux-test ~]# systemctl enable --now vsftpd
Created symlink /etc/systemd/system/multi-user.target.wants/vsftpd.service → /usr/lib/systemd/system/vsftpd.service.
[root@linux-test ~]# netstat -tulpn | grep ftp
tcp6       0      0 :::21                   :::*                    LISTEN      33785/vsftpd
```

:::warning
`netstat -an` 已变为 `netstat -tulpn`
:::

## 修改 httpd 网站默认访问端口为 8090，重启服务并测试端口监听

```shell
[root@linux-test ~]# yum install -y httpd
[root@linux-test ~]# nano /etc/httpd/conf/httpd.conf
```

`httpd.conf` 文件内容：

```ini
#
# This is the main Apache HTTP server configuration file.  It contains the
# configuration directives that give the server its instructions.
# See <URL:http://httpd.apache.org/docs/2.4/> for detailed information.
# In particular, see 
# <URL:http://httpd.apache.org/docs/2.4/mod/directives.html>
# for a discussion of each configuration directive.
#
# See the httpd.conf(5) man page for more information on this configuration,
# and httpd.service(8) on using and configuring the httpd service.
#
# Do NOT simply read the instructions in here without understanding
# what they do.  They're here only as hints or reminders.  If you are unsure
# consult the online docs. You have been warned.  
#
# Configuration and logfile names: If the filenames you specify for many
# of the server's control files begin with "/" (or "drive:/" for Win32), the
# server will use that explicit path.  If the filenames do *not* begin
# with "/", the value of ServerRoot is prepended -- so 'log/access_log'
# with ServerRoot set to '/www' will be interpreted by the
# server as '/www/log/access_log', where as '/log/access_log' will be
# interpreted as '/log/access_log'.

#
# ServerRoot: The top of the directory tree under which the server's
# configuration, error, and log files are kept.
#
# Do not add a slash at the end of the directory path.  If you point
# ServerRoot at a non-local disk, be sure to specify a local disk on the
# Mutex directive, if file-based mutexes are used.  If you wish to share the
# same ServerRoot for multiple httpd daemons, you will need to change at
# least PidFile.
#
ServerRoot "/etc/httpd"

#
# Listen: Allows you to bind Apache to specific IP addresses and/or
# ports, instead of the default. See also the <VirtualHost>
# directive.
#
# Change this to Listen on a specific IP address, but note that if
# httpd.service is enabled to run at boot time, the address may not be
# available when the service starts.  See the httpd.service(8) man
# page for more information.
#
#Listen 12.34.56.78:80
// highlight-next-line
Listen 8090
```

:::warning
执行额外的命令，添加 8090 到 http 允许端口：`semanage port -a -t http_port_t -p tcp 8090`

不添加则在下一步启动时报错！
:::

```shell
[root@linux-test ~]# systemctl restart httpd
[root@linux-test ~]# netstat -tulpn | grep 8090
tcp6       0      0 :::8090                   :::*                    LISTEN      34463/httpd 
```

## 查询系统中是否已安装 vsftpd 软件，写出查询命令

```shell
[root@linux-test ~]# yum list installed | grep vsftpd
vsftpd.x86_64                                    3.0.5-8.el9                      @appstream
```

## 临时开启防火墙，放行 http 服务端口，设置永久放行

```shell
[root@linux-test ~]# systemctl start firewalld
[root@linux-test ~]# firewall-cmd --add-service=http --permanent
success
[root@linux-test ~]# firewall-cmd --reload
success
```

## 编写脚本，输出当前系统日期与时间

```shell
[root@localhost ~]# nano date.sh
```

`date.sh` 文件内容：

```shell
date
```

继续执行：

```shell
[root@localhost ~]# chmod +x date.sh
[root@localhost ~]# ./date.sh
2026年 06月 24日 星期三 23:57:09 CST
```

## 编写脚本，判断 /home/service 目录是否存在，不存在则创建目录

```shell
[root@localhost ~]# nano service.sh
```

`service.sh` 文件内容：

```shell
if [ ! -d /home/service ];then
mkdir -p /home/service
fi
```

:::warning
注意空格！
:::

继续执行：

```shell
[root@localhost ~]# chmod +x service.sh
[root@localhost ~]# ./service.sh
```

## 编写脚本，批量创建 file10-file15 六个文件

```shell
[root@localhost ~]# nano file.sh
```

`file.sh` 文件内容：

```shell
for i in {10..15}
do
touch /tmp/file$i
done
```

继续执行：

```shell
[root@localhost ~]# chmod +x file.sh
[root@localhost ~]# ./file.sh
```

## 编写脚本，判断系统是否开机自启 httpd 服务，输出开启或关闭状态

```shell
[root@localhost ~]# nano httpd.sh
```

`httpd.sh` 文件内容：

```shell
status=`systemctl is-enabled httpd`
echo "httpd开机自启状态：$status"
```

:::warning
<code>``</code>不是 <code>''</code> 单引号！
:::

继续执行：

```shell
[root@localhost ~]# chmod +x httpd.sh
[root@localhost ~]# ./httpd.sh
httpd开机自启状态：disabled
```

## 填空

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>1. 上机实操在 /home 目录下一次性创建嵌套目录 service/log/backup 的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    mkdir -p /home/service/log/backup

    [实操：在 /home 目录下一次性创建嵌套目录：service/log/backup](#在-home-目录下一次性创建嵌套目录servicelogbackup)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>2. 上机实操在 /home/service 目录创建 empty.txt 空文件的命令是</Wenben>
    <Ansinput />
    <Jiexi>
    touch /home/service/empty.txt

    [实操：在 /home/service 目录创建 empty.txt 空文件，批量修改该文件权限为600](#在-homeservice-目录创建-emptytxt-空文件批量修改该文件权限为600)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>3. 上机实操将 /home/service/empty.txt 文件权限修改为 600 的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    chmod 600 /home/service/empty.txt

    [实操：在 /home/service 目录创建 empty.txt 空文件，批量修改该文件权限为600](#在-homeservice-目录创建-emptytxt-空文件批量修改该文件权限为600)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>4. 上机实操强制复制 /etc/hosts 文件到 /home/service/ 目录、覆盖不提示的命令是</Wenben>
    <Ansinput />
    <Jiexi>
    cp -f /etc/hosts /home/service/ 

    [实操：将 /etc/hosts 文件强制复制到 /home/service/ 目录，覆盖原有文件不提示](#将-etchosts-文件强制复制到-homeservice-目录覆盖原有文件不提示)
     </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>5. 上机实操查找 /etc 目录下所有后缀为 .conf 的配置文件的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    find /etc -name "\*.conf"

    [实操：查找 /etc 目录下所有后缀为 .conf 的配置文件](#查找-etc-目录下所有后缀为-conf-的配置文件)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>6. 上机实操人性化格式查看系统磁盘整体分区使用情况的命令是</Wenben>
    <Ansinput />
    <Jiexi>
    df -h

    [实操：查看系统磁盘整体分区使用情况，显示单位为GB/MB人性化格式](#查看系统磁盘整体分区使用情况显示单位为gbmb人性化格式)
     </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>7. 上机实操筛选系统中所有包含 java 的进程信息的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    ps aux | grep java

    [实操：查看系统所有进程，筛选包含 java 的进程信息](#查看系统所有进程筛选包含-java-的进程信息)
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>8. 上机实操查看系统所有后台守护进程并统计总个数的命令是</Wenben>
    <Ansinput />
    <Jiexi> 
    ps -ef | wc -l

    [实操：查看当前系统所有后台守护进程，统计进程总个数](#查看当前系统所有后台守护进程统计进程总个数)
    </Jiexi>
  </Workitem>
</Workpaper>

## 单选

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. 上机实操测试，用于创建无家目录、不可登录系统的运维用户的参数组合是</Wenben>
    <Xuanxiang ans>-M -s /usr/sbin/nologin</Xuanxiang>
    <Xuanxiang>-aG -s</Xuanxiang>
    <Xuanxiang>-r -M</Xuanxiang>
    <Xuanxiang>-M -g</Xuanxiang>
    <Jiexi>[实操：创建系统运维用户 opsuser，无家目录、不可登录系统](#创建系统运维用户-opsuser无家目录不可登录系统)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. 上机实操测试，用于创建用户组的专属命令是</Wenben>
    <Xuanxiang>useradd</Xuanxiang>
    <Xuanxiang ans>groupadd</Xuanxiang>
    <Xuanxiang>usermod</Xuanxiang>
    <Xuanxiang>groupmod</Xuanxiang>
    <Jiexi>[实操：创建用户组 dev，将 opsuser 用户添加为附属组成员](#创建用户组-dev将-opsuser-用户添加为附属组成员)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>3. 上机实操用户权限管理，用于将用户添加为附属组成员的参数是</Wenben>
    <Xuanxiang>-g</Xuanxiang>
    <Xuanxiang ans>-aG</Xuanxiang>
    <Xuanxiang>-M</Xuanxiang>
    <Xuanxiang>-s</Xuanxiang>
    <Jiexi>[实操：创建用户组 dev，将 opsuser 用户添加为附属组成员](#创建用户组-dev将-opsuser-用户添加为附属组成员)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>4. 上机实操用户管理，用于修改用户密码有效期的命令是</Wenben>
    <Xuanxiang ans>chage</Xuanxiang>
    <Xuanxiang>change</Xuanxiang>
    <Xuanxiang>passwd</Xuanxiang>
    <Xuanxiang>usermod</Xuanxiang>
    <Jiexi>[实操：修改 opsuser 用户密码有效期为30天](#修改-opsuser-用户密码有效期为30天)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>5. 上机实操磁盘挂载，实现分区永久挂载、开机自动生效需修改的文件是</Wenben>
    <Xuanxiang>/etc/profile</Xuanxiang>
    <Xuanxiang ans>/etc/fstab</Xuanxiang>
    <Xuanxiang>/etc/passwd</Xuanxiang>
    <Xuanxiang>/etc/group</Xuanxiang>
    <Jiexi>[实操：将 /dev/sdc1 分区永久挂载至 /backup 目录，开机自动挂载，无报错挂载](#将-devsdc1-分区永久挂载至-backup-目录开机自动挂载无报错挂载)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>6. 上机实操网络运维，用于查看系统路由表信息的命令是</Wenben>
    <Xuanxiang ans>route -n</Xuanxiang>
    <Xuanxiang>ip addr</Xuanxiang>
    <Xuanxiang>ping</Xuanxiang>
    <Xuanxiang>netstat</Xuanxiang>
    <Jiexi>[实操：查看系统路由表信息，写出完整操作命令](#查看系统路由表信息写出完整操作命令)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>7. 上机实操软件运维，查询系统已安装指定软件的命令是</Wenben>
    <Xuanxiang>yum install</Xuanxiang>
    <Xuanxiang ans>yum list installed | grep</Xuanxiang>
    <Xuanxiang>yum remove</Xuanxiang>
    <Xuanxiang>systemctl status</Xuanxiang>
    <Jiexi>[实操：查询系统中是否已安装 vsftpd 软件，写出查询命令](#查询系统中是否已安装-vsftpd-软件写出查询命令)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>8. 上机实操域名解析，用于解析域名对应IP地址的命令是</Wenben>
    <Xuanxiang>ping</Xuanxiang>
    <Xuanxiang ans>nslookup</Xuanxiang>
    <Xuanxiang>route</Xuanxiang>
    <Xuanxiang>df</Xuanxiang>
    <Jiexi>[实操：使用域名解析命令，解析 www.baidu.com 的IP地址](#使用域名解析命令解析-wwwbaiducom-的ip地址)</Jiexi>
  </Workitem>
</Workpaper>

## 判断

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. mkdir -p命令可一次性创建多层嵌套目录，无需逐层创建</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. chmod 600 命令可设置文件仅所有者拥有读写权限，其他用户无任何权限</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>3. userdel -r 命令可以彻底删除用户及用户相关的所有配置文件与家目录</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>4. 写入 /etc/fstab 的挂载配置，执行 mount -a 命令可直接检测并生效，无需重启系统</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>5. ps -ef | wc -l 命令可以精准统计系统所有后台守护进程的总个数</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>6. 修改网卡配置文件后，无需重启网络服务，静态 IP 配置可自动永久生效</Wenben>
    <Xuanxiang>对</Xuanxiang>
    <Xuanxiang ans>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>7. systemctl enable --now 命令可同时实现服务启动与设置开机自启</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>8. 临时修改主机名的 hostname 命令，重启系统后配置会自动失效</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
</Workpaper>

## 实操简答

1. 上机实操Linux高级文件目录全套操作，完成嵌套目录创建、权限修改、强制复制、文件查找全过程，写出实操步骤与运行现象

[实操：在 /home 目录下一次性创建嵌套目录：service/log/backup](#在-home-目录下一次性创建嵌套目录servicelogbackup)

[实操：在 /home/service 目录创建 empty.txt 空文件，批量修改该文件权限为600](#在-homeservice-目录创建-emptytxt-空文件批量修改该文件权限为600)

[实操：将 /etc/hosts 文件强制复制到 /home/service/ 目录，覆盖原有文件不提示](#将-etchosts-文件强制复制到-homeservice-目录覆盖原有文件不提示)

[实操：查找 /etc 目录下所有后缀为 .conf 的配置文件](#查找-etc-目录下所有后缀为-conf-的配置文件)

2. 上机实操系统用户精细化运维，完成无登录用户创建、用户组创建、附属组添加、密码有效期修改、用户彻底删除全套操作，写出实操步骤和实测效果

[实操：创建系统运维用户 opsuser，无家目录、不可登录系统](#创建系统运维用户-opsuser无家目录不可登录系统)

[实操：创建用户组 dev，将 opsuser 用户添加为附属组成员](#创建用户组-dev将-opsuser-用户添加为附属组成员)

[实操：修改 opsuser 用户密码有效期为30天](#修改-opsuser-用户密码有效期为30天)

[实操：彻底删除 opsuser 用户及其所有相关配置文件](#彻底删除-opsuser-用户及其所有相关配置文件)

3. 上机实操 vsftpd 服务安装、自启配置、端口查看、软件查询全套运维操作，写出实操流程与服务运行效果

[实操：安装 ftp 服务 vsftpd，设置开机自启，查看服务监听端口](#安装-ftp-服务-vsftpd设置开机自启查看服务监听端口)

[实操：查询系统中是否已安装 vsftpd 软件，写出查询命令](#查询系统中是否已安装-vsftpd-软件写出查询命令)

## 实操复现

1. Linux磁盘与进程管理实操复现


上机打开 CentOS 终端，独立完成全套实操：

①人性化查看系统整体磁盘分区使用情况；

②永久挂载 /dev/sdc1 分区至 /backup 目录并校验配置；

③查看系统所有进程并筛选java进程；

④统计系统后台进程总数

留存每一步实操截图。请详细写出实操步骤、对应命令及实操结果

[实操：查看系统磁盘整体分区使用情况，显示单位为GB/MB人性化格式](#查看系统磁盘整体分区使用情况显示单位为gbmb人性化格式)

[实操：将 /dev/sdc1 分区永久挂载至 /backup 目录，开机自动挂载，无报错挂载](#将-devsdc1-分区永久挂载至-backup-目录开机自动挂载无报错挂载)

[实操：查看系统所有进程，筛选包含 java 的进程信息](#查看系统所有进程筛选包含-java-的进程信息)

[实操：查看当前系统所有后台守护进程，统计进程总个数](#查看当前系统所有后台守护进程统计进程总个数)

2. Linux 静态网络配置与域名运维实操复现

上机基于 CentOS 系统，独立完成全套实操：

①编辑网卡配置文件，配置永久静态IP、网关、双DNS；

②重启网络服务并验证IP生效；

③临时修改系统主机名；

④解析百度域名IP、查看系统路由表

完整留存实操与复测截图。请详细写出实操步骤、对应命令及实操结果

[实操：永久配置网卡参数：IP=192.168.60.60/24、网关=192.168.60.1、DNS1=223.5.5.5、DNS2=114.114.115.115，重启网络并验证](#永久配置网卡参数ip192168606024网关192168601dns1223555dns2114114115115重启网络并验证)

[实操：临时设置系统主机名为 linux-test，临时生效无需重启](#临时设置系统主机名为-linux-test临时生效无需重启)

[实操：使用域名解析命令，解析 www.baidu.com 的IP地址](#使用域名解析命令解析-wwwbaiducom-的ip地址)

## 实操项目

该部分在本页实操部分已有对应，自行查找对应题目的答案。