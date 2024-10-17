var GRAY_ICON = './images/icon-gray.svg';

var cardButtonCallback = function(t) {
  // Get existing products from the card
  return t.get('card', 'shared', 'products', []).then(function(products) {
    // Prepare the items for the popup
    var items = products.map(function(product) {
      return {
        text: `${product.name} (Quantity: ${product.quantity || 1})`, // Display product name with quantity
        callback: function(t) {
          // On click, open the product manager popup to edit or remove the product
          return t.popup({
            title: `Manage ${product.name}`,
            url: 'product-manager.html',
            args: { productId: product.id } // Pass the product ID for management
          });
        }
      };
    });

    // Display the items in a Trello searchable popup
    return t.popup({
      title: 'Manage Materials',
      items: items, // Trello will search based on this
      search: {
        count: 5, 
        placeholder: 'Search Materials',
        empty: 'No materials found'
      }
    });
  });
}

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: GRAY_ICON,
      text: 'Materials',
      callback: cardButtonCallback,
    }];
  }
});

console.log('Trellotest loaded by: ' + document.referrer);