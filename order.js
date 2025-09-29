const stripe = Stripe("pk_test_51SCfA14mV0OJd9Zlc0CmnThnFSeA5J64HR393RDvUkYq1cehaoQFXkSDNxepWTRnuclLORItqLiMcSVAHK0yNxEw00nqARMg4f");

document.getElementById("order-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const { error } = await stripe.redirectToCheckout({
    lineItems: [
      { price: "price_1SCfCO4mV0OJd9ZlKRVeHOkH", quantity: 1 },
    ],
    mode: "payment",
successUrl: window.location.origin + "/success.html",
cancelUrl: window.location.origin + "/index.html",
  });

  if (error) {
    alert(error.message);
  }
});
