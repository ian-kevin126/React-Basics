const Controller = require('egg').Controller;

class HomeController extends Controller{
    async index(){
        this.ctx.body = 'www.it666.com';
    }
    async getInfo(){
        this.ctx.body = {
            name:'lnj',
            age: 18
        }
    }
}
module.exports = HomeController;
