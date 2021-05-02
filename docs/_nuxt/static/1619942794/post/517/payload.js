__NUXT_JSONP__("/post/517", (function(a,b){return {data:[{article:{cid:517,title:"使用轻量级php博客(gitblog)搭建个人博客-可生成静态网站",slug:"517",created:1508642460,modified:1572254710,text:"\u003C!--markdown--\u003E\u003E 一说到搭建个人博客，大家一定是第一时间想到WordPress了吧？\r\n其实使用WordPress非常的方便，实用性也非常高,如果不知如何搭建wordpress博客，\r\n可以去隔壁Benny的学习日记(公众号)看教程。但是如果你只是想要一个简洁的博客文章页，那么你可以试着用一下**gitblog**。\r\n\r\n\u003C!-- more --\u003E\r\n\r\n### 什么是markdown(md)文件\r\n\r\n\u003E markdown是一种轻量级的标记语言，它允许人们使用易读易写的纯文本格式编写文档。唔，通俗点就跟HTML一样。约定一些特定的符号来决定它的显示形式。它相对于HTML的优势就是，简单，使作者将关注重点放在内容上。相信大家也经历过调CSS的绝望吧？\r\n\r\n它的语法极其简单,语法内容:\r\n[我的简书](http:\u002F\u002Fwww.jianshu.com\u002Fp\u002Fde9c98bba332)\r\n像我这篇文章就是md文件复制的。\r\n\r\n\r\n### 了解gitblog 网址[http:\u002F\u002Fwww.gitblog.cn](http:\u002F\u002Fwww.gitblog.cn)\r\n\r\n![gitblog官网](https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F5.PNG)\r\n\r\n\r\ngithub地址[https:\u002F\u002Fgithub.com\u002Fjockchou\u002Fgitblog](https:\u002F\u002Fgithub.com\u002Fjockchou\u002Fgitblog)\r\n\r\n\u003E Gitblog是一个简单易用的Markdown博客系统，它不需要数据库，没有管理后台功能，更新博客只需要添加你写好的Markdown文件即可。 它摆脱了在线编辑器排版困难，无法实时预览的缺点，一切都交给Markdown来完成，一篇博客就是一个Markdown文件。 同时也支持评论，代码高亮，数学公式，页面PV统计等常用功能。 Gitblog提供了不同的主题样式，你可以根据自己的喜好配置，如果你想自己制作博客主题，也是非常容易的。 Gitblog还支持整站静态导出，你完全可以导出整站静态网页部署到Github Pages。\r\n\r\n\r\n### gitblog与WordPress的区别\r\n\r\n1.  数据库，gitblog只有文件，没有数据库。也就是说它不需数据库，这样做的优点是简洁，适合与那些网站内容修改频率不高博客。系统更轻量级，移植性高，还可以到全站导出为静态文件。然后把它们部署到类似于githubpage平台。\r\n2.  框架，gitblog是使用codeigniter[http:\u002F\u002Fcodeigniter.org.cn](http:\u002F\u002Fcodeigniter.org.cn)\r\n框架(一个小型的轻量级php框架)。WordPress是完全使用自己的设计思想，不依赖于主流框架，如果你了解框架的思想，如果你想好好学习，和修改开发博客源码，你可以选择使用前者。当然对自己足够自信，你可以去研究WordPress源码。\r\n3.  完善性，如果你只是想搭个稳定完善的个人博客，那么不建议你使用gitblog。如果你自己的diy，探索精神比较强，或者你是个简洁控，你可以试试gitblog。\r\n\r\n### 如何配置安装gitblog\r\n\r\n1.  去github下载源码\r\n2.  安装Apache+php环境\r\n3.  解压到网站根目录\r\n4.  修改配置文件conf.yaml,文件说明[https:\u002F\u002Fgithub.com\u002Fjockchou\u002Fgitblogdoc\u002Fblob\u002Fmaster\u002Fposts\u002Fgitblog\u002Fconfig.md]\r\n(https:\u002F\u002Fgithub.com\u002Fjockchou\u002Fgitblogdoc\u002Fblob\u002Fmaster\u002Fposts\u002Fgitblog\u002Fconfig.md)\r\n```yaml\r\nurl: \u002F #域名地址\r\ntitle: thinkmoon #站点名称\r\n    subtitle: #副标题\r\n    theme: quest #主题名\r\n    enableCache: false #是否开启缓存\r\n    highlight: true #是否开启代码高亮\r\n    mathjax: false #数学公式支持\r\n    katex: false #？\r\n    youyan: #有言ID\r\n    baiduAnalytics: #百度统计ID\r\n    keywords: thinkmoon #网站关键字\r\n    description: &gt;\r\n        thinkmoon #网站描述\r\n    version: 2.2\r\n    author:\r\n        name: 醉月思 #作者\r\n        email: tim@thinkmoon.cn #邮箱\r\n        github: thinkmoon #github地址\r\n        weibo: your-weibo #微博地址\r\n        avatar:\r\n    blog:\r\n        recentSize: 5\r\n        pageSize: 6\r\n        pageBarSize: 5\r\n        allBlogsForPage: false\r\n    text:\r\n        title: 介绍\r\n        intro: &gt;\r\n            本博客使用Gitblog搭建,\r\n            wordpress博客请访问https:\u002F\u002Fthinkmoonmagic.wordpress.com\r\n    ```\r\n\r\n   \u003E 你可能需要修改的配置参数：\r\n   \r\n   ```yaml\r\n    url: 修改成你的域名，http:\u002F\u002Fyourdomain.com，注意最后没有杠。\r\n    title： 修改成你的博客标题\r\n    subtitle： 修改成你的副标题\r\n    duoshuo： GitBlog采用多说评论框，你需要申请多说账号，并在这里填写你的多说ID\r\n    baiduAnalytics： GitBlog采用百度统计，你需要申请百度统计账号，在这里填写你的统计Key\r\n    author：修改为你个人的信息即可\r\n    如果你不需要评论和统计功能，删除duoshuo和baiduAnalytics这两荐即可。其他信息，可根据浏览博客页面的效果进行修改调整。\r\n    ```\r\n\r\n5.访问，OK了\r\n\r\n\r\n### 编写一篇博客\r\n\r\n\u003E 在gitblog里面，一篇文章就是markdown文件。所有的文章都在\u002Fblog目录下，你把你写好的md文件放到这个文件夹就可以了\r\n\r\n博客文章的属性，包括作者，题目，标签，分类目录等，由md文件里面的注释决定。[注释规范](https:\u002F\u002Fgithub.com\u002Fjockchou\u002Fgitblogdoc\u002Fblob\u002Fmaster\u002Fposts\u002Fgitblog\u002Fedit.md)\r\n\r\n例如use_gitblog_setup_blog.md\r\n\r\n![gitblog博客文章编](https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F1.PNG )\r\n\r\n\r\n上传到blog文件夹之后，主页界面刷新效果\r\n\r\n![gitblog效果展示](https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F2.PNG)\r\n\r\n文章页效果\r\n\r\n![gitblog文章页效果展示](https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F3.PNG)\r\n\r\n\u003E 这儿需注意，gitblog默认是开启网站缓存的，如果你的网站更新不够频繁，你可以不用改配置，在配置conf.yaml里面修改。\r\n\r\n\r\n### 同步wp博客到gitblog\r\n\r\n1.  首先从wordpress后台中导出xml数据\r\n2.  重命名为wordpress.xml\r\n3.  使用PHP 网站根目录\u002Findex.php wp2gb 命令同步\r\n\r\n    例如: php \u002Fvar\u002Fwww\u002Fhtml\u002Findex.php wp2gb\r\n\r\n    运行成功会提示finished！运行后的主页俯视图\r\n![wordpress迁移到gitblog](https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002F%E5%B0%8F%E4%B9%A6%E5%8C%A0\u002F4.PNG \"4\")\r\n\r\n### 完成gitblog的搭建\r\n\r\n好啦，大功告成啦，一个gitblog博客网站就已经搭建成功了[www.thinkmoon.cn](http:\u002F\u002Fwww.thinkmoon.cn)\r\n\r\n",order:a,authorId:1,type:"post",status:"publish",commentsNum:a,allowComment:b,allowPing:b,allowFeed:b,parent:a,views:649,likes:a}}],fetch:{},mutations:void 0}}(0,"1")));