
/* 
* 处理JSON文件
*/
const fs = require('fs');
const writeJson = function(params){
    console.log(fs)
    //现将json文件读出来
    fs.readFile('./test.json',function(err,data){
        if(err){
            return console.error(err);
        }
        var person = data.toString();//将二进制的数据转换为字符串
        person = JSON.parse(person);//将字符串转换为json对象
        person.data.push(params);//将传来的对象push进数组对象中
        person.total = person.data.length;//定义一下总条数，为以后的分页打基础
        console.log(person.data);
        var str = JSON.stringify(person);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile('./test.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log('----------新增成功-------------');
        })
    })
}
writeJson({
    name: "five",
    vlaue: 5
})
// export default writeJson