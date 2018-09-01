images = document.getElementsByTagName('img');

for (var i = 0; i < images.length; i++) {
  images[i].onclick = function(element) {
    element.stopPropagation()
    chrome.storage.sync.get('webhook', function(data) {
      console.log("Sending message: "+element.target.src+" to webhook: "+data.webhook)
      var xhr = new XMLHttpRequest();
      xhr.open("POST", data.webhook, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({
        content: element.target.src
      }));
      for (var i = 0; i < images.length; i++) {
        images[i].onclick = function(){return}
      }
    });
  };
}

var clickBlockingElems = document.getElementsByClassName('_9AhH0');
for (var i = 0; i < clickBlockingElems.length; i++) {
  clickBlockingElems[i].remove()
}