$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

let currentHour = moment().format('H');
let storageKey = "entryArray";
let entries = [];
let storageObj = localStorage.getItem(storageKey);
let entriesExist = false;

