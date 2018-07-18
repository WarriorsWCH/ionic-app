This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

### ionic常用命令

+ npm install -g cnpm –registry=https://registry.npm.taobao.org（npm镜像源指向淘宝）

+ cnpm install -g cordova ionic（安装cordova ionic）

+ cnpm update -g cordova ionic（更新cordova ionic）

+ ionic -help（查看帮助）

+ ionic -v（查看版本）

+ ionic start xxx blank（空项目）

+ ionic start xxx tabs（带导航条）

+ ionic start xxx sidemenu（带侧滑菜单）

+ ionic platform add android（添加android平台）

+ ionic platform remove android（移除android平台）

+ ionic build android（编译项目apk）

+ ionic emulate android（运行项目apk 
手机连接在手机运行模拟器连接在模拟器运行）

+ ionic run android （相当于build + emulate）

+ ionic serve（开启服务调试）

+ ionic cordova build android --prod --release （编译项目apk）

+ ionic g page xxx //创建新页面

+ ionic g directive xxx //创建指令

+ ionic g component xxx //创建组件

+ ionic g provider xxx //创建服务

+ ionic g pipe xxx //创建过滤器