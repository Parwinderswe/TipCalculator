const billAmountInput=document.getElementById("billAmount")
const tipPercentageInput=document.getElementById("tipPercentage")
const numPeopleInput=document.getElementById("numPeople")
const calculateButton =document.getElementById("calButton")
const totalTipDisplay =document.getElementById("totalTip")
const tipPerPersonDisplay =document.getElementById("tipPerPerson")
function calculateTip(){
        
    const billAmount=parseFloat(billAmountInput.value)
    const tipPercentage=parseFloat(tipPercentageInput.value)
    const numPeople=parseInt(numPeopleInput.value)
    if(Number.isNaN(billAmount) ||
    Number.isNaN(tipPercentage) ||
    Number.isNaN(numPeople) 
){
    alert("Please enter valid value for all fields")
}

const totalTip = (billAmount*tipPercentage)/100
const tipPerPerson=totalTip/numPeople

totalTipDisplay.textContent=`Total Tip : $${totalTip.toFixed(2)}`
tipPerPersonDisplay.textContent=`Tip for each member is : $${tipPerPerson.toFixed(2)}`
}

calculateButton.addEventListener('click',calculateTip)