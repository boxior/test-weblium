require('../utils/fontawesome-free-5.0.3/svg-with-js/js/fontawesome-all.min');
require('slick-carousel');

// require("parsleyjs");
require('parsleyjs/dist/parsley');
require('parsleyjs/dist/i18n/en');
require("jquery-mask-plugin");

const header = require('../layouts/header/header');
const pageHome = require('../pages/page-schedule/page-schedule');


const pages = require('../pages/pages');

$(function () {
    header.init();
    pageHome.init();

    pages.init();
});