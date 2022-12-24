import { dbank_backend } from "../../declarations/dbank_backend";

window.addEventListener('load', async function() {
  updateBalance();
});

document.querySelector('form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const button = event.target.querySelector('#submit-btn');

  const inputAmount = parseFloat(document.getElementById('input-amount').value);
  const withdrawalAmount = parseFloat(document.getElementById('withdrawal-amount').value);

  button.setAttribute('disabled', true);

  if (document.getElementById('input-amount').value.length != 0) {
    await dbank_backend.topUp(inputAmount);  
  }

  if (document.getElementById('withdrawal-amount').value.length != 0) {
      await dbank_backend.withdraw(withdrawalAmount);
  }

  await dbank_backend.compound();
  
  updateBalance();

  document.getElementById('input-amount').value = '';
  document.getElementById('withdrawal-amount').value = '';

  button.removeAttribute('disabled');
});

async function updateBalance() {
  const currentAmount = await dbank_backend.checkBalance();
  document.getElementById('value').innerText = Math.round(currentAmount * 100) / 100; //to round to 2 decimal
};