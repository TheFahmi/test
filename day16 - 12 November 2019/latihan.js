kata = 'Aldino'
kata = kata.toUpperCase().split('')

arrayhuruf = ('1BCD1FGH1JKLMN1PQRST1VWXYZ').split('')

// arrayvowel = ('AEIOU')

encrypt = function(){
    output = ''
    for(i = 0;i < kata.length;i++){
        for(j = 0;j < arrayhuruf.length;j++){
            if(kata[i]==arrayhuruf[j]){
                output = output + arrayhuruf[j]
            }
        }
    }
}

