console.log(
  "При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\nAccordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\nВ разделе contacts реализован select с выбором городов +25"
);

console.log("Total score: 125");

const burger = document?.querySelector(".nav__burger");
const menu = document?.querySelector(".nav-menu-list");
const bg = document?.querySelector(".bgBurger");
const body = document.body;
const navItem = document?.querySelectorAll(".nav-menu-list__item");

// Появление меню по клику на бургер
burger.addEventListener("click", () => {
  burger.classList.toggle("_active");
  menu.classList.toggle("_active");
  bg.classList.toggle("_active");
  body.classList.toggle("_stop--scroll");
});
// исчезновение меню по клику на ссылку
navItem.forEach((el) => {
  el.addEventListener("click", () => {
    burger.classList.remove("_active");
    menu.classList.remove("_active");
    body.classList.remove("_stop--scroll");
    bg.classList.remove("_active");
  });
});
// исчезновение меню по клику на фон
bg.addEventListener("click", () => {
  burger.classList.remove("_active");
  menu.classList.remove("_active");
  body.classList.remove("_stop--scroll");
  bg.classList.remove("_active");
});

//  accordion prices
const buttonPrice = document?.querySelectorAll(".prices-info-list__item");
const accordion = document?.querySelectorAll(".prices-accordion");

for (let i = 0; i < buttonPrice.length; i++) {
  buttonPrice[i].addEventListener("click", function (e) {
    if (e.target.nextElementSibling.classList.contains("show")) {
      e.target.classList.remove("active");
      e.target.nextElementSibling.classList.remove("show");
    } else {
      for (let j = 0; j < accordion.length; j++) {
        accordion[j].classList.remove("show");
      }
      for (let z = 0; z < buttonPrice.length; z++) {
        buttonPrice[z].classList.remove("active");
      }
      this.nextElementSibling.classList.toggle("show");
      e.target.classList.toggle("active");
    }
  });
}
// service
const gardenButton = document?.querySelector(".gardenButton");
const lawnButton = document?.querySelector(".lawnButton");
const plantingButton = document?.querySelector(".plantingButton");
const listItem = document?.querySelectorAll(".service-list-item");
const allButtons = document?.querySelectorAll(".service-info-buttons__item");

let activeButtons = [];
for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function () {
    // если кнопка не содержит класс активной
    if (!allButtons[i].classList.contains("activeButton")) {
      /* и если в массиве меньше двух активных кнопок, то добавляем
      ее в массив, добавляем класс активной */
      if (activeButtons.length < 2) {
        activeButtons.push(allButtons[i]);
        allButtons[i].classList.add("activeButton");
      } else {
        /* если в массиве уже две активные кнопки, то
     убираем из массива первую и удаляем у нее класс активной,
    добавляем в массив новую кнопку и класс активной
     */
        activeButtons.shift().classList.remove("activeButton");
        activeButtons.push(allButtons[i]);
        allButtons[i].classList.add("activeButton");
      }
    } else {
      /* если кнопка уже активна, фильртуем массив убирай текущую кнопку нажатия,
  и убираем у нее класс автивной */
      activeButtons = activeButtons.filter(
        (button) => button !== allButtons[i]
      );
      allButtons[i].classList.remove("activeButton");
    }

    // Удаление блюра активной кнопки
    listItem.forEach((el) => {
      /*добавляем всем итемам блюр по нажатию на кнопку, затем убираем блюр,
    если кнопка содержит статус активной. */
      el.classList.add("blur");
      if (
        gardenButton.classList.contains("activeButton") &&
        el.classList.contains("garden")
      ) {
        el.classList.remove("blur");
      }
      if (
        lawnButton.classList.contains("activeButton") &&
        el.classList.contains("lawn")
      ) {
        el.classList.remove("blur");
      }
      if (
        plantingButton.classList.contains("activeButton") &&
        el.classList.contains("planting")
      ) {
        el.classList.remove("blur");
      }
      // Убираем блюр, если нет активной кнопки
      if (
        !gardenButton.classList.contains("activeButton") &&
        !lawnButton.classList.contains("activeButton") &&
        !plantingButton.classList.contains("activeButton")
      ) {
        el.classList.remove("blur");
      }
    });
  });
}

// Contact us
const selectBody = document.querySelector(".select__body");
const selectHeader = document.querySelector(".select__header");
const selectItem = document.querySelectorAll(".select__item");
const adress = document.querySelector(".adress");
const ContactImg = document.querySelector(".contacts__img");

// Открытие и закрытие списка
let select = function () {
  let headerText = selectHeader.innerText;
  let pageWidth = document.documentElement.scrollWidth;
  // Если кликаем по city класс активности убирается
  selectHeader.addEventListener("click", () => {
    pageWidth = document.documentElement.scrollWidth;

    console.log(pageWidth);
    selectBody.classList.toggle("hidden");
    adress.classList.add("hidden");
    if (headerText === "City") {
      selectHeader.classList.toggle("active");
    }
    if (adress.classList.contains("hidden") && pageWidth < 576) {
      ContactImg.classList.remove("hidden");
    }
    if (adress.classList.contains("hidden") && pageWidth > 576) {
      ContactImg.classList.remove("img__margin");
      ContactImg.classList.remove("hidden");
    }
  });
  // кликаем по итему, появляется класс activ и значение города меняется
  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectChoose() {
    selectBody.classList.toggle("hidden");
    selectHeader.classList.add("active");

    let text = this.innerHTML;
    let currentText = document.querySelector(".select__current");
    currentText.innerHTML = text;
    headerText = currentText.innerHTML;
    adress.classList.remove("hidden");

    if (!adress.classList.contains("hidden") && pageWidth < 576) {
      ContactImg.classList.add("hidden");
    }
    if (!adress.classList.contains("hidden") && pageWidth > 576) {
      ContactImg.classList.add("img__margin");
    }

    let dataCanand = [
      "Canandaigua, NY",
      "+1	585	393 0001",
      "151 Charlotte Street",
    ];
    let dataYonk = ["Yonkers, NY", "+1	914	678 0003", "511 Warburton Ave"];
    let dataSherill = ["Sherrill, NY", "+1	315	908 0004", "14 WEST Noyes BLVD"];
    let dataAdressNYC = [
      "New York City",
      "+1	212	456 0002",
      "9 East 91st Street",
    ];

    let currentCity = document.querySelector(".city__value");
    let currentPhone = document.querySelector(".phone__value");
    let currentAdress = document.querySelector(".adress__value");

    if (text === dataSherill[0]) {
      currentCity.innerText = dataSherill[0];
      currentPhone.innerText = dataSherill[1];
      currentAdress.innerText = dataSherill[2];
    }
    if (text === dataCanand[0]) {
      currentCity.innerText = dataCanand[0];
      currentPhone.innerText = dataCanand[1];
      currentAdress.innerText = dataCanand[2];
    }
    if (text === dataYonk[0]) {
      currentCity.innerText = dataYonk[0];
      currentPhone.innerText = dataYonk[1];
      currentAdress.innerText = dataYonk[2];
    }
    if (text === dataAdressNYC[0]) {
      currentCity.innerText = dataAdressNYC[0];
      currentPhone.innerText = dataAdressNYC[1];
      currentAdress.innerText = dataAdressNYC[2];
    }

    const tel = document.querySelector(".tel");
    tel.action = `tel:${currentPhone.innerText}`;
    console.log(tel)
  }
};

select();
