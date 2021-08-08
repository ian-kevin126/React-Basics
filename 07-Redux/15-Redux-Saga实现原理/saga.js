/*
// 定义了一个生成器函数, 这个函数保存了3个状态
function *gen() {
    yield '123';
    yield '456';
    yield '789';
}
// 只要执行生成器函数, 就会拿到一个可迭代对象
// 注意点: 执行生成器函数并不会执行对应的函数体
const result = gen();
// console.log(result);
// 注意点: 只要调用一个next方法, 就会执行一个yield
console.log(result.next()); // { value: '123', done: false }
console.log(result.next()); // { value: '456', done: false }
console.log(result.next()); // { value: '789', done: false }
 */
/*
function *gen() {
    console.log('1 + 1');
    yield 1 + 1;
    console.log('2 + 2');
    yield 2 + 2;
    console.log('3 + 3');
    yield 3 + 3;
}
const result = gen();
// 注意点: 每次调用next方法执行的是当前对应yield和上次yield之前所有的代码
console.log(result.next());
console.log(result.next());
console.log(result.next());
 */
/*
function *gen() {
    const a = yield 1 + 1;
    console.log('a = ', a);
    const b = yield 2 + 2;
    console.log('b = ', b);
    const c = yield 3 + 3;
    console.log('c = ', c);
}
const result = gen();

// { value: 2, done: false }
// console.log(result.next());
// a =  undefined
// { value: 4, done: false }
// 注意点: 默认情况下并不会将yield的执行结果赋值给某个变量
//        在生成器函数中如果想给上一次yield对应的变量赋值,
//        那么就必须在下一次调用next的时候给next传参
//        生成器函数会将下一次next传递的参数作为上一次yield变量的值
// console.log(result.next());
// a =  2
// { value: 4, done: false }
// console.log(result.next(2));

const a = result.next();
const b = result.next(a.value);
const c = result.next(b.value);
const d = result.next(c.value);
*/

function *gen() {
    const data = yield new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('abc');
        }, 3000)
    });
    console.log('生成器函数中的data = ', data);
}
const result = gen();
// console.log(result.next()); // { value: Promise { <pending> }, done: false }
result.next().value.then((data)=>{
    // console.log('生成器函数外面的data = ', data);
    result.next(data);
});

// 推荐阅读: https://zhuanlan.zhihu.com/p/37356948
