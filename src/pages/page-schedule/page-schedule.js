function init() {

    let $bodyDay = document.querySelectorAll(".section__day");
    let $bodyItem = document.querySelector(".section__item");
    let $navBtn = document.querySelectorAll(".navigation__btn");
    let $pageSchedule = document.querySelector(".page-schedule");

    //проверка на наличие класса нужной страницы
    if (!$pageSchedule) {
        return false;
    }

    //создаем класс Акордион
    class Accordion {
        constructor(accordionHead, accordionParent) {

            this.accordionHead = accordionHead;
            this.accordionParent = accordionParent;
        }

        accordionElToggle() {

            let app = {
                accordionHead: this.accordionHead,
                accordionParent: this.accordionParent,

                addClass: function () { //функция добавления класса open
                    app.removeClass(this);
                    this.classList.toggle("open");
                },
                clickAddClass: function () { //добавляем клас open ко вкладке по которой кликаем
                    app.accordionHead.forEach(function (item) {
                        item.addEventListener("click", app.addClass);
                    });
                },
                removeClass: function (self) { //удаляет класс open с вкладок
                    if (!self.classList.contains("open")) {
                        app.accordionHead.forEach(function (item) {
                            item.classList.remove("open");
                        });
                    }
                },
                closeAllAcordions: function () { //закрывает открытые вкладки
                    document.addEventListener("click", function (e) {
                        if (!e.target.closest(`.${app.accordionParent.className}`)) {
                            app.accordionHead.forEach(function (item) {
                                item.classList.remove("open");
                            });
                        }
                    });
                }
            };
            app.clickAddClass();
            app.closeAllAcordions();
        }
    }

    //создаем класс Состояния
    class States {

        constructor(btnWithAttrClasses, parentWrapper) {
            this.btnWithAttrClasses = btnWithAttrClasses;
            this.parentWrapper = parentWrapper;

        }

        showActiveState() {

            let app = {
                arrDataAttr: [],
                currentClass: "",
                btnWithAttrClasses: this.btnWithAttrClasses,
                parentWrapper: this.parentWrapper,

                removeDataClasses: function () { //удаляем ранее добавленные классы состояний
                    app.arrDataAttr.forEach(function (item) {
                        app.parentWrapper.classList.remove(item);
                    });
                },
                addClasses: function (e) {
                    //добавляем класс на кнопку состояния
                    app.btnWithAttrClasses.forEach(function (item) {
                        item.classList.remove("active-state");
                    });
                    e.target.classList.add("active-state");

                    //добавляем класс на родителя таблицы
                    app.currentClass = e.target.dataset.class;
                    app.removeDataClasses();
                    app.parentWrapper.classList.add(app.currentClass);
                },
                getDataAttrArr: function () { //получаем масив классов состояний
                    app.btnWithAttrClasses.forEach(function (item) {
                        app.arrDataAttr.push(item.dataset.class);
                    });
                },
                getDataAttr: function () { //получаем класс при клике на кнопку состояния
                    app.btnWithAttrClasses.forEach(function (item) {
                        item.addEventListener("click", app.addClasses);
                    });
                }

            };
            app.getDataAttrArr();
            app.getDataAttr();
        }
    }

    //создаем объект аккордеон
    let accordion = new Accordion($bodyDay, $bodyItem);
    accordion.accordionElToggle();

    //создаем объект состояние
    let state = new States($navBtn, $pageSchedule);
    state.showActiveState();
}

module.exports = {
    init: init
};