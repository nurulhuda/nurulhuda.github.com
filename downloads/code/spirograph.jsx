/*
 *   script: spirograph.jsx
 *   by: Nurul Huda
 *   medio: March 23, 2013
 */

var abh = [];
var lnwidth = 1;

main();

function main(){
     showDialog();
     if(abh.length == 0) return;

     var a = abh[0];
     var b = abh[1];
     var h = abh[2];

     var doc = app.activeDocument;
     var dpref = doc.documentPreferences;
     doc.zeroPoint = [ dpref.pageWidth/2, dpref.pageHeight/2 ];

     var spr = app.activeWindow.activeSpread;
      
     // var a = 80;
     // var b = 13;
     // var h = 20;
      
     var path = [];
      
     var nLoop = b/FPB(a,b);
      
     var p = null;
      
     for (var t=0; t<=nLoop*360; t+= 2){
      
          var x = (a - b) * Math.cos(t*Math.PI/180) + h * Math.cos (t*((a - b)/b)*Math.PI/180);
          var y = (a - b) * Math.sin(t*Math.PI/180) - h * Math.sin (t*((a - b)/b)*Math.PI/180);
          
          path.push ([x,y]);
          if (path.length > 10000){
               if (p == null){
                    p = spr.graphicLines.add().paths[0];
                    p.parent.strokeWeight = lnwidth;
               } else
                    p = p.parent.paths.add();
               p.entirePath = path;
               path = [ [x,y] ];
          }
     }
      
     if (path.length > 1){
          if (p == null){
               p = spr.graphicLines.add().paths[0];
               p.parent.strokeWeight = lnwidth;
          } else
               p = p.parent.paths.add();
          p.entirePath = path;
     }
}

function showDialog(){
     var myDlg = app.dialogs.add({name:'Spirograf - by Nurul Huda'});
     with(myDlg){
          with(dialogColumns.add()){
               with(borderPanels.add()){
                    with(dialogColumns.add()){
                         with(dialogRows.add()){
                              with(dialogColumns.add()){
                                   staticTexts.add({staticLabel:'a:'});
                                   staticTexts.add({staticLabel:'b:'});
                                   staticTexts.add({staticLabel:'h:'});
                              }
                              with(dialogColumns.add()){
                                   var txta = integerEditboxes.add({editContents:"80"});
                                   var txtb = integerEditboxes.add({editContents:"13"});
                                   var txth = integerEditboxes.add({editContents:"20"});
                              }
                         }
                    }
               }
               
          }
     }

     var retVal = myDlg.show();
     if (retVal){
          abh.push(txta.editValue);
          abh.push(txtb.editValue);
          abh.push(txth.editValue);
     }
     
     myDlg.destroy();
}

function FPB (x,y){
     var w;
     while (y != 0){
          w = x % y;
          x = y;
          y = w;
     }
     return x;
}
