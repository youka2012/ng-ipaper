module.exports = {
  users: [{
      name: 'admin',
      password: 'chaoma2018',
    },
    {
      name: 'test',
      password: 'test1234',
    },
    {
      name: 'chao',
      password: 'ma1234',
    }
  ],
  /* papaers: [{
      title: "微信小程序调查问卷",
      dateLine: "2019-8-30",
      creator: "马超",
      contact: "61907",
      description: "感谢您能抽出几分钟时间来参加本次答题，现在我们就马上开始吧！",
      expect: "9999999",
      acount: "test",
      status: true,
      code: "7K616QaEKfbX",
      createDate: "2018-09-25",
      questions: [{
          title: "是否听说过微信小程序？",
          type: "SINGLE",
          required: true,
          index: 0,
          items: [{
              index: "A",
              content: "听说过"
            },
            {
              index: "B",
              content: "没听说过"
            }
          ]
        },
        {
          title: "是否使用过微信小程序？",
          type: "SINGLE",
          required: true,
          index: 1,
          items: [{
              index: "A",
              content: "经常使用"
            },
            {
              index: "B",
              content: "偶尔使用"
            },
            {
              index: "C",
              content: "从未使用过"
            }
          ]
        },
        {
          title: "您使用微信小程序多久了？",
          type: "SINGLE",
          required: true,
          index: 2,
          items: [{
              index: "A",
              content: "小于一个月"
            },
            {
              index: "B",
              content: "一年以上"
            },
            {
              index: "C",
              content: "记不清楚"
            }
          ]
        },
        {
          title: "您使用微信小程序的理由是？",
          type: "MULTIPLE",
          required: true,
          index: 3,
          items: [{
              index: "A",
              content: "无需下载安装"
            },
            {
              index: "B",
              content: "占用空间小"
            },
            {
              index: "C",
              content: "操作流程简单"
            },
            {
              index: "D",
              content: "系统平台安全"
            },
            {
              index: "E",
              content: "其它"
            }
          ]
        },
        {
          title: "您会通过哪些方式寻找微信小程序？",
          type: "MULTIPLE",
          required: true,
          index: 4,
          items: [{
              index: "A",
              content: "百度搜索"
            },
            {
              index: "B",
              content: "微信扫码"
            },
            {
              index: "C",
              content: "历史记录"
            },
            {
              index: "D",
              content: "好友推荐"
            },
            {
              index: "E",
              content: "其它"
            }
          ]
        },
        {
          title: "您觉得微信小程序可靠良好？",
          type: "SINGLE",
          required: true,
          index: 5,
          items: [{
              index: "A",
              content: "赞同"
            },
            {
              index: "B",
              content: "不赞同"
            }
          ]
        },
        {
          title: "您觉得微信小程序值得大家期望？",
          type: "SINGLE",
          required: true,
          index: 6,
          items: [{
              index: "A",
              content: "值得"
            },
            {
              index: "B",
              content: "不值得"
            }
          ]
        },
        {
          title: "您对微信小程序的建议",
          type: "INPUT",
          required: true,
          index: 7,
          items: [{
            index: "A",
            content: ""
          }]
        }
      ]
    },
    {
      title: "蚂蚁花呗调查问卷",
      dateLine: "2019-9-30",
      creator: "马超",
      contact: "61907",
      description: "感谢您能抽出几分钟时间来参加本次答题，现在我们就马上开始吧！",
      expect: "888",
      acount: "test",
      status: true,
      code: "7K616QaEKfbX",
      createDate: "2018-09-25",
      questions: [{
          title: "是否听说过蚂蚁花呗？",
          type: "SINGLE",
          required: true,
          index: 0,
          items: [{
              index: "A",
              content: "听说过"
            },
            {
              index: "B",
              content: "没听说过"
            }
          ]
        },
        {
          title: "是否使用过蚂蚁花呗？",
          type: "SINGLE",
          required: true,
          index: 1,
          items: [{
              index: "A",
              content: "经常使用"
            },
            {
              index: "B",
              content: "偶尔使用"
            },
            {
              index: "C",
              content: "从未使用过"
            }
          ]
        },
        {
          title: "您使用蚂蚁花呗多久了？",
          type: "SINGLE",
          required: true,
          index: 2,
          items: [{
              index: "A",
              content: "小于一个月"
            },
            {
              index: "B",
              content: "一年以上"
            },
            {
              index: "C",
              content: "记不清楚"
            }
          ]
        },
        {
          title: "您使用蚂蚁花呗的理由是？",
          type: "MULTIPLE",
          required: true,
          index: 3,
          items: [{
              index: "A",
              content: "无需下载安装"
            },
            {
              index: "B",
              content: "占用空间小"
            },
            {
              index: "C",
              content: "操作流程简单"
            },
            {
              index: "D",
              content: "系统平台安全"
            },
            {
              index: "E",
              content: "其它"
            }
          ]
        },
        {
          title: "您会通过哪些方式寻找蚂蚁花呗？",
          type: "MULTIPLE",
          required: true,
          index: 4,
          items: [{
              index: "A",
              content: "百度搜索"
            },
            {
              index: "B",
              content: "微信扫码"
            },
            {
              index: "C",
              content: "历史记录"
            },
            {
              index: "D",
              content: "好友推荐"
            },
            {
              index: "E",
              content: "其它"
            }
          ]
        },
        {
          title: "您觉得蚂蚁花呗可靠良好？",
          type: "SINGLE",
          required: true,
          index: 5,
          items: [{
              index: "A",
              content: "赞同"
            },
            {
              index: "B",
              content: "不赞同"
            }
          ]
        },
        {
          title: "您觉得蚂蚁花呗值得大家期望？",
          type: "SINGLE",
          required: true,
          index: 6,
          items: [{
              index: "A",
              content: "值得"
            },
            {
              index: "B",
              content: "不值得"
            }
          ]
        },
        {
          title: "您对蚂蚁花呗的建议",
          type: "INPUT",
          required: true,
          index: 7,
          items: [{
            index: "A",
            content: ""
          }]
        }
      ]
    },
    {
      title: "微信朋友圈调查问卷",
      dateLine: "2019-8-30",
      creator: "马超",
      contact: "110000000",
      description: "感谢您能抽出几分钟时间来参加本次答题，现在我们就马上开始吧！",
      expect: "7777",
      acount: "test",
      status: true,
      code: "7K616QaEKffj",
      createDate: "2018-09-25",
      questions: [{
          title: "是否听说过微信朋友圈？",
          type: "SINGLE",
          required: true,
          index: 0,
          items: [{
              index: "A",
              content: "听说过"
            },
            {
              index: "B",
              content: "没听说过"
            }
          ]
        },
        {
          title: "是否使用过微信朋友圈？",
          type: "SINGLE",
          required: true,
          index: 1,
          items: [{
              index: "A",
              content: "经常使用"
            },
            {
              index: "B",
              content: "偶尔使用"
            },
            {
              index: "C",
              content: "从未使用过"
            }
          ]
        },
        {
          title: "您使用微信朋友圈多久了？",
          type: "SINGLE",
          required: true,
          index: 2,
          items: [{
              index: "A",
              content: "小于一个月"
            },
            {
              index: "B",
              content: "一年以上"
            },
            {
              index: "C",
              content: "记不清楚"
            }
          ]
        },
        {
          title: "您使用微信朋友圈的理由是？",
          type: "MULTIPLE",
          required: true,
          index: 3,
          items: [{
              index: "A",
              content: "无需下载安装"
            },
            {
              index: "B",
              content: "占用空间小"
            },
            {
              index: "C",
              content: "操作流程简单"
            },
            {
              index: "D",
              content: "系统平台安全"
            },
            {
              index: "E",
              content: "其它"
            }
          ]
        },
        {
          title: "您会通过哪些方式寻找微信朋友圈？",
          type: "MULTIPLE",
          required: true,
          index: 4,
          items: [{
              index: "A",
              content: "百度搜索"
            },
            {
              index: "B",
              content: "微信扫码"
            },
            {
              index: "C",
              content: "历史记录"
            },
            {
              index: "D",
              content: "好友推荐"
            },
            {
              index: "E",
              content: "其它"
            }
          ]
        },
        {
          title: "您觉得微信朋友圈可靠良好？",
          type: "SINGLE",
          required: true,
          index: 5,
          items: [{
              index: "A",
              content: "赞同"
            },
            {
              index: "B",
              content: "不赞同"
            }
          ]
        },
        {
          title: "您觉得微信朋友圈值得大家期望？",
          type: "SINGLE",
          required: true,
          index: 6,
          items: [{
              index: "A",
              content: "值得"
            },
            {
              index: "B",
              content: "不值得"
            }
          ]
        },
        {
          title: "您对微信朋友圈的建议",
          type: "INPUT",
          required: true,
          index: 7,
          items: [{
            index: "A",
            content: ""
          }]
        }
      ]
    },
    {
      title: "微信公众号调查问卷",
      dateLine: "2019-11-30",
      creator: "马超cc",
      contact: "61907",
      description: "感谢您能抽出几分钟时间来参加本次答题，现在我们就马上开始吧！",
      expect: "9999999",
      acount: "test",
      status: true,
      code: "7K616QaEKfty",
      createDate: "2018-09-25",
      questions: [{
          title: "是否听说过微信公众号？",
          type: "SINGLE",
          required: true,
          index: 0,
          items: [{
              index: "A",
              content: "听说过"
            },
            {
              index: "B",
              content: "没听说过"
            }
          ]
        },
        {
          title: "是否使用过微信公众号？",
          type: "SINGLE",
          required: true,
          index: 1,
          items: [{
              index: "A",
              content: "经常使用"
            },
            {
              index: "B",
              content: "偶尔使用"
            },
            {
              index: "C",
              content: "从未使用过"
            }
          ]
        },
        {
          title: "您使用微信公众号多久了？",
          type: "SINGLE",
          required: true,
          index: 2,
          items: [{
              index: "A",
              content: "小于一个月"
            },
            {
              index: "B",
              content: "一年以上"
            },
            {
              index: "C",
              content: "记不清楚"
            }
          ]
        },
        {
          title: "您使用微信公众号的理由是？",
          type: "MULTIPLE",
          required: true,
          index: 3,
          items: [{
              index: "A",
              content: "无需下载安装"
            },
            {
              index: "B",
              content: "占用空间小"
            },
            {
              index: "C",
              content: "操作流程简单"
            },
            {
              index: "D",
              content: "系统平台安全"
            },
            {
              index: "E",
              content: "其它"
            }
          ]
        },
        {
          title: "您会通过哪些方式寻找微信小程序？",
          type: "MULTIPLE",
          required: true,
          index: 4,
          items: [{
              index: "A",
              content: "百度搜索"
            },
            {
              index: "B",
              content: "微信扫码"
            },
            {
              index: "C",
              content: "历史记录"
            },
            {
              index: "D",
              content: "好友推荐"
            },
            {
              index: "E",
              content: "其它"
            }
          ]
        },
        {
          title: "您觉得微信小程序可靠良好？",
          type: "SINGLE",
          required: true,
          index: 5,
          items: [{
              index: "A",
              content: "赞同"
            },
            {
              index: "B",
              content: "不赞同"
            }
          ]
        },
        {
          title: "您觉得微信小程序值得大家期望？",
          type: "SINGLE",
          required: true,
          index: 6,
          items: [{
              index: "A",
              content: "值得"
            },
            {
              index: "B",
              content: "不值得"
            }
          ]
        },
        {
          title: "您对微信小程序的建议",
          type: "INPUT",
          required: true,
          index: 7,
          items: [{
            index: "A",
            content: ""
          }]
        }
      ]
    },
  ] */
}