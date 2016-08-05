/***************************
 * 前台
 ***************************/


/**
 * 首页
 * 
 * common:: 标记的均为每个页面的公共部分
 */

var indexJson = {
  // common::全局信息
  "infos" : [
    ""
  ],

  // 文章列表
  "articles" : [
    {
      "aid" : 1, // 文章ID
      "url" : "http://catblog.com/article/1", // 文章URL
      "title" : "PHP开发小记", // 文章标题
      "image" : "/assets/article/2016/8-04.jpg", // 文章配图
      "classify" : "Web开发", // 文章分类
      "author" : "jeff", // 作者
      "created" : "2016-08-05", // 发布日期
      "order" : 0, //0则按照时间排序，1则置顶（能否实现？）
      "viewCount" : 100, // 文章浏览量
      "comentCount" : 10, // 评论数量
      "tags" : [ // 文章标签
        {
          "name" : "PHP",
        },
        {
          "name" : "WEB开发",
        },
      ],
    },
    {
      "aid" : 2, // 文章ID
      "url" : "http://catblog.com/article/2", // 文章URL
      "title" : "PHP开发小记", // 文章标题
      "image" : "/assets/article/2016/8-04.jpg", // 文章配图
      "classify" : "Web开发", // 文章分类
      "author" : "jeff", // 作者
      "created" : "2016-08-05", // 发布日期
      "order" : 0, //0则按照时间排序，1则置顶（能否实现？）
      "viewCount" : 100, // 文章浏览量
      "comentCount" : 10, // 评论数量
      "tags" : [ // 文章标签
        {
          "name" : "PHP",
        },
        {
          "name" : "WEB开发",
        },
      ],
    },
  ],

  // common::文章归档（侧边栏）
  "Archive" : [
    {
      "time" : "2016年08月", // 归档时间
      "url" : "http://catblog.com/article/archive/2016年08月", // 链接
    },
    {
      "time" : "2016年08月",
      "url" : "http://catblog.com/article/archive/2016年08月",
    },
  ],

  // common::文章分类目录（侧边栏）
  "classify" : [
    {
      "name" : "", // 分类名称
      "url" : "http://catblog.com/article/classify/1", // 链接
    },
    {
      "name" : "", // 分类名称
      "url" : "http://catblog.com/article/classify/1", // 链接
    },
  ],

  // common::标签信息（侧边栏）
  "tags" : [
    {
      "name" : "PHP",
      "url" : "http://www.catblog.com/article/tag/1",
    },
    {
      "name" : "YII",
      "url" : "http://www.catblog.com/article/tag/2",
    },
  ],

  // common::友情链接
  "footer" : [
    {
      "image" : "1.jpg", // 图片
      "name" : "牛客网", // 文字
      "link" : "http://www.niuke.net", // 链接地址
    },
    {
      "image" : "1.jpg", 
      "name" : "牛客网",
      "link" : "http://www.niuke.net",
    },
  ]
};




/**
 * 文章列表页
 */

var articleJson = {
  // 分类目录信息（用于检索）
  "classify" : [
    {
      "name" : "Web开发",
      "url" : "http://www.catblog.com/article/classify/1",
    },
    {
      "name" : "生活小记",
      "url" : "http://www.catblog.com/article/classify/2",
    },
  ],

  // 文章列表信息
  "articles" : [
    {
      "aid" : 1, // 文章ID
      "url" : "http://catblog.com/article/1", // 文章URL
      "title" : "PHP开发小记", // 文章标题
      "image" : "/assets/article/2016/8-04.jpg", // 文章配图
      "classify" : "Web开发", // 文章分类
      "author" : "jeff", // 作者
      "created" : "2016-08-05", // 发布日期
      "order" : 0, //0则按照时间排序，1则置顶（能否实现？）
      "viewCount" : 100, // 文章浏览量
      "comentCount" : 10, // 评论数量
      "tags" : [ // 文章标签
        {
          "name" : "PHP",
        },
        {
          "name" : "WEB开发",
        },
      ],
    },
  ],

  // 标签信息
  "tags" : [
    {
      "name" : "PHP",
      "url" : "http://www.catblog.com/article/tag/1",
    },
    {
      "name" : "YII",
      "url" : "http://www.catblog.com/article/tag/2",
    },
  ],
};



/**
 * 文章详情页
 */

var detailJson = {
  // 文章信息
  "articles" : [
    {
      "title" : "PHP开发小记", // 文章标题
      "classify" : "Web开发", // 文章分类
      "author" : "jeff", // 作者
      "created" : "2016-08-05", // 发布日期
      "viewCount" : 100, // 文章浏览量
      "comentCount" : 10, // 评论数量
      "content" : "这是一篇PHP开发小记。。。。。。。", // 文章内容
      "tags" : [ // 文章标签
        {
          "name" : "PHP",
        },
        {
          "name" : "WEB开发",
        },
      ],
    },
  ],

  // 评论信息
  "comments" : [
    {
      "isAnonymity" : 0, // 1为匿名 0为非匿名（非匿名是为了兼容后续的第三方登录评论）
      "author" : "评论者", // 匿名则无该属性
      "content" : "写得好", // 评论内容
      "created" : "2016-08-04", // 评论时间
      "hasReplies" : 1, // 1为有回复，0为无回复
      "replies" : [
        {
          "isAnonymity" : 0, // 1为匿名 0为非匿名（非匿名是为了兼容后续的第三方登录评论）
          "author" : "评论者", // 匿名则无该属性
          "content" : "写得好", // 评论内容
          "created" : "2016-08-04", // 评论时间
          "hasReplies" : 1, // 1为有回复，0为无回复
          "replies" : [
              // 无限极嵌套
          ],
        },
      ], 
    },
  ],
};


/***************************
 * 后台（多为表单提交）
 ***************************/