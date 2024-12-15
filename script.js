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
            
            // Crear elementos para cada parte del pedido
            const nameElement = document.createElement('span');
            const productElement = document.createElement('span');
            const priceElement = document.createElement('span');
            const observationsElement = document.createElement('span');

            // Asignar contenido a cada elemento
            nameElement.textContent = customerName;
            productElement.textContent = selectedProduct;
            priceElement.textContent = `$${orderPrice}`;
            observationsElement.textContent = orderObservations;

            // Añadir elementos al elemento principal del pedido
            orderItem.appendChild(nameElement);
            orderItem.appendChild(productElement);
            orderItem.appendChild(priceElement);
            orderItem.appendChild(observationsElement);

            // Añadir el pedido a la lista de pedidos
            orderList.appendChild(orderItem);

            // Limpiar campos de entrada
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
            const columns = [
                item.children[0].textContent,
                item.children[1].textContent,
                item.children[2].textContent,
                item.children[3].textContent
            ];
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

