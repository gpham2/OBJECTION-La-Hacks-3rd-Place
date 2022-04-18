document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
      chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        var tabURL = tabs[0].url;
        var json = JSON.stringify({url: tabURL});
        f.action = 'http://gtmetrix.com/analyze.html?bm';
        f.method = 'post';
        console.log(json);
    });
      /*
      chrome.tabs.query({
          active: true,
          lastFocusedWindow: true
      }, function(tab) {
        url = tab[0].url;
        console.log(url);
        /*
        var d = document;
        var f = d.createElement('form');
        //
        var i = d.createElement('input');
        i.type = 'hidden';
        i.name = 'url';
        i.value = tab[0].url;
        f.appendChild(i);
        d.body.appendChild(f);
        f.submit();
        console.log(f);
        
      });
      */
      
    });
  });