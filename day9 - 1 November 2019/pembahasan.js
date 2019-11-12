var kata = 'hello'
const cloneinclude = function(a,b){
    if(b.length == 1){
        for(i = 0;i < a.length;i++){
            if(b == a[i]){
                return true
            }
        }
        return false
    }
    else{
        for(i = 0;i < a.length;i++){
            if(b == a.substr(i,b.length)){
                return true
            }
        }
        return false
    }
}
// console.log(cloneinclude(kata,'hello','el'))

var abc = 'abcdefghijklmnopqrstuvwxyz'.split('').reverse()
var numstring = 12345566
numstring = numstring.toString().split('')
for(i = 0;i < numstring.length;i++){
    numstring[i] = parseInt(numstring[i])
}
console.log(numstring)

function tanggalhariini(){
    var a =  new Date()
    var hari = ("Minggu Senin Selasa Rabu Kamis Jum'at Sabtu").split(' ')
    var bulan = ('Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember').split(' ')
    return 'Tanggal hari ini '+hari[a.getDay()]+', '+a.getDate()+' '+bulan[a.getMonth()]+' '+a.getFullYear()


}
// console.log(tanggalhariini())

