var myDoc = app.activeDocument;
var myPage = myDoc.pages[0];
var myLine = myPage.graphicLines.add();
myLine.geometricBounds = new Array(30, 25, 60, 150);
