import { dbank_backend } from "../../declarations/dbank_backend";

window.addEventListener('load', async function() {
  console.log('loading finished');
  const currentAmount = await dbank_backend.checkBalance();
  console.log(currentAmount);
  this.document.getElementById('value').innerText = Math.round(currentAmount * 100) / 100; //to round to 2 decimal
})