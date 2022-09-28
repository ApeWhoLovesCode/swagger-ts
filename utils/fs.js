
var fs = require("fs");

function delPath(path){
  console.log('path: ', path);
  if(!fs.existsSync(path)){
    console.log("路径不存在");
    return "路径不存在";
  }
  var info=fs.statSync(path);
  if(info.isDirectory()){//目录
    var data=fs.readdirSync(path);
    if(data.length>0){
      for (var i = 0; i < data.length; i++) {
        delPath(`${path}/${data[i]}`); //使用递归
        if(i==data.length-1){ //删了目录里的内容就删掉这个目录
          delPath(`${path}`);
        }
      }
    }else{
      fs.rmdirSync(path);//删除空目录
    }
  }else if(info.isFile()){
    fs.unlinkSync(path);//删除文件
  }
}

module.exports = { delPath }
// module.exports.delPath = delPath
// exports 是指向的 module.exports 的引用
// exports.delPath = delPath 
// exports 等于 module.exports