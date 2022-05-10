var paragraph = document.createElement('P');
paragraph.textContent = 'The DOM is the bomb!';
// add to the document
document.body.appendChild(paragraph);

var div = document.createElement('DIV');
div.style.height = '100vh';

//add div to document
document.body.appendChild(div);

div.addEventListener('mousemove', function(event) {
    console.log(event);
    var x = event.clientX;
    var y = event.clientY;
    div.textContent = x + ' , ' + y;
    div.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
});
