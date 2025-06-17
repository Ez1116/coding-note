function createStudentSurveyForm() {
  // 定義表單標題和對應的試算表標題
  const formTitle = "期末自然探究學習調查";
  const sheetTitle = `${formTitle} 回應`;
  
  // 嘗試查找是否已存在同名表單
  const forms = DriveApp.getFilesByName(formTitle);
  let form;
  
  // 如果表單已存在，則打開它；否則創建新表單
  if (forms.hasNext()) {
    const file = forms.next();
    form = FormApp.openById(file.getId());
    Logger.log("已有表單，進行編輯：" + form.getEditUrl());
  } else {
    form = FormApp.create(formTitle);
    Logger.log("新建表單完成：" + form.getEditUrl());
  }
  
  // 設置表單描述
  form.setDescription(
    "感謝您參與本次調查問卷。您的回答將幫助我們更好地了解學生對科學觀點和生成式AI的看法。\n" +
    "所有信息將被嚴格保密並僅用於研究目的。\n" +
    "線性刻度題中，1分表示「非常不同意」，5分表示「非常同意」"
  );
  
  // 清除表單中的所有舊題目
  const items = form.getItems();
  for (let i = 0; i < items.length; i++) {
    form.deleteItem(items[i]);
  }
  
  // 添加新的表單題目
  // 1. 班級座號 (簡答，必填)
  form.addTextItem().setTitle("1. 班級座號").setRequired(true);
  
  // 2. 姓名（簡答，必填）
  form.addTextItem().setTitle("2. 姓名").setRequired(true);
  
  // 科學觀點與AI相關問題 (線性刻度，1~5分)
  // 創建一個函數來添加線性刻度題
  function addScaleQuestion(title, required = true) {
    return form
      .addScaleItem()
      .setTitle(title)
      .setBounds(1, 5)
      .setLabels("非常不同意", "非常同意")
      .setRequired(required);
  }
  
  // 添加所有線性刻度題
  addScaleQuestion("3. 科學中的所有問題都有一個正確答案");
  addScaleQuestion("4. 做科學最重要的部分是得出正確的答案");
  addScaleQuestion("5. 科學知識永遠是真實的");
  addScaleQuestion("6. 一旦科學家從實驗中得到結果，那就是唯一的答案");
  addScaleQuestion("7. 科學家總是對科學中的真理達成一致意見");
  addScaleQuestion("8. 今天科學中的一些想法與科學家過去的想法不同");
  addScaleQuestion("9. 科學教科書中的想法有時會改變");
  addScaleQuestion("10. 科學中的想法有時會改變");
  addScaleQuestion("11. 新發現可以改變科學家認為是真實的事物");
  addScaleQuestion("12. 有時科學家會改變他們對科學真理的看法");
  addScaleQuestion("13. 自然科學中什麼是事實取決於個人觀點");
  addScaleQuestion("14. 每個人對自然科學可以有不同的意見，因為不存在完全正確的答案");
  addScaleQuestion("15. 關於自然科學的知識只是個人意見，不存在事實");
  addScaleQuestion("16. 如果自然科學老師說某事是正確的，那麼我相信它");
  addScaleQuestion("17. 我相信我在自然科學課上學到的一切都是正確的");
  addScaleQuestion("18. 自然科學教科書中寫的東西是正確的基於研究權威的理由");
  addScaleQuestion("19. 如果一位科學家說某事是事實，那麼我相信它");
  addScaleQuestion("20. 當我讀到一些基於科學調查的自然科學內容時，我相信它是正確的");
  addScaleQuestion("21. 我相信基於科學研究的主張基於多種來源的理由");
  addScaleQuestion("22. 為了能夠信任自然科學文本中的知識主張，我必須檢查各種知識來源");
  addScaleQuestion("23. 為了發現自然科學文本中的錯誤主張，檢查多個信息來源很重要");
  addScaleQuestion("24. 我永遠不能確定自然科學中的主張，直到我至少用另一個來源確認過它");
  addScaleQuestion("25. 僅僅一個來源永遠不足以決定在自然科學中什麼是對的");
  addScaleQuestion("26. 為了決定我閱讀的關於自然科學的內容是否正確，我必須檢查它是否與我讀過或聽過的其他自然科學內容一致");
  addScaleQuestion("27. 我覺得有系統性地分析科學現象是一件重要的事");
  addScaleQuestion("28. 我覺得有系統性地分析科學現象是一件正向的事");
  addScaleQuestion("29. 我認為提出可以被探究的研究問題是一件重要的事");
  addScaleQuestion("30. 我認為提出可以被探究的研究問題是一件正向的事");
  addScaleQuestion("31. 我認為完善地規劃實驗設計是一件重要的事");
  addScaleQuestion("32. 我認為完善地規劃實驗設計是一件正向的事");
  addScaleQuestion("33. 我認為解釋實驗獲得的數據是一件重要的事");
  addScaleQuestion("34. 我認為解釋實驗獲得的數據是一件正向的事");
  addScaleQuestion("35. 我認為基於實驗數據回得研究問題是一件重要的事");
  addScaleQuestion("36. 我認為基於實驗數據回得研究問題是一件正向的事");
  addScaleQuestion("37. 我有自信我能夠有系統性地分析科學現象");
  addScaleQuestion("38. 我有自信我能夠提出值得被探究的研究問題");
  addScaleQuestion("39. 我有自信我能夠完善地規劃實驗設計");
  addScaleQuestion("40. 我有自信我能夠適當地解釋實驗獲得的數據");
  addScaleQuestion("41. 我有自信我能夠利用實驗數據回答研究問題");
  addScaleQuestion("42. 生成式AI工具幫助我想出更多更好的研究問題");
  addScaleQuestion("43. 生成式AI工具使我的實驗設計變得更好");
  addScaleQuestion("44. 生成式AI工具使我的科學調查過程變得更好");
  addScaleQuestion("45. 生成式AI工具使我更有效率的完成我的學習任務");
  addScaleQuestion("46. 生成式AI工具提供了我更多學習資源與輔助內容，使我的學習的成果變得更好");
  
  // 檢查是否已有同名試算表，如果沒有則創建新的
  const spreadsheets = DriveApp.getFilesByName(sheetTitle);
  let sheet;
  if (spreadsheets.hasNext()) {
    const file = spreadsheets.next();
    sheet = SpreadsheetApp.openById(file.getId());
    Logger.log("已有試算表，使用現有的：" + sheet.getUrl());
  } else {
    sheet = SpreadsheetApp.create(sheetTitle);
    Logger.log("新建試算表完成：" + sheet.getUrl());
  }
  
  // 設定表單回應的目的地為試算表
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
  
  // 返回表單和試算表的 URL，方便使用者查看
  return {
    formUrl: form.getPublishedUrl(),
    formEditUrl: form.getEditUrl(),
    sheetUrl: sheet.getUrl()
  };
}
