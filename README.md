# angular1.x-es6-webpack

>提醒: 确保是最新的`Node.js` 和 `npm`


```bash
$ git clone https://github.com/zuiyuexuan/webpack-es6-angular1.x.git my-app

$ cd my-app

#建议使用淘宝镜像 cnpm，安装更快！
$ npm install 
```

## 启动数据 mock server
```bash
# 启动 mock 服务
$ npm run api
```

数据 `mock` 使用 `json-server` 作为 `JSON` 服务器,采用 `fake.js` 生成随机数据。

具体用法参照官方API：

 [https://github.com/typicode/json-server](https://github.com/typicode/json-server) 
 
 
 [https://github.com/marak/Faker.js/]( [https://github.com/marak/Faker.js/]) 
 

## 运行开发环境
```
# 启动
$ npm start
```

浏览器访问 [http://localhost:8080](http://localhost:8080) 

## 发布
```bash
$ npm run build
```

生成 `dist` 目录，发布到生产环境web服务器下即可。