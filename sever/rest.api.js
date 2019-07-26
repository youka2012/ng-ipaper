var api = [
    {
        name:'login',
        path: "/login",
        api:[
            {url:'/enter',type:'get',_params:{paperCode:'123456'},description:'输入问卷码进入问卷答题页面',response1:{code:200,msg:'success'},response2:{code:400,msg:'failed'}},
            {url:'/login',type:'post',_params:{name:'test',password:'test2018'},description:'问卷创建人登陆',response1:{code:200,msg:'success'},response2:{code:400,msg:'failed'}},
        ],
    },
    {
        name:'paper',
        path: "/paper",
        api:[
            // {url:'logout',type:'get',description:'退出登录（清除去cookie localStorage）'},
        ],
        children: [
            {name:'list',path: '/paper/list',api:[
                    {url:'/api/papers',type:'get',_params:{},description:'',response1:[{},],response2:{code:400,msg:'failed'}},
                    {url:'/api/setPaperStatus',type:'get',_params:{paperId:'p111',status:'ON'},description:'切换一项问卷状态',response1:{code:200,msg:'success'},response2:{code:400,msg:'failed'}},
                    {url:'/api/deletePaper',type:'get',_params:{paperId:'p111'},description:'删除一项问卷',response1:{code:200,msg:'success'},response2:{code:400,msg:'failed'}},
                ],},
            {name:'create',path: '/paper/create',api:[
                    {url:'/api/submitPaper',type:'post',_params:{paperData:{}},description:'提交问卷',response1:{code:200,msg:'success'},response2:{code:400,msg:'failed'}},
                ],},
            {name:'detail',path: '/paper/detail/:paperId',api:[
                    {url:'/api/paperDetail',type:'get',_params:{paperId:'p111'},description:'获取问卷详情',response1:{},response2:{code:400,msg:'failed'}},
                ],},
            {name:'analysis',path: '/paper/analysis/:paperId',api:[
                    {url:'/api/paperAnalysis',type:'get',_params:{paperId:'p111'},description:'获取问卷答题分析',response1:{},response2:{code:400,msg:'failed'}},
                    {url:'/api/deleteAnswer',type:'get',_params:{answerId:'a111'},description:'删除答案',response1:{},response2:{code:400,msg:'failed'}},
                ],},
        ]
    },
     {
        name:'blank',
        path: "/blank",
        api:[
            {url:'submitAnswer',type:'post',_params:{answer:{}},description:'提交答案',response1:{code:200,msg:'success'},response2:{code:400,msg:'failed'}},
        ],
    }
 ];
console.log(api);
