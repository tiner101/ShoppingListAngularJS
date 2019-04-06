var model = {
    items: [
        { purchase: "Apples", done: false, price: 15.9 },
        { purchase: "Bananas", done: false, price: 60 },
        { purchase: "Cheese", done: true, price: 22.6 },
        { purchase: "Pepsi", done: false, price:20 }
    ]
};
var purchaseApp = angular.module("purchaseApp", []);
    purchaseApp.controller("purchaseController", function ($scope) {
    $scope.list = model;
    $scope.addItem = function (text, price) {
        price = parseFloat(price); // преобразуем введенное значение к числу
        if(text != "" && !isNaN(price)) // если текст установлен и введено число, то добавляем
        {
            $scope.list.items.push({ purchase: text, price: price, done: false });
        }
    }
});