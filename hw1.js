let shape = prompt('请选择要画的图形：\n正方形，三角形');
while(!(shape == '正方形' || shape == '三角形')){
    shape = prompt('请正确输入！\n\n请选择要画的图形：\n正方形，三角形');
}

let a = prompt('请输入图形的尺寸');

while(a % 1 != 0) a = prompt('请正确输入！\n\n请输入图形的尺寸');


if(shape == '正方形'){
    str = '';
    for(i=0; i<a; i++) str += '*';
    result = '';
    for(i=0; i<a; i++) result += str+'\n';
    alert(result)
}

if (shape == '三角形'){
    result = '';
    block = '';
    for(i=0; i<a-1; i++) block += ' ';
    str = '*';
    for(i=1; i<a; i++){
        block = block.substring(1);
        result += block+str+block+'\n';
        str += '**';
    }
    alert(result);
}