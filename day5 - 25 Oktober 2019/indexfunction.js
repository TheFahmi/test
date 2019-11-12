// function nama (){
//     console.log('Nama Kalian')
// }
// nama()

// var hasilgaji = gaji(8,16,'ceo') ---
function gaji(masuk,keluar,jabatan){
    var gaji
    if(jabatan == 'ceo'){
        gaji = (keluar-masuk)*1000
    }
    else if(jabatan == 'manager'){
        gaji = (keluar-masuk)*700
    }
    else if(jabatan == 'staff'){
        gaji = (keluar-masuk)*2000
    }
    else{
        console.log('tidak dapat gaji')
    }
    return gaji
}
console.log(gaji(8,15,'ceo'))
console.log(gaji(8,19,'manager'))
console.log(gaji(8,20,'staff'))


// var hasiloperator = operator(2,3,'bagi')
// console.log(hasiloperator)
// function operator(x,y,operator){
//     var hasil
//     if(operator == 'tambah'){
//         hasil = x+y
//     }
//     else if(operator == 'kurang'){
//         hasil = x-y
//     }
//     else if(operator == 'bagi'){
//         hasil = x/y
//     }
//     else if(operator == 'kali'){
//         hasil = x*y
//     }
//     return hasil
// }