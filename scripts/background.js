"use strict";

const context_menus = Object.freeze([
  Object.freeze({
    command: "convert",
    text: "HTMLテーブルをExcel形式でコピー"
  })
]);

// コンテキストメニュー - HTMLテーブルをExcel形式でコピー
chrome.contextMenus.create({
  "id": context_menus[0].command,
  "type": "normal",
  "title": context_menus[0].text,
  "contexts": ["page"]
});

const convert_html_table2excel = (info, tab) => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: context_menus[0].command
    }, (response) => {
      console.log(response);
    });
  });
};

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == context_menus[0].command) convert_html_table2excel(info, tab);
});