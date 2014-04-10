(function () {

    'use strict';

    var counter = 1;

    // var horst = function (obj) {

    //     var node = document.createElement(obj);
    //     return {
    //         find: function (selector) {
    //             return node.querySelector(selector);
    //         },
    //         append: function (obj) {
    //             node.appendChild(obj.node || document.createElement(obj));
    //             return this;
    //         },
    //         inner: function (string) {
    //             node.innerText = string;
    //             return this;
    //         },
    //         node: function () {
    //             return node;
    //         }
    //     };
    // };


    var $ = {
        find: function (selector) {
            return document.querySelector(selector);
        },
        create: function (type) {
            return document.createElement(type);
        },
        //http://toddmotto.com/creating-jquery-style-functions-in-javascript-hasclass-addclass-removeclass-toggleclass/
        hasClass: function (elem, className) {
            return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
        },
        addClass: function (elem, className) {
            if (!this.hasClass(elem, className)) {
                elem.className += ' ' + className;
            }
        },
        removeClass: function (elem, className) {
            var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
            if (this.hasClass(elem, className)) {
                while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
                    newClass = newClass.replace(' ' + className + ' ', ' ');
                }
                elem.className = newClass.replace(/^\s+|\s+$/g, '');
            }
        }
    };

    var PIECE = 7.37,
        content = $.find('#results'),
        button = $.find('#analyze'),
        buttonreset = $.find('#reset'),
        //reverse order for negative i-- loop
        keys = ['large', 'medium', 'small'];

    var getContainer = function () {
        var cont = $.create('div');
        cont.className = 'result container panel panel-default';

        var heading = $.create('div');
        heading.className = 'panel-heading';
        var body = $.create('div');
        body.className = 'panel-body';
        cont.appendChild(heading);
        cont.appendChild(body);


        return cont;
        //return $.find('#results').className;
    };

    var setContent = function (container, list, prices) {

        var row, nsize, nprice, npieces, nlabel,
            min = Math.min.apply(null, prices);

        list.forEach(function (item) {

            row = $.create('div');
            nsize = $.create('div');
            nprice = $.create('div');
            npieces = $.create('div');
            nlabel = $.create('div');

            row.className = 'row ' + item.size;
            nsize.className = 'size col-xs-2';
            nprice.className = 'price col-xs-3';
            npieces.className = 'pieces col-xs-4';
            nlabel.className = 'red col-xs-3';

            nsize.innerText = item.size;
            nprice.innerText = item.price + ' €';
            npieces.innerText = item.pieces + ' pieces';
            if (min !== item.price) {
                nlabel.innerText = (Math.round(((item.price * item.pieces) - (min * item.pieces)) * 100)/100) + ' €';
            } else {
                row.className = row.className + ' green';
            }

            row.appendChild(nsize);
            row.appendChild(nprice);
            row.appendChild(nlabel);
            row.appendChild(npieces);

            container.querySelector('.panel-body').appendChild(row);
        });
        container.querySelector('.panel-heading').innerHTML = '#' + counter++;
    };


    // var setBadeges = function (container, prices) {
    //     var max = Math.max.apply(null, prices),
    //         min = Math.min.apply(null, prices),
    //         worst = container.querySelector('.label[data-price="' + max + '"]'),
    //         best = container.querySelector('.label[data-price="' + min + '"]');

    //     //set worst first in case only one prices was entered
    //     if (best && worst) {
    //         best.innerHTML = 'best';
    //         best.className = best.className + ' label-success';

    //         if (min !== max) {
    //             worst.innerHTML = 'worst';
    //             worst.className = worst.className + ' label-danger';
    //         }
    //     }
    // };


    var getNode = function (data) {
        var container = getContainer(),
            prices = [],
            list = [];
        for (var i = keys.length; i > 0; i--) {
            var size = keys[i-1],
                price = Math.round(data[size].price_norm_piece*100,2)/100,
                pieces = Math.round(data[size].base / PIECE *10)/10;

            //build up price hash
            if (data[size].price !== '' && data[size].price !== '0') {
                prices.push(price);
                list.push({
                    size: size.substr(0, 3),
                    price: price,
                    pieces: pieces
                });
            }
        }
        setContent(container, list, prices);

        container = prices.length ? container : $.create('div');

        //setBadeges(container, prices);
        return container;
    };

    var draw = function (data) {
        //get user input
        for (var i = keys.length; i > 0; i--) {
            var size = keys[i-1];
            data[size].base = data[size].diameter * 3.14;
            data[size].price_base_unit = data[size].price / data[size].base;
            data[size].price_norm_piece = data[size].price_base_unit * PIECE;
        }
        content.appendChild(getNode(data));
    };


    button.addEventListener('click', function () {
        var data = {
                small: {
                    price: $.find('[name="price_small"]').value.replace(',', '.'),
                    diameter: $.find('[name="diameter_small"]').value
                },
                medium: {
                    price: $.find('[name="price_medium"]').value.replace(',', '.'),
                    diameter: $.find('[name="diameter_medium"]').value
                },
                large: {
                    price: $.find('[name="price_large"]').value.replace(',', '.'),
                    diameter: $.find('[name="diameter_large"]').value
                }
            };

        draw(data);
    });

    buttonreset.addEventListener('click', function () {
        $.find('[name="price_small"]').value = 0;
        $.find('[name="price_medium"]').value = 0;
        $.find('[name="price_large"]').value = 0;
        $.find('#results').innerHTML = '';
    });

    // var cache = {

    //     set: function (key, value) {
    //         localStorage.setItem(key, JSON.stringify(value));
    //     },

    //     get: function (key) {
    //         return JSON.parse(localStorage.getItem(key));
    //     },

    //     remove: function (key) {
    //         localStorage.removeItem(key);
    //     },

    //     clear: function () {
    //         localStorage.clear();
    //     },

    //     keys: function () {
    //         var keys = [];
    //         for (i=0; i<=localStorage.length-1; i++) {
    //             keys.push(localStorage.key(i));
    //         }
    //         return keys;
    //     }
    // };

})();
