function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  }
  

  document.getElementById('sellerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('sellerName').value.trim();
    const product = document.getElementById('productName').value.trim();
    const desc = document.getElementById('productDesc').value.trim();
    const price = document.getElementById('productPrice').value.trim();
    const img = document.getElementById('productImg').value.trim() || "https://via.placeholder.com/220";
  
    if (!name || !product || !price) {
      document.getElementById('formMessage').innerText = "⚠️ Please fill out all required fields.";
      return;
    }
  
    
    const productCard = document.createElement('div');
    productCard.className = "product-card";
    productCard.setAttribute('data-name', product);
    productCard.setAttribute('data-price', `₹${price}`);
    productCard.setAttribute('data-desc', desc || "No description available.");
    productCard.setAttribute('data-img', img);
  
    productCard.innerHTML = `
      <img src="${img}" alt="${product}" />
      <h3>${product}</h3>
      <p class="price">₹${price}</p>
      <button class="view-btn" onclick="showDetails(this)">View Details</button>
    `;
  
    document.getElementById('productGrid').appendChild(productCard);
    document.getElementById('formMessage').innerText = "✅ Product added!";
    this.reset();
  });
  
  
  function showDetails(btn) {
    const card = btn.closest('.product-card');
    document.getElementById('modalTitle').innerText = card.dataset.name;
    document.getElementById('modalPrice').innerText = card.dataset.price;
    document.getElementById('modalDesc').innerText = card.dataset.desc;
    document.getElementById('modalImg').src = card.dataset.img;
    document.getElementById('productModal').style.display = 'flex';
  }
  
  
  function closeModal() {
    document.getElementById('productModal').style.display = 'none';
  }
  
