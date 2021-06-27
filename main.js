function checkLove() {
let Name ={
    name: document.getElementById("name").value.toLowerCase(),
    cname: document.getElementById("cname").value.toLowerCase()
    }
const crieteria1 = ['t','r','u','e'];
const crieteria2 = ['l','o','v','e'];
let combo = (Name.name).concat(Name.cname);
let count1 = 0;
let count2 = 0;
for (let element1 of crieteria1){
    for (let i= 0; i<=combo.length; i++){
        if (element1 == combo[i])
            count1 += 1
    }
}

for (let element2 of crieteria2){
    for (let j= 0; j<=combo.length; j++){
        if (element2 == combo[j])
            count2 += 1
    }
}
let percentcombo = count1.toString().concat(count2.toString());

document.getElementById("lovevalue").value = percentcombo + "%";

let percent = Number(percentcombo);

if (percent <= 30)
    document.getElementById("recom").textContent = "सरी भाइ टिक्दैन तिम्रो माया 😂😂"
else if(percent <= 60)
    document.getElementById("recom").textContent = "राम्रै छ तर ढुक्क हुन पर्दैन Keep Going 😛😛"

else
    document.getElementById("recom").textContent = "सात जन्म सम्म टिक्छ ब्रो good luck ❤️❤️"
}



