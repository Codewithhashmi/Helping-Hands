function donate() {
  const amount = document.getElementById('amount').value;
  if (amount && amount > 0) {
    alert(`Thank you for donating ₹${amount}! May Allah reward you.`);
  } else {
    alert('Please enter a valid donation amount.');
  }
}

document.getElementById('help-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;
  const need = document.getElementById('need').value;
  const amountNeeded = document.getElementById('amountNeeded').value;

  if (name && city && need && amountNeeded) {
    alert(`Thank you, ${name}. Your request has been submitted. We will contact you soon.`);
    this.reset();
  } else {
    alert('Please fill in all the fields.');
  }
});

function sponsorNow(name) {
  alert(`You chose to sponsor ${name}. Redirecting to donation process...`);
}
function openUPILink() {
  const amount = document.getElementById("amount").value;
  if (!amount || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  const upiId = "8292330628@ptsbi";
  const name = "MdSafdarHashmi";
  const currency = "INR";

  const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=${currency}`;
  window.open(upiUrl, "_blank");
}
