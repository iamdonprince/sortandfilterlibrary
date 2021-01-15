"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortArray = exports.filterArray = void 0;
var filterArray = function (arr, inputValue) {
    var filteredSearch = arr.filter(function (users, i) {
        return (users.first_name
            .toLocaleLowerCase()
            .includes(inputValue.toLocaleLowerCase().trim()) ||
            users.last_name
                .toLocaleLowerCase()
                .includes(inputValue.toLocaleLowerCase().trim()));
    });
    return filteredSearch;
};
exports.filterArray = filterArray;
// sorting function
var sortArray = function (array, soryBy, desc) {
    array.sort(function (a, b) {
        if (a[soryBy] < b[soryBy])
            return -1;
        if (a[soryBy] > b[soryBy])
            return 1;
        return 0;
    });
    if (desc)
        array.reverse();
    return array;
};
exports.sortArray = sortArray;
