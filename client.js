var t = TrelloPowerUp.initialize({
  // Define card buttons
  'card-buttons': function(t, options) {
    return [{
      text: 'Materials',
      callback: function(t) {
        // Show a popup when the button is clicked
        return t.popup({
          title: 'Gestiona materials',
          url: './product-manager.html',  // The popup points to an HTML page
          height: 250
        });
      }
    }];
  }
});

// Optionally, you can define other capabilities (badges, board buttons, etc.)
// Example: Adding a badge
// 'card-badges': function(t, card) {
//   return t.get('card', 'shared', 'products', []).then(function(products) {
//     return [{
//       text: products.length + ' products',
//       color: 'green'
//     }];
//   });
// }
