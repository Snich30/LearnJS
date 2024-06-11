// var text = "Hello, World!"; // Ваш текст
// 	var delay = 100; // Скорость печатания
// 	var elem = document.getElementById("result"); // id элемента для вывода результата

// 	var print_text = function(text, elem, delay) {
		
// 		if(text.length > 0) {
		
// 			elem.innerHTML += text[0];
			
// 			setTimeout(
			
// 				function() {
				
// 					print_text(text.slice(1), elem, delay);  
					
// 				}, delay
				
// 			);
			
// 		}
		
// 	}

// 	print_text(text, elem, delay);

const textToType = "Привет! Я Learning JavaScript :) Я помогу изучить тебе основы JavaScript !";

let index = 0;

function typeWriter() {
  document.getElementById("output").textContent += textToType[index];
  index++;

  if (index < textToType.length) {
    setTimeout(typeWriter, 60);
  }
}

typeWriter(); 

