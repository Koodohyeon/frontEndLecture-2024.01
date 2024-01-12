function isDivisble(year){
    if((year+1) % (year-2000) == 0)
        console.log(year, 'good');
    else
        console.log(year, 'bye');
}
for(let i = 2023; i <=2040; i++) {
    isDivisble(i);
} 