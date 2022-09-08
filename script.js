/* -----------------GSap Animation----------------- */

gsap.to (".header_letter", {duration:2, delay:0.5, rotation:360})

			/* -----------------JS----------------- */
				/* ---------Photos JS---------- */
const photos = document.querySelectorAll(".main_photo");
const title = document.querySelectorAll(".main_title");

photos.forEach(item => {
	item.addEventListener("mouseover", ()=>{
		removeFocus();
		item.classList.add("photo_enlarge");
	
	})

	removeFocus = ()=>{
		photos.forEach(item =>{
			item.classList.remove("photo_enlarge")
		})
	}
	
})
				/* ---------type Header Menu JS---------- */
const typeMenu = "Your dinner menu";
let i = 0;
const speed = 100;
function type(){
	if (i <= typeMenu.length){
		document.querySelector(".type_menu").textContent+=typeMenu.charAt(i);
		i++;
		setTimeout(type, speed)
	}
}

type();

