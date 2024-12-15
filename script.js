document.addEventListener('DOMContentLoaded', function() {
    const addOrderBtn = document.getElementById('add-order-btn');
    const orderList = document.getElementById('order-list');
    const exportBtn = document.getElementById('export-btn');
    const currentDate = document.getElementById('current-date');

    currentDate.textContent = new Date().toLocaleDateString();

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

        const link = document.createElement('a');
        link.setAttribute('href', encodeURI(csvContent));
        link.setAttribute('download', `VENTAS_${new Date().toLocaleDateString()}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
