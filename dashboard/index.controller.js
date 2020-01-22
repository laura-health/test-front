(function () {
    'use strict';

    angular
        .module('app')
        .controller('Dashboard.IndexController', Controller);

    function Controller() {
        var viewModel = this;

        viewModel.left_menu_list = [
            {
                "title": "Dashboard",
                "icon": "fa-dashboard",
                "link": "/"
            },
            {
                "title": "Performance",
                "icon": "fa-line-chart",
                "link": "/performance"
            },
            {
                "title": "Articles",
                "icon": "fa-book",
                "link": "/articles"
            },
            {
                "title": "Messages",
                "icon": "fa-commenting-o",
                "link": "/messages"
            },
            {
                "title": "Settings",
                "icon": "fa-cogs",
                "link": "/settings"
            },
        ];

        viewModel.right_menu_list = [
            {
                "title": "NYSE",
                "pct": "9.99%",
                "icon": "fa-angle-double-up"
            },
            {
                "title": "NASDAQ",
                "pct": "9.98%",
                "icon": "fa-angle-double-up"
            },
            {
                "title": "Japan Stock",
                "pct": "5.96%",
                "icon": "fa-chevron-up"
            },
            {
                "title": "Shangai Stock",
                "pct": "4.54%",
                "icon": "fa-chevron-up"
            },
            {
                "title": "Euronext",
                "pct": "+4.43%",
                "icon": "fa-chevron-up"
            },
        ];

        viewModel.redirect = function(link) {
            window.location.href = link;
        };

        initController();

        function initController() {

        }
    }

})();