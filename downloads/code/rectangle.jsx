var x1 = 30;
var y1 = 150;
var x2 = x1 + 50;    // x2 = x1 + panjang
var y2 = y1 + 50;    // y2 = y1 + lebar

var myDoc = app.activeDocument;
var myPage = myDoc.pages[0];     // halaman pertama pd dokumen yg aktif

var myRect = myPage.rectangles.add();
myRect.visibleBounds = new Array(y1, x1, y2, x2);
