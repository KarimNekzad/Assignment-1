const paymentMethod = document.querySelector('.payment-method-form');
const creditForm = document.getElementById('credit-form');
const paypalForm = document.getElementById('paypal-form');
const bitcoinForm = document.getElementById('bitcoin-form');

paymentMethod.addEventListener('click', (e) => {
  if (e.target.classList.contains('payment-method')) {
    const radio = e.target;
    if (radio.value == 0) {
      creditForm.classList.remove('hidden');
      paypalForm.classList.add('hidden');
      bitcoinForm.classList.add('hidden');
    } else if (radio.value == 1) {
      creditForm.classList.add('hidden');
      paypalForm.classList.remove('hidden');
      bitcoinForm.classList.add('hidden');
    } else if (radio.value == 2) {
      creditForm.classList.add('hidden');
      paypalForm.classList.add('hidden');
      bitcoinForm.classList.remove('hidden');
    }
  }
});
