function initMap() {
  const location = { lat: 3.51602, lng: -2.1969 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: location
  });
  new google.maps.Marker({ position: location, map: map });
}

const menuItems = document.getElementById('menu-items');
menuItems.style.maxHeight = '0px';
function menutoggle() {
  if (menuItems.style.maxHeight === '0px') {
    menuItems.style.maxHeight = '220px';
  } else {
    menuItems.style.maxHeight = '0px';
  }
}

document.querySelectorAll('.box-container').forEach(box => {
  const btn = document.createElement('button');
  btn.classList.add('add-cart-btn');
  btn.innerHTML = '<i class="fa fa-cart-plus"></i> Add to Cart';
  box.appendChild(btn);
});

let cartCount = 0;
const cartPopup = document.createElement('div');
cartPopup.className = 'cart-popup';
document.body.appendChild(cartPopup);

document.addEventListener('click', e => {
  if (e.target.closest('.add-cart-btn')) {
    cartCount++;
    cartPopup.textContent = `🛒 Item added to cart (${cartCount})`;
    cartPopup.style.display = 'block';
    setTimeout(() => { cartPopup.style.display = 'none'; }, 2000);
  }
});
document.addEventListener('click', e => {
  const heart = e.target.closest('.wishlist-icon');
  if (heart) {
    heart.classList.toggle('added');
    const icon = heart.querySelector('i');
    icon.classList.toggle('fa-heart');
    icon.classList.toggle('fa-heart-o');
    heart.style.background = heart.classList.contains('added')
      ? '#ff4b5c'
      : 'rgba(255,255,255,0.85)';
  }
});
const reviewList = document.getElementById('reviews');
const reviewBtn = document.getElementById('submit-review');
if (reviewBtn) {
  reviewBtn.addEventListener('click', () => {
    const text = document.getElementById('review-text').value.trim();
    if (text) {
      const li = document.createElement('li');
      li.textContent = text;
      reviewList.prepend(li);
      document.getElementById('review-text').value = '';
    } else {
      alert('Please write a review first!');
    }
  });
}
 document.addEventListener('click', e => {
  if (e.target.classList.contains('report-btn')) {
    alert('Thank you for reporting this item. Our team will review it shortly.');
  }
});

