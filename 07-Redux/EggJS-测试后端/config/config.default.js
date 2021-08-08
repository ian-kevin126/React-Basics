module.exports = {
    keys: 'COM.it666.*?',
    security: {
        csrf: {
            ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
        },
    },
    // 跨域相关配置
    cors : {
        origin: '*', // 表示允许的源
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH', // 表示允许的http请求方式
        credentials: true // 允许前端携带cookie
    }
};
