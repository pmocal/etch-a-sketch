const container = document.querySelector('#container');
var content1;
for (i = 0; i < 380; i++) {
	content1 = document.createElement('div');
    content1.className = 'h';
	content1.style.backgroundColor = getRandomColor();
    content1.onmouseover = 
     function() { 
         this.style.backgroundColor=getRandomColor();
         this.style.opacity = 0.1;
     };
	container.appendChild(content1);
}
function myFunction() {
 var dimension = prompt("Enter a number less than 100", "20"); //10
 if (dimension == null || dimension > 100) {
    dimension = 20;
 }
 const container = document.querySelector('#container');
 container.parentNode.removeChild(container);
 var content;
 content = document.createElement('div');
 content.setAttribute('id', 'container');
 document.body.appendChild(content);
 var height = 95/dimension; //9.5
 var width = 100/dimension; //10
 var content1;
 for (i = 0; i < dimension ** 2; i++) {
    content1 = document.createElement('div');
    content1.style.height = height + "%";
    content1.style.width = width + "%";
    content1.style.backgroundColor = getRandomColor();
    content1.onmouseover = 
     function() { 
         this.style.backgroundColor=getRandomColor();
         this.style.opacity = 0.1; 
     };
    content.appendChild(content1);
 }
}
function getRandomColor() {
 var letters = '0123456789ABCDEF';
 var color = '#';
 for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
 }  
 return color;
}