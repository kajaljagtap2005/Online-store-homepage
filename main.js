document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productGrid');
    const toast = document.getElementById('toast');
    const wishlistIcon = document.getElementById('wishlistCount');
    let currentWishlist = 0;
    let minRating = 0;

    // --- Core Rendering Function ---
    function render(list) {
        grid.innerHTML = list.map(p => `
            <div class="product-card bg-white rounded-[2.5rem] p-5 border border-slate-100 relative group">
                <button onclick="handleLike(this)" class="heart-btn absolute top-8 right-8 z-10 text-slate-300 text-xl transition-all">
                    <i class="fas fa-heart"></i>
                </button>
                <div class="h-64 rounded-[2rem] overflow-hidden mb-6">
                    <img src="${p.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                </div>
                <div class="flex justify-between items-center mb-3">
                    <span class="text-[10px] font-black text-indigo-500 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-lg">${p.category}</span>
                    <div class="flex gap-0.5">${'<i class="fas fa-star text-yellow-400 text-[10px]"></i>'.repeat(p.rating)}</div>
                </div>
                <h3 class="text-xl font-bold text-slate-800 mb-6">${p.name}</h3>
                <div class="flex justify-between items-center">
                    <span class="text-3xl font-black text-slate-900">$${p.price}</span>
                    <button onclick="triggerToast('Successfully added ${p.name} to cart!')" class="bg-indigo-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-slate-900 shadow-lg shadow-indigo-100 transition-all active:scale-90">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
