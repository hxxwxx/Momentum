const images = ['0.jpg','1.jpg','2.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','22.jpg','23.jpg'];
const todaysImage=images[Math.floor(Math.random()*images.length)];
const container = document.querySelector("#container");
const image = document.createElement('img');
image.src=`../images/${todaysImage}`;
container.appendChild(image);
