var GRAY_ICON = './images/icon-gray.svg';

var cardButtonCallback = function(t) {
  return t.modal({
    title: 'Gestiona materials',
    url: 'product-manager.html', 
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