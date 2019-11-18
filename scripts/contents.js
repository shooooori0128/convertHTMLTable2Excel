"use strict";

// HTMLテーブル取得
const search_html_tables = () => {
  const tables = document.querySelectorAll("table");

  tables.forEach((table) => {
    console.log(table);
  });
};

// タブ区切りのデータにフォーマット
const format_excel_data = () => {
  console.log("エクセル形式にフォーマットしました！");
};

// クリップボードにコピー
const copy2clipboard = () => {
  console.log("クリップボードにコピーしました！");
};

// コンテキストメニュー - HTMLテーブルをExcel形式でコピー
chrome.extension.onMessage.addListener((command, sender, response) => {
  if (command.action == "convert") {
    search_html_tables();
    format_excel_data();
    copy2clipboard();
    response(true);
  }

  return true;
});