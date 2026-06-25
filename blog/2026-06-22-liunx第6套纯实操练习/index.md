---
slug: Linux_Practice_Exercises_06
title: Liunx 第6套练习
tags: [Linux网络操作系统]
description: Liunx 第6套练习
hide_table_of_contents: false
date: 2026-06-22T08:03
last_update:
  date: 2026-06-25T21:35
unlisted: false
---

Liunx 第6套练习。

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
[root@localhost ~]# touch /usr/soft/nginx/conf/nginx.bak
// highlight-next-line
[root@localhost ~]# chmod 640 /usr/soft/nginx/conf/nginx.bak
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

## 单选

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. 上机实操测试，可保留文件原有属性完成复制的参数是</Wenben>
    <Xuanxiang ans>-p</Xuanxiang>
    <Xuanxiang>-f</Xuanxiang>
    <Xuanxiang>-r</Xuanxiang>
    <Xuanxiang>-a</Xuanxiang>
    <Jiexi>[实操：上机实操保留文件所有属性，将文件备份复制的参数](#上机实操保留文件所有属性将文件备份复制的参数)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. 上机实操测试，640 文件权限对应的权限特征是</Wenben>
    <Xuanxiang ans>所有者读写、所属组读、其他无权限</Xuanxiang>
    <Xuanxiang>所有人读写</Xuanxiang>
    <Xuanxiang>仅所有者读写</Xuanxiang>
    <Xuanxiang>所属组可修改</Xuanxiang>
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
    <Wenben>3. 上机实操用户配置，usermod -g 参数的作用是</Wenben>
    <Xuanxiang>修改附属组</Xuanxiang>
    <Xuanxiang ans>修改用户主组</Xuanxiang>
    <Xuanxiang>修改用户 UID</Xuanxiang>
    <Xuanxiang>修改登录Shell</Xuanxiang>
    <Jiexi>`usermod -g` 用于修改用户主组，`usermod -aG` 用于追加附属组</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>4. 上机实操磁盘查看，df -hT 命令的作用是</Wenben>
    <Xuanxiang>仅查看磁盘容量</Xuanxiang>
    <Xuanxiang ans>查看磁盘容量及文件系统类型</Xuanxiang>
    <Xuanxiang>查看目录占用空间</Xuanxiang>
    <Xuanxiang>查看挂载日志</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>5. 上机实操进程管理，killall 命令的功能是</Wenben>
    <Xuanxiang>结束指定 PID 进程</Xuanxiang>
    <Xuanxiang ans>按进程名批量结束进程</Xuanxiang>
    <Xuanxiang>查看进程状态</Xuanxiang>
    <Xuanxiang>统计进程数量</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>6. 上机实操本地域名解析配置，需要修改的文件是</Wenben>
    <Xuanxiang>/etc/hostname</Xuanxiang>
    <Xuanxiang ans>/etc/hosts</Xuanxiang>
    <Xuanxiang>/etc/fstab</Xuanxiang>
    <Xuanxiang>/etc/passwd</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>7. 上机实操 YUM 运维，yum makecache 命令的作用是</Wenben>
    <Xuanxiang>安装软件</Xuanxiang>
    <Xuanxiang ans>更新本地 YUM 缓存</Xuanxiang>
    <Xuanxiang>卸载软件</Xuanxiang>
    <Xuanxiang>搜索软件包</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>8. 上机实操 Shell 脚本，-f 的文件判断作用是</Wenben>
    <Xuanxiang>判断目录是否存在</Xuanxiang>
    <Xuanxiang ans>判断普通文件是否存在</Xuanxiang>
    <Xuanxiang>判断文件权限</Xuanxiang>
    <Xuanxiang>判断文件大小</Xuanxiang>
    <Jiexi>Shell 脚本中，-f 用于判断普通文件存在，-d 用于判断目录存在</Jiexi>
  </Workitem>
</Workpaper>

## 判断

<Workpaper>
<Workpapersettings />
  <Workitem xuanze>
    <Wenben>1. 上机实操mkdir -p命令，可一次性创建多层不存在的嵌套目录。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
    <Jiexi>[实操：上机实操在 /usr/soft 目录下一次性创建嵌套目录 nginx/conf/logs 的命令](#上机实操在-usrsoft-目录下一次性创建嵌套目录-nginxconflogs-的命令)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>2. 上机实操 chmod 640 权限配置，其他用户无任何文件操作权限。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
    <Jiexi>[单选](#单选)第 2 题</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>3. cp -p 命令复制文件，可保留文件权限、时间、属主等原始属性。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
    <Jiexi>[实操：上机实操保留文件所有属性，将文件备份复制的参数](#上机实操保留文件所有属性将文件备份复制的参数)</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>4. 上机 usermod -g 可修改用户所属主组，-aG 可添加附属组。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
    <Jiexi>[单选](#单选)第 3 题</Jiexi>
  </Workitem>
  <Workitem xuanze>
    <Wenben>5. top -b -n 1 命令可静态输出一次系统资源负载信息。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>6. 修改本地 hosts 文件域名映射后，无需重启网络即可生效解析。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>7. 防火墙 permanent 参数代表规则永久生效，重载后正常生效。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
  <Workitem xuanze>
    <Wenben>8. Shell脚本 uname -r 命令，可以查看系统当前内核版本信息。</Wenben>
    <Xuanxiang ans>对</Xuanxiang>
    <Xuanxiang>错</Xuanxiang>
  </Workitem>
</Workpaper>

## 实操简答

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>1. 上机实操 Linux 高级文件目录操作，完成嵌套目录创建、权限配置、属性保留复制、指定日志文件查找全套操作，写出实操步骤与运行现象</Wenben>
    <Ansinput />
    <Jiexi>
    命令提示：

    嵌套目录创建：`mkdir -p`

    权限配置：`chmod`

    属性保留复制：`cp -p`
    
    指定日志文件查找：`find /var/log -name "*.log"`
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>2. 上机实操自定义用户与用户组运维，完成指定 UID 用户创建、主组修改、密码周期配置、系统可登录用户查询全套操作，写出实操步骤和实测效果</Wenben>
    <Ansinput />
    <Jiexi>
    命令提示：

    创建用户组：`groupadd`

    指定 UID 用户创建：`useradd -u UID数字 -s /bin/bash 用户名`

    主组修改：`usermod -g 组名 用户名`

    密码周期配置：`chage -m 天数 用户名`

    系统可登录用户查询：`grep "/bin/bash" /etc/passwd`
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>3. 上机实操 YUM 缓存更新、软件查询、网站首页自定义、ftp 防火墙放行全套服务运维操作，写出实操流程与服务运行效果</Wenben>
    <Ansinput />
    <Jiexi>
    命令提示：

    YUM 缓存更新：`yum makecache`

    软件查询：`yum search nginx`

    网站首页自定义：[重置 httpd 默认首页，自定义网页内容为“考试专用服务页面”，重启服务验证](/Linux_Practice_Exercises_03#重置-httpd-默认首页自定义网页内容为考试专用服务页面重启服务验证)

    ftp 防火墙放行：`firewall-cmd --add-service=ftp --permanent`

    防火墙重载规则：`firewall-cmd --reload`

    查看放行服务列表：`firewall-cmd --list-services`
    </Jiexi>
  </Workitem>
</Workpaper>

## 实操复现

<Workpaper>
<Workpapersettings />
  <Workitem tiankong>
    <Wenben>
    1. Linux磁盘挂载与系统资源监控实操复现
    
    上机打开 CentOS 终端，独立完成全套实操：

    ①人性化查看系统磁盘及文件系统类型
    
    ②创建目录并临时挂载光盘设备
    
    ③静态查看一次系统 CPU 与内存负载
    
    ④批量结束 nginx 所有进程
    
    留存每一步实操截图。请详细写出实操步骤、对应命令及实操结果。
    </Wenben>
    <Ansinput />
    <Jiexi>
    命令提示：

    人性化查看系统磁盘及文件系统类型：`df -hT`

    创建目录并临时挂载光盘设备：`mkdir -p /media/dvd` `mount /dev/sr0 /media/dvd`

    静态查看一次系统 CPU 与内存负载：`top -b -n 1`

    批量结束 nginx 所有进程：`killall -9 nginx`
    
    :::warning
    挂载光盘设备前必须已挂载了 ISO 文件

    批量结束 nginx 前必须安装了 nginx 和已经启动：
    
    `yum install nginx -y`
    
    `systemctl start nginx`
    :::
    </Jiexi>
  </Workitem>
  <Workitem tiankong>
    <Wenben>
    2. Linux静态网络配置与本地解析实操复现

    上机基于 CentOS 系统，独立完成全套实操：
    
    ①编辑网卡文件配置永久静态 IP、网关、DNS
    
    ②重启网络服务并验证配置生效
    
    ③配置本地 hosts 域名映射
    
    ④测试外网 5 次连通性
    
    完整留存实操与复测截图。请详细写出实操步骤、对应命令及实操结果。
    </Wenben>
    <Ansinput />
    <Jiexi>
    [永久配置网卡静态 IP、网关、DNS，设置开机自启并验证](/Linux_Practice_Exercises_02#永久配置网卡静态-ip网关dns设置开机自启并验证)

    本地域名映射：编辑 /etc/hosts 文件，添加 IP 与自定义域名映射关系

    [实操：上机实操测试外网连通性，持续 ping 百度域名5次的命令](#上机实操测试外网连通性持续-ping-百度域名5次的命令)
    </Jiexi>
  </Workitem>
</Workpaper>