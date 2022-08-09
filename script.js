var fruits = ['apple', 'banana','cherry', 'durian'];
document.write(fruits+'<br/>')
fruits.pop();
fruits.push ('dragon', 'eggplant', 'grape')

document.write(fruits+'<br/>'+'<br/>')


var santri = ["khoirul", "bintang", "zian", "ghaitsah", "reza", "farhan"]
document.write(santri+'<br/>')
document.write(santri.reverse()
+'<br/>'+'<br/>')


var animals = ['lion', 'elephant', 'squirrel', 'eagle', 'zebra', 'tiger'];
document.write(animals+'<br/>')
animals.shift();
animals.pop();
document.write(animals+'<br/>'+'<br/>');



for (var x = 0; x < 4; x++){
    for (var y = 0; y < 18; y++){
        if (y==4 )
        document.write('*')
        if (y==16)
        document.write('*')
        else
            document.write(' -')

    }
    document.write ('<br/>')
}



for (var d = 0; d < 18; d++){
    if (d==0 || d==2|| d==4 || d==5 || d==7 || d==9 || d==11 || d==13 || d== 15 || d==16)
    document.write(' * ')
    else {
        document.write ('-')
    }
}document.write ('<br/>')

for (var x = 0; x < 4; x++){
    for (var y = 0; y < 18; y++){
        if (y==4 )
        document.write('*')
        if (y==16)
        document.write('*')
        else
            document.write(' -')

    }
    document.write ('<br/>')
}



var nilai =prompt('masukkan nilai anda');
var grade ='';
switch (true) {
    case nilai <= 60:
        grade = 'E';
        break
    case nilai <= 70:
        grade = 'C';
        break
    case nilai <= 80:
        grade = 'B';
        break
    case nilai <= 90:
        grade = 'B+';
        break
    case nilai <= 100:
        grade = 'A';
    break
    

}
document.write(grade)