// calendar.js

const monthnames = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
  ];
  var linkcount = 0;
  
  function addlink(month, day, href) {
    var entry = [month, day, href];
    linkdays[linkcount++] = entry;
  }
  
  Array.prototype.addlink = addlink;
  var linkdays = [];
  var monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  var todayDate = new Date();
  var thisday = todayDate.getDay();
  var thismonth = todayDate.getMonth();
  var thisdate = todayDate.getDate();
  var thisyear = todayDate.getYear();
  thisyear = thisyear % 100;
  thisyear = thisyear < 50 ? 2000 + thisyear : 1900 + thisyear;
  
  if ((thisyear % 4 == 0 && thisyear % 100 != 0) || thisyear % 400 == 0) monthdays[1]++;
  
  var startspaces = thisdate;
  while (startspaces > 7) startspaces -= 7;
  startspaces = thisday - startspaces + 1;
  if (startspaces < 0) startspaces += 7;
  
  document.write("<table class='calendar' cellpadding='0' cellspacing='0'>");
  document.write("<tr><td colspan='7'><center><strong class='calendar-header' style='background-color: #242C42; color: #F1F1F1; display: block; font-size: 18px; line-height: 23px;'>" +
    thisyear + "/" + monthnames[thismonth] +
    "</strong></center></td></tr>");
  document.write("<tr>");
  document.write("<td class='day-label' style='border: 1px solid #242C42; font-size: 16px;'>日</td>");
  document.write("<td class='day-label' style='border: 1px solid #242C42; font-size: 16px;'>月</td>");
  document.write("<td class='day-label' style='border: 1px solid #242C42; font-size: 16px;'>火</td>");
  document.write("<td class='day-label' style='border: 1px solid #242C42; font-size: 16px;'>水</td>");
  document.write("<td class='day-label' style='border: 1px solid #242C42; font-size: 16px;'>木</td>");
  document.write("<td class='day-label' style='border: 1px solid #242C42; font-size: 16px;'>金</td>");
  document.write("<td class='day-label' style='border: 1px solid #242C42; font-size: 16px;'>土</td>");
  document.write("</tr>");
  document.write("<tr>");
  
  for (s = 0; s < startspaces; s++) {
    document.write("<td class='empty-day' style='border: 1px solid #242C42; font-size: 16px;'></td>");
  }
  var count = 1;
  while (count <= monthdays[thismonth]) {
    for (var b = startspaces; b < 7; b++) {
      var linktrue = false;
      document.write("<td class='calendar-day' style='border: 1px solid #242C42; font-size: 16px;'>");
      for (var c = 0; c < linkdays.length; c++) {
        if (linkdays[c] != null) {
          if (linkdays[c][0] == thismonth + 1 && linkdays[c][1] == count) {
            document.write("<a href='" + linkdays[c][2] + "' class='calendar-link'>");
            linktrue = true;
          }
        }
      }
      if (count == thisdate) {
        document.write("<strong class='calendar-today' style='background-color: #BF616A; font-size: 16px;'>");
      }
      if (count <= monthdays[thismonth]) {
        document.write(count);
      } else {
        document.write(" ");
      }
      if (count == thisdate) {
        document.write("</strong>");
      }
      if (linktrue) document.write("</a>");
      document.write("</td>");
      count++;
    }
    document.write("</tr><tr>");
    startspaces = 0;
  }
  document.write("</table>");
  