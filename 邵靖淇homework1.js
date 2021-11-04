let shape = prompt('请选择要画的图形：\n菱形，三角形');
while(!( shape == '菱形'|| shape == '三角形')){
    shape = prompt('请正确输入！\n\n请选择要画的图形：\n 菱形，三角形');
}

let c = prompt('请输入图形的尺寸\n若选择菱形则尺寸不能为双数');

while(c % 1 != 0) c = prompt('请正确输入！\n\n请输入图形的尺寸\n若选择菱形则尺寸不能为双数');

if(shape == '菱形'){
    while(c % 2 != 1){
        c = prompt('请正确输入！\n\n请输入图形的尺寸\n若选择菱形则尺寸不能为双数');
    }
    result = '';
    block = '';
    for(i=0; i<c-1; i++) block += ' ';
    str = '*';
    for(i=1; i<c; i++){
        block = block.substring(1);
        result += block+str+block+'\n';
        str += '**';
    }
    str = str.substring(2);
    for(i=0; i<c; i++){
        str = str.substring(2);
        block += ' ';
        result += block+str+block+'\n';
    }
    alert(result);
}



if (shape == '三角形'){
    result = '';
    block = '';
    for(i=0; i<c-1; i++) block += ' ';
    str = '*';
    for(i=1; i<c; i++){
        block = block.substring(1);
        result += block+str+block+'\n';
        str += '**';
    }
    alert(result);
}