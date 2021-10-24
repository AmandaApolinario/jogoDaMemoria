let img1 = document.getElementById('1');
let img2 = document.getElementById('2');
let img3 = document.getElementById('3');
let img4 = document.getElementById('4');
let img5 = document.getElementById('5');
let img6 = document.getElementById('6');
let img7 = document.getElementById('7');
let img8 = document.getElementById('8');
let img9 = document.getElementById('9');
let img10 = document.getElementById('10');
let img11 = document.getElementById('11');
let img12 = document.getElementById('12');

let ordem = [];
for (let i=0;i<12;i++){
    ordem[i] = '-';
}

let imgIndice = ['1','1','2','2','3','3','4','4','5','5','6','6'];
let ind1,ind2;

//makes the photos randomized
function swap(imgIndice){
    ind1 = Math.floor(Math.random()*11);
    ind2 = Math.floor(Math.random()*11);
    
    let newInd = [];
    for(let i=0;i<12;i++){
        if(i === ind1 || i === ind2){
            newInd[ind1] = imgIndice[ind2];
            newInd[ind2] = imgIndice[ind1];
        }
        else{
            newInd[i] = imgIndice[i];
        }
    }
    return newInd;
}

for(let i=0;i<50;i++){
    imgIndice = swap(imgIndice);
}

let primVirada = true;
let vir1,virInd1;
let placar = 0;
let max = 6;
let erros = 0;
let event1,event2;

function ehIgual(vir1,Ind1,vir2,Ind2,event1,event2){

    primVirada = true;
    if(imgIndice[Ind1] === imgIndice[Ind2]){
        placar++;
        vir1.removeEventListener('click',event1);
        vir2.removeEventListener('click',event2);

        setTimeout(()=>{
            if(placar === 6){
                alert("VOCE VENCEU! PARABÉNS");
                setTimeout(()=>{
                    document.location.reload(true);
                },500);
            }
            
        },100);

    }
    else{
        erros++;
        setTimeout(()=>{
            vir1.src = "./images/backCard.jpg";
            vir2.src = "./images/backCard.jpg";
        },750);

    }
    
}

function salvaPrim(img1,pos1,f1){
    primVirada = false;
    vir1 = img1;
    virInd1 = pos1;
    event1 = f1;
}


img1.addEventListener('click',function f1(evt){
    evt.preventDefault();
    img1.src = `./images/img${imgIndice[0]}.jpeg`;

    if(primVirada === true){
        salvaPrim(img1,0,f1);
    }
    else{
        ehIgual(vir1,virInd1,img1,0,event1,f1);
    }

})

img2.addEventListener('click',function f2(evt){
    evt.preventDefault();
    img2.src = `./images/img${imgIndice[1]}.jpeg`;

    if(primVirada === true){
        salvaPrim(img2,1,f2);
    }
    else{
        ehIgual(vir1,virInd1,img2,1,event1,f2);
    }

})

img3.addEventListener('click',function f3(evt){
    evt.preventDefault();
    img3.src = `./images/img${imgIndice[2]}.jpeg`;

    if(primVirada === true){
        salvaPrim(img3,2,f3);
    }
    else{
        ehIgual(vir1,virInd1,img3,2,event1,f3);
    }
})

img4.addEventListener('click',function f4(evt){
    evt.preventDefault();
    img4.src = `./images/img${imgIndice[3]}.jpeg`;

    if(primVirada === true){
        salvaPrim(img4,3,f4);
    }
    else{
        ehIgual(vir1,virInd1,img4,3,event1,f4);
    }
})

img5.addEventListener('click',function f5(evt){
    evt.preventDefault();
    img5.src = `./images/img${imgIndice[4]}.jpeg`;

    if(primVirada === true){
        salvaPrim(img5,4,f5);
    }
    else{
        ehIgual(vir1,virInd1,img5,4,event1,f5);
    }
})

img6.addEventListener('click',function f6(evt){
    evt.preventDefault();
    img6.src = `./images/img${imgIndice[5]}.jpeg`;

    if(primVirada === true){
        salvaPrim(img6,5,f6);
    }
    else{
        ehIgual(vir1,virInd1,img6,5,event1,f6);
    }
})

img7.addEventListener('click',function f7(evt){
    evt.preventDefault();
    img7.src = `./images/img${imgIndice[6]}.jpeg`;

    if(primVirada === true){
        salvaPrim(img7,6,f7);
    }
    else{
        ehIgual(vir1,virInd1,img7,6,event1,f7);
    }
})

img8.addEventListener('click',function f8(evt){
    evt.preventDefault();
    img8.src = `./images/img${imgIndice[7]}.jpeg`;

    if(primVirada === true){
        salvaPrim(img8,7,f8);
    }
    else{
        ehIgual(vir1,virInd1,img8,7,event1,f8);
    }
})

img9.addEventListener('click',function f9(evt){
    evt.preventDefault();
    img9.src = `./images/img${imgIndice[8]}.jpeg`;

    if(primVirada === true){
        salvaPrim(img9,8,f9);
    }
    else{
        ehIgual(vir1,virInd1,img9,8,event1,f9);
    }
})

img10.addEventListener('click',function f10(evt){
    evt.preventDefault();
    img10.src = `./images/img${imgIndice[9]}.jpeg`;

    if(primVirada === true){
        salvaPrim(img10,9,f10);
    }
    else{
        ehIgual(vir1,virInd1,img10,9,event1,f10);
    }
})

img11.addEventListener('click',function f11(evt){
    evt.preventDefault();
    img11.src = `./images/img${imgIndice[10]}.jpeg`;

    if(primVirada === true){
        salvaPrim(img11,10,f11);
    }
    else{
        ehIgual(vir1,virInd1,img11,10,event1,f11);
    }
})

img12.addEventListener('click',function f12(evt){
    evt.preventDefault();
    img12.src = `./images/img${imgIndice[11]}.jpeg`;

    if(primVirada === true){
        salvaPrim(img12,11,f12);
    }
    else{
        ehIgual(vir1,virInd1,img12,11,event1,f12);
    }
})
