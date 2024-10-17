var GRAY_ICON = './images/icon-gray.svg';

var cardButtonCallback = function(t) {
  // Show a popup when the button is clicked
  return t.popup({
    title: 'Gestiona materials',
    url: 'product-manager.html',  // The popup points to an HTML page
    height: 250
  });
}

TrelloPowerUp.initialize({
  // Define card buttons
  'card-buttons': function(t, options) {
    return [{
      icon: GRAY_ICON,
      text: 'Materials',
      callback: cardButtonCallback,
    }];
  }
});

console.log('Trellotest loaded by: ' + document.referrer);