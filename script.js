document.addEventListener('DOMContentLoaded', function() {
    const addProductBtn = document.getElementById('add-product-btn');
    const productList = document.getElementById('product-list');
    const addOrderBtn = document.getElementById('add-order-btn');
    const orderList = document.getElementById('order-list');
    const exportBtn = document.getElementById('export-btn');
    const currentDate = document.getElementById('current-date');

    currentDate.textContent = new Date().toLocaleDateString();

    addProductBtn.addEventListener('click', function() {
        const productName = document.getElementById('product-select').value;
        const productPrice = document.getElementById('product-price').value.trim();
        const productObservations = document.getElementById('product-observations').value.trim();

        if (productName && productPrice) {
            const productItem = document.createElement('div');
            productItem.textContent = `${productName} - $${productPrice} - ${productObservations}`;
            productList.appendChild(productItem);

            document.getElementById('product-price').value = '';
            document.getElementById('product-observations').value = '';
        }
    });

    addOrderBtn.addEventListener('click', function() {
        const customerName = document.getElementById('customer-name').value.trim();
        const selectedProduct = document.getElementById('order-product-select').value;
        const orderPrice = document.getElementById('order-price').value.trim();
        const orderObservations = document.getElementById('order-observations').value.trim();

        if (customerName && selectedProduct && orderPrice) {
            const orderItem = document.createElement('div');
            orderItem.textContent = `${customerName} - ${selectedProduct} - $${orderPrice} - ${orderObservations}`;
            orderList.appendChild(orderItem);

            document.getElementById('customer-name').value = '';
            document.getElementById('order-price').value = '';
            document.getElementById('order-observations').value = '';
        } else {
            alert("Por favor, completa todos los campos antes de agregar el pedido.");
        }
    });

    exportBtn.addEventListener('click', function() {
        const rows = [['Nombre del Cliente', 'Producto', 'Valor', 'Observaciones']];
        const orderItems = orderList.querySelectorAll('div');

        orderItems.forEach(item => {
            const columns = item.textContent.split(' - ');
            rows.push(columns);
        });

        let csvContent = 'data:text/csv;charset=utf-8,';
        rows.forEach(row => {
            csvContent += row.join(',') + '\r\n';
        });

        const link[_{{{CITATION{{{_1{](https://github.com/la9una/web/tree/ba1073ae044ebb7b538a3b13f0f9598f7c410bb6/docs%2Fbootstrap%2Falignci.md)[_{{{CITATION{{{_2{](https://github.com/CLONATORE/markdowns/tree/82cfb03683ceb807a7091de48045e6a7485acd72/webpack.md)
