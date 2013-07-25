/*
 *   script     :  visiblebounds.jsx
 *   creator    :  Nurul Huda
 */
	
if (app.documents.length != 0){
   var myDoc = app.activeDocument;

   // periksa adakah objek yg dipilih?
   if (myDoc.selection.length != 0){
      var myRect = myDoc.selection[0];
      
      // periksa apakah objek yg dipilih adalah 'Rectangle'?
      if (myRect.constructor.name == 'Rectangle'){
      
         // mendapatkan posisi objek dg properti visibleBounds dan geometricBounds
         // masing2 ditampung pada variabel v dan g
         var v = myRect.visibleBounds;
         var g = myRect.geometricBounds;
         
         // tampilkan nilai variabel v dan g
         alert( 'Posisi objek dg visibleBounds: ' + v.join(', ') + '\r\n\r\n' +
                'Posisi objek dg geometricBounds: ' + g.join(', '));
      }
      else
         alert('Salah! Anda harus memilih sebuah persegi (rectangle).');
   }
   else
      alert('Salah! Tidak ada objek yang anda pilih.');
}
else
   alert('Salah! Tidak ada dokumen yang terbuka.');
   