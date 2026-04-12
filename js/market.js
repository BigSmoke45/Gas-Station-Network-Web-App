// Function for switching categories
function showCategory(categoryId) {
  // Remove active classes from all categories and buttons
  document.querySelectorAll(".category-section").forEach((section) => {
    section.classList.remove("active");
  });
  document.querySelectorAll(".switch-btn").forEach((button) => {
    button.classList.remove("active");
  });

  // Add an active class to the selected category and button
  document.getElementById(categoryId).classList.add("active");
  event.target.classList.add("active");
}

// Global cart variable
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");

  // Add to cart function
  function addToCart(id, name, price) {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ id, name, price: parseFloat(price), quantity: 1 });
    }

    renderCart();
  }

  // Cart display function
  function renderCart() {
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
      <p class="text-center text-muted py-4">Ваш кошик порожній.</p>
    `;

      // Clearing the display of the total amount and quantity of products
      const cartSummary = document.getElementById("cart-summary");
      cartSummary.innerHTML = "";
      return;
    }

    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.className =
        "cart-item d-flex justify-content-between align-items-center border rounded p-3 mb-3";

      cartItem.innerHTML = `
      <div>
        <h5 class="mb-1">${item.name}</h5>
        <small class="text-muted">Ціна за одиницю: ₴${item.price.toFixed(
          2
        )}</small>
      </div>

      <div class="d-flex align-items-center">
        <span class="fw-bold text-success me-3 item-total-price">₴${(
          item.price * item.quantity
        ).toFixed(2)}</span>

        <div class="d-flex align-items-center me-3">
          <input
            type="number"
            class="form-control form-control-sm text-center item-quantity"
            style="width: 60px;"
            min="1"
            value="${item.quantity}"
            data-index="${index}"
          />
        </div>

        <button class="btn btn-sm btn-outline-danger rounded-pill remove-item" data-index="${index}">
          Видалити
        </button>
      </div>
    `;

      cartItemsContainer.appendChild(cartItem);
    });

    attachCartEvents(); // It is important to call it again after rendering

    // update the display of the total amount and quantity of goods
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const cartSummary = document.getElementById("cart-summary");
    cartSummary.innerHTML = `
  <hr />
  <p><strong>Усього товарів:</strong> ${totalQuantity}</p>
  <p><strong>Загальна сума:</strong> ₴${totalPrice.toFixed(2)}</p>
`;
  }

  // Function for binding events to cart items
  function attachCartEvents() {
    const quantityInputs = document.querySelectorAll(".item-quantity");
    const removeButtons = document.querySelectorAll(".remove-item");

    quantityInputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        const index = e.target.dataset.index;
        const newQuantity = parseInt(e.target.value);

        if (newQuantity > 0) {
          cart[index].quantity = newQuantity;

          // We update only the price without redrawing the entire cart.
          const parent = e.target.closest(".cart-item");
          const totalPriceElem = parent.querySelector(".item-total-price");
          totalPriceElem.textContent = `₴${(
            cart[index].price * newQuantity
          ).toFixed(2)}`;
        }
      });
    });

    removeButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        renderCart(); // When deleting, the entire basket is redone
      });
    });
  }

  // Opening the shopping cart (click "Order Now")
  window.openCheckout = function () {
    if (cart.length === 0) {
      showToast(
        "Кошик порожн! Додайте товари, щоб оформити замовлення.",
        "error"
      );
      return;
    }

    console.log("Ваше замовлення:", cart);
    showToast("✅ Замовлення відправлено! Дякуємо за покупку!");
    cart = [];
    renderCart();
  };

  // attach events to the "Buy" buttons
  document.querySelectorAll(".buy-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      const name = button.dataset.name;
      const price = button.dataset.price;
      addToCart(id, name, price);
    });
  });
});

// Move this function outside of DOMContentLoaded
function openTonCheckout() {
  if (cart.length === 0) {
    showToast(
      "Кошик порожній! Додайте товари, щоб оформити замовлення.",
      "error"
    );
    return;
  }
  // We calculate the total amount and quantity of goods
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // Storing values ​​in sessionStorage
  sessionStorage.setItem("totalQuantity", totalQuantity);
  sessionStorage.setItem("totalPrice", totalPrice.toFixed(2));
  // Open the payment page
  window.open("ton-checkout.html", "_blank");
}

function showToast(message, type = "success") {
  const toastContainer = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = `toast-message ${type}`;
  toast.textContent = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}
