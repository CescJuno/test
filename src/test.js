const userInfo = {
    id: 'test@abc.com',
    pw: {
        name:'123'
    }
};
function callback(value, obj){
    if(value === 'number') throw "exception"
    if(obj !== null) return obj
}

async function test1(){
    return new Promise(function(resolve, reject){
        try{
            console.log(userInfo.pw.name);
            resolve();
        }catch(e){
            reject(e);
        }
    });
}

async function parseInt1(){
    return new Promise(function(resolve, reject){
        try{
            console.log(userInfo.pw.name);
            userInfo.pw.name = '444';
            resolve();
        }catch(e){
            reject(e);
        }
    });
}
async function auth1(){
    console.log(userInfo.pw.name);
    return callback('number1',userInfo.pw.name);
}
async function test(){
    return new Promise(function(resolve, reject){
        try{
            console.log(userInfo.pw.name);
            resolve();
        }catch(e){
            reject(e);
        }
    });
}

async function parseInt(){
    return new Promise(function(resolve, reject){
        try{
            console.log(userInfo.pw.name);
            userInfo.pw.name = '444';
            resolve();
        }catch(e){
            reject(e);
        }
    });
}
async function auth(){
    return new Promise(function(resolve, reject){
        try{
            resolve(callback('number',userInfo.pw.name));
            console.log(userInfo.pw.name);
        }catch(e){
            reject(e);
        }
    });
}
const makeRequest = async () => {
    await test()
    await parseInt1()
    await auth1()
    //throw new Error("error")
};
makeRequest().catch(err=>{
    console.log(err);
});
/*
test().then(parseInt).then(auth).catch(function(e){
    console.error(e);
});
*/
/*
test(userInfo).then(parseInt).then(auth).then(function(data){
    console.log(data);
}).catch(function(e){
    console.error(e);
});
    //var test = callback("number1","value");
*/
