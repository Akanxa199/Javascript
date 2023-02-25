const Bill = 275;
const tip1 = 15;
let total = 0;
const tip2 = 20;


(Bill >= 50 && Bill <= 300) ?
console.log(" Bill Amount : " + Bill + "\n Tip : " + (total = (Bill / 100) * tip1) + " \nTotal Bill = " + (Bill + total)):
    console.log(" Bill Amount : " + Bill + "\n Tip : " + (total = (Bill / 100) * tip2) + "\n Total Bill = " + (Bill + total))