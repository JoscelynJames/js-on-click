console.log('hit');
document.body.addEventListener('click', function() {
   console.log('poop');
 });


 document.addEventListener('click', function(e) {
     e = e || window.event;
     var target = e.target || e.srcElement,
         text = target.textContent || text.innerText;
         console.log(text);
 }, false);
