// تحكم في زيادة ونقصان الكمية
document.querySelectorAll('.product').forEach(function(product) {
    const minus = product.querySelector('.minus');
    const plus = product.querySelector('.plus');
    const quantitySpan = product.querySelector('.quantity');
    let quantity = 1;
    if (minus && plus && quantitySpan) {
        minus.onclick = function() {
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
            }
        };
        plus.onclick = function() {
            quantity++;
            quantitySpan.textContent = quantity;
        };
    }
});// تحكم في زيادة ونقصان الكمية
document.querySelectorAll('.product').forEach(function(product) {
    const minus = product.querySelector('.minus');
    const plus = product.querySelector('.plus');
    const quantitySpan = product.querySelector('.quantity');
    let quantity = 1;
    if (minus && plus && quantitySpan) {
        minus.onclick = function() {
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
            }
        };
        plus.onclick = function() {
            quantity++;
            quantitySpan.textContent = quantity;
        };
    }
});

// بيانات السلة
document.que// تحكم في زيادة ونقصان الكمية
document.querySelectorAll('.product').forEach(function(product) {
    const minus = product.querySelector('.minus');
    const plus = product.querySelector('.plus');
    const quantitySpan = product.querySelector('.quantity');
    let quantity = 1;
    if (minus && plus && quantitySpan) {
        minus.onclick = function() {
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
            }
        };
        plus.onclick = function() {
            quantity++;
            quantitySpan.textContent = quantity;
        };
    }
});

// بيانات السلة
// let cart = []; // Removed duplicate declaration

// تحديث عداد السلة
function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// تحديث عرض السلة
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<li>السلة فارغة</li>';
        return;
    }
    cart.forEach((item, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.title} × ${item.quantity}</span>
            <button class="remove-btn" data-idx="${idx}">حذف</button>
        `;
        cartItems.appendChild(li);
    });
}

// إضافة منتج للسلة
document.querySelectorAll('.add-to-cart').forEach(function(btn) {
    btn.onclick = function() {
        const product = btn.closest('.product');
        const title = product.querySelector('.product-title').textContent;
        let quantity = 1;
        const quantitySpan = product.querySelector('.quantity');
        if (quantitySpan) quantity = parseInt(quantitySpan.textContent);

        // تحقق إذا المنتج موجود بالفعل
        const existing = cart.find(item => item.title === title);
        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({ title, quantity });
        }
        updateCartCount();
        renderCart();
    };
});

// فتح السلة
document.querySelector('.cart').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('cartModal').style.display = 'block';
    renderCart();
});

// غلق السلة
document.getElementById('closeCart').onclick = function() {
    document.getElementById('cartModal').style.display = 'none';
};

// حذف منتج من السلة
document.getElementById('cartItems').onclick = function(e) {
    if (e.target.classList.contains('remove-btn')) {
        const idx = e.target.getAttribute('data-idx');
        cart.splice(idx, 1);
        updateCartCount();
        renderCart();
    }
};

// زر تأكيد الطلب
document.getElementById('confirmOrder').onclick = function() {
    if (cart.length === 0) {
        alert('السلة فارغة!');
    } else {
        alert('تم إرسال طلبك بنجاح!');
        cart = [];
        updateCartCount();
        renderCart();
        document.getElementById('cartModal').style.display = 'none';
    }
};ySelector('.cart').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('cartModal').style.display = 'block';
    renderCart();
});// تحكم في زيادة ونقصان الكمية
document.querySelectorAll('.product').forEach(function(product) {
    const minus = product.querySelector('.minus');
    const plus = product.querySelector('.plus');
    const quantitySpan = product.querySelector('.quantity');
    let quantity = 1;
    if (minus && plus && quantitySpan) {
        minus.onclick = function() {
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
            }
        };
        plus.onclick = function() {
            quantity++;
            quantitySpan.textContent = quantity;
        };
    }
});

// بيانات السلة
let cart = [];

// تحديث عداد السلة
function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// تحديث عرض السلة
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<li>السلة فارغة</li>';
        return;
    }
    cart.forEach((item, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.title} × ${item.quantity}</span>
            <button class="remove-btn" data-idx="${idx}">حذف</button>
        `;
        cartItems.appendChild(li);
    });
}

// إضافة منتج للسلة
document.querySelectorAll('.add-to-cart').forEach(function(btn) {
    btn.onclick = function() {
        const product = btn.closest('.product');
        const title = product.querySelector('.product-title').textContent;
        let quantity = 1;
        const quantitySpan = product.querySelector('.quantity');
        if (quantitySpan) quantity = parseInt(quantitySpan.textContent);

        // تحقق إذا المنتج موجود بالفعل
        const existing = cart.find(item => item.title === title);
        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({ title, quantity });
        }
        updateCartCount();
        renderCart();
    };
});

// فتح السلة
document.querySelector('.cart').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('cartModal').style.display = 'block';
    renderCart();
});

// غلق السلة
document.getElementById('closeCart').onclick = function() {
    document.getElementById('cartModal').style.display = 'none';
};

// حذف منتج من السلة
document.getElementById('cartItems').onclick = function(e) {
    if (e.target.classList.contains('remove-btn')) {
        const idx = e.target.getAttribute('data-idx');
        cart.splice(idx, 1);
        updateCartCount();
        renderCart();
    }
};

// زر تأكيد الطلب
document.getElementById('confirmOrder').onclick = function() {
    if (cart.length === 0) {
        alert('السلة فارغة!');
    } else {
        alert('تم إرسال طلبك بنجاح!');
        cart = [];
        updateCartCount();
        renderCart();
        document.getElementById('cartModal').style.display = 'none';
    }
};

// تحديث عداد السلة
function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// تحديث عرض السلة
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<li>السلة فارغة</li>';
        return;
    }
    cart.forEach((item, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.title} × ${item.quantity}</span>
            <button class="remove-btn" data-idx="${idx}">حذف</button>
        `;
        cartItems.appendChild(li);
    });
}

// إضافة منتج للسلة
document.querySelectorAll('.add-to-cart').forEach(function(btn) {
    btn.onclick = function() {
        const product = btn.closest('.product');
        const title = product.querySelector('.product-title').textContent;
        let quantity = 1;
        const quantitySpan = product.querySelector('.quantity');
        if (quantitySpan) quantity = parseInt(quantitySpan.textContent);

        // تحقق إذا المنتج موجود بالفعل
        const existing = cart.find(item => item.title === title);
        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({ title, quantity });
        }
        updateCartCount();
        renderCart();
    };
});

// فتح السلة
document.querySelector('.cart').onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('cartModal').style.display = 'block';
    renderCart();
};

// غلق السلة
document.getElementById('closeCart').onclick = function() {
    document.getElementById('cartModal').style.display = 'none';
};

// حذف منتج من السلة
document.getElementById('cartItems').onclick = function(e) {
    if (e.target.classList.contains('remove-btn')) {
        const idx = e.target.getAttribute('data-idx');
        cart.splice(idx, 1);
        updateCartCount();
        renderCart();
    }
};

// زر تأكيد الطلب
document.getElementById('confirmOrder').onclick = function() {
    if (cart.length === 0) {
        alert('السلة فارغة!');
    } else {
        alert('تم إرسال طلبك بنجاح!');
        cart = [];
        updateCartCount();
        renderCart();
        document.getElementById('cartModal').style.display = 'none';
    }
};