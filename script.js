document.addEventListener('DOMContentLoaded', function() {
    const addProductBtn = document.getElementById('add-product-btn');
    const productList = document.getElementById('product-list');
    const addOrderBtn = document.getElementById('add-order-btn');
    const orderList = document.getElementById('order-list');
    const exportBtn = document.getElementById('export-btn');
    const currentDate = document.getElementById('current-date');

    currentDate.textContent = new Date().toLocaleDateString();

    // Evento para añadir productos a la lista de productos
    addProductBtn.addEventListener('click', function() {
        const productName = document.getElementById('product-select').value;
        const productPrice = document.getElementById('product-price').value.trim();
        const productObservations = document.getElementById('product-observations').value.trim();

        if (productName && productPrice) {
            const productItem = document.createElement('div');
            productItem.innerHTML = `<span>${productName}</span> - <span>$${productPrice}</span> - <span>${productObservations}</span>`;
            productList.appendChild(productItem);

            document.getElementById('product-price').value = '';
            document.getElementById('product-observations').value = '';
        }
    });

    // Evento para añadir pedidos a la lista de pedidos
    addOrderBtn.addEventListener('click', function() {
        const customerName = document.getElementById('customer-name').value.trim();
        const selectedProduct = document.getElementById('order-product-select').value;
        const orderPrice = document.getElementById('order-price').value.trim();
        const orderObservations = document.getElementById('order-observations').value.trim();

        if (customerName && selectedProduct && orderPrice) {
            const orderItem = document.createElement('div');
            orderItem.innerHTML = `<span>${customerName}</span> - <span>${selectedProduct}</span> - <span>$${orderPrice}</span> - <span>${orderObservations}</span>`;
            orderList.appendChild(orderItem);

            document.getElementById('customer-name').value = '';
            document.getElementById('order-price').value = '';
            document.getElementById('order-observations').value = '';
        } else {
            alert("Por favor, completa todos los campos antes de agregar el pedido.");
        }
    });

    // Evento para exportar la lista de pedidos a un archivo CSV
    exportBtn.addEventListener('click', function() {
        const rows = [['Nombre del Cliente', 'Producto', 'Valor', 'Observaciones']];
        const orderItems = orderList.querySelectorAll('div');

        orderItems.forEach(item => {
            const columns = Array.from(item.querySelectorAll('span')).map(span => span.textContent);
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
