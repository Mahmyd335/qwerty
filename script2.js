const btn1Gos = document.getElementById("btn1-gos")
const btn2Gos = document.getElementById("btn2-gos")
const sectionGos = document.getElementById("section-gos")

btn2Gos.addEventListener('click', () => {
  sectionGos.style.display = 'block'
  btn2Gos.style.background = 'white'
  btn1Gos.style.background = '#ebebeb'
  btn2Gos.style.zIndex = '1'
  btn1Gos.style.zIndex = '0'
})

btn1Gos.addEventListener('click', () => {
  sectionGos.style.display = 'none'
  btn1Gos.style.background = 'white'
  btn2Gos.style.background = '#ebebeb'
  btn1Gos.style.zIndex = '1'
  btn2Gos.style.zIndex = '0'
})  


const footerBtn1Gos = document.getElementById("footerBtn1-gos");
const windGos = document.getElementById("window-gos");
const closeBtnGos = document.getElementById("closeBtnGos");

footerBtn1Gos.addEventListener("click", () => {
  windGos.style.display = "flex";

  windGos.classList.remove("active");
  void windGos.offsetWidth;
  windGos.classList.add("active");
});

closeBtnGos.addEventListener("click", () => {
  windGos.classList.remove("active");

  setTimeout(() => {
    windGos.style.display = "none";
  }, 500);
});


const text4Gos = document.querySelector(".text4-gos");

function getRandomDigit() {
  return Math.floor(Math.random() * 10);
}

function getRandomNumberString(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += getRandomDigit();
  }
  return result;
}

footerBtn1Gos.addEventListener("click", () => {
  const length = text4Gos.textContent.length;
  text4Gos.textContent = getRandomNumberString(length);
});


const footerBtn2Gos = document.getElementById("footerBtn2-gos");

footerBtn2Gos.addEventListener("click", async () => {
  if (navigator.share && navigator.canShare) {
    try {
      const response = await fetch("090124552135-20251219143643327.pdf");
      const blob = await response.blob();
      const file = new File([blob], "example.pdf", {
        type: "application/pdf"
      });

      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "Поделиться PDF",
          files: [file]
        });
      } else {
        alert("Ваш браузер не поддерживает отправку файлов");
      }
    } catch (err) {
      console.error("Ошибка при шаринге PDF:", err);
    }
  } else {
    alert("Ваш браузер не поддерживает Web Share API");
  }
});


const footerBtn3Gos = document.getElementById("footerBtn3-gos");

const shareTextGos =
`Мұрат Мирас Манасұлы
040124552135
24.01.2004
16.10.2020
17.10.2030`;

footerBtn3Gos.addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Поделиться текстом',
        text: shareTextGos
      });
    } catch (err) {
      console.error('Ошибка при попытке поделиться:', err);
    }
  } else {
    alert('Ваш браузер не поддерживает Web Share API');
  }
});


const zoomAreaGos = document.querySelector('.con-section-gos');

let scaleGos = 1;
let startDistanceGos = 0;
let originXGos = 0;
let originYGos = 0;

zoomAreaGos.addEventListener('touchstart', e => {
  if (e.touches.length === 2) {
    startDistanceGos = getDistance(e.touches[0], e.touches[1]);

    const rect = zoomAreaGos.getBoundingClientRect();
    originXGos = ((e.touches[0].clientX + e.touches[1].clientX) / 2) - rect.left;
    originYGos = ((e.touches[0].clientY + e.touches[1].clientY) / 2) - rect.top;
  }
}, { passive: false });

zoomAreaGos.addEventListener('touchmove', e => {
  if (e.touches.length === 2) {
    e.preventDefault();

    const newDistance = getDistance(e.touches[0], e.touches[1]);
    scaleGos *= newDistance / startDistanceGos;
    scaleGos = Math.min(Math.max(scaleGos, 1), 5);

    zoomAreaGos.style.transformOrigin = `${originXGos}px ${originYGos}px`;
    zoomAreaGos.style.transform = `scale(${scaleGos})`;

    startDistanceGos = newDistance;
  }
}, { passive: false });

function getDistance(t1, t2) {
  return Math.hypot(
    t2.clientX - t1.clientX,
    t2.clientY - t1.clientY
  );
}














document.getElementById("btn-gos").addEventListener("click", function(){

	let loader = document.getElementById("loader-screen");
	let bar = document.querySelector(".loader-bar");
	let pre = document.getElementById("pre-section");
	let page = document.querySelector(".con-gos");

	/* СБРОС СОСТОЯНИЯ */

	bar.style.width = "0%";
	loader.classList.remove("show");
	page.classList.remove("show");
	pre.style.display = "none";


	/* выезжает белый экран */

	setTimeout(()=>{
		loader.classList.add("show");
	},50);


	/* запуск загрузки */

	setTimeout(()=>{
		bar.style.width = "100%";
	},400);


	/* показывается pre-section */

	setTimeout(()=>{
		pre.style.display = "block";
	},900);


	/* открывается основная страница */

	setTimeout(()=>{
		page.classList.add("show");
	},1500);

});


document.getElementById("x-gos").addEventListener("click", function(){

	let loader = document.getElementById("loader-screen");
	let pre = document.getElementById("pre-section");
	let page = document.querySelector(".con-gos");

	/* закрываем основную страницу */

	page.classList.remove("show");

	/* сразу убираем лишние секции */

	loader.classList.remove("show");
	pre.style.display = "none";

});











const saveBtn = document.getElementById("saveBtn")
const inputs = document.querySelectorAll(".block-text2-gos")

// ===== фото документов: вставить можно один раз, потом заменить нельзя =====
function compressImage(file, maxSide, quality){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader()
    reader.onerror = reject
    reader.onload = e => {
      const im = new Image()
      im.onerror = reject
      im.onload = () => {
        const k = Math.min(1, maxSide / Math.max(im.width, im.height))
        const c = document.createElement("canvas")
        c.width = Math.round(im.width * k)
        c.height = Math.round(im.height * k)
        const ctx = c.getContext("2d")
        ctx.fillStyle = "#fff"
        ctx.fillRect(0, 0, c.width, c.height)
        ctx.drawImage(im, 0, 0, c.width, c.height)
        resolve(c.toDataURL("image/jpeg", quality))
      }
      im.src = e.target.result
    }
    reader.readAsDataURL(file)
  })
}

function initDocPhoto(n){
  const key = "docImg" + n
  const img = document.getElementById("docImg" + n)
  const input = document.getElementById("imgUpload" + n)
  const btn = document.getElementById("docAddBtn" + n)

  function showLocked(src){
    img.src = src
    img.style.display = "block"
    btn.style.display = "none"
    input.disabled = true
  }

  // уже сохранённое фото - показываем и блокируем замену
  const saved = localStorage.getItem(key)
  if(saved){
    showLocked(saved)
  }

  btn.addEventListener("click", () => {
    if(localStorage.getItem(key)) return
    input.click()
  })

  input.addEventListener("change", async function(){
    const file = this.files[0]
    if(!file || localStorage.getItem(key)) return

    try{
      const data = await compressImage(file, 1600, 0.85)
      localStorage.setItem(key, data)   // сохраняем навсегда
      showLocked(data)
    }catch(err){
      console.error("Не удалось сохранить фото:", err)
      alert("Не удалось сохранить фото. Попробуйте другое изображение.")
    }
    this.value = ""
  })
}

initDocPhoto(1)

// просим браузер не удалять сохранённые данные автоматически
if(navigator.storage && navigator.storage.persist){
  navigator.storage.persist().catch(()=>{})
}


// кнопка сохранить
saveBtn.addEventListener("click", function(){

inputs.forEach((inp, index)=>{

localStorage.setItem("input"+index, inp.value)

inp.readOnly = true

})

// сохраняем panelInput
const panelInputEl = document.getElementById("panelInput")
if(panelInputEl){
  localStorage.setItem("panelText", panelInputEl.value)
  localStorage.setItem("panelLocked", "true")
  panelInputEl.disabled = true
}

localStorage.setItem("locked", "true")

saveBtn.style.display = "none"

})


// загрузка данных после обновления
window.addEventListener("load", ()=>{




inputs.forEach((input, index)=>{

const savedText = localStorage.getItem("input"+index)

if(savedText){
input.value = savedText
}

})


if(localStorage.getItem("locked") === "true"){

inputs.forEach(input=>{
input.readOnly = true
})

saveBtn.style.display = "none"

}

})






const input = document.getElementById("panelInput")

// загрузка текста panelInput
const savedPanelText = localStorage.getItem("panelText")
const isPanelLocked = localStorage.getItem("panelLocked")

if(savedPanelText){
    input.value = savedPanelText
}

if(isPanelLocked === "true"){
    input.disabled = true
}

// автосохранение при вводе
input.addEventListener("input", () => {
    localStorage.setItem("panelText", input.value)
})



