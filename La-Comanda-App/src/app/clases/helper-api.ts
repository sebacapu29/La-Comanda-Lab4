import * as jsPDF from 'jspdf';
import * as json2csv from 'json2csv'; // convert json file to csv
import { saveAs } from 'file-saver';  // save the file
import html2canvas from 'html2canvas'; 


export class HelperApi {

    Json2csvParser = json2csv.Parser;

    constructor(){}
    
    public downloadPDF(pedidos:any[]){
        var data = document.getElementById("tablaPedido");

        html2canvas(data).then(canvas => { 
        var imgWidth = 208; 
        var pageHeight = 295; 
        var imgHeight = canvas.height * imgWidth / canvas.width; 
        var heightLeft = imgHeight; 
        
        const contentDataURL = canvas.toDataURL('image/png');
        let pdf = new jsPDF(); // A4 size page of PDF 
        var position = 25; 
        pdf.setFontSize(15);
        pdf.setFontStyle("italic");
        pdf.text(35,18,"Pedidos");
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight); 
        pdf.save('pedidos.pdf'); // Generated PDF  
        }); 
      }
      public downloadFile(data:any, filename? : string){
        let csvData = this.convertToCSV(data);
        let file = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
        saveAs(file,"pedidos.csv");
    }

    public convertToCSV(objArray: any, fields?) {
        let json2csvParser = new this.Json2csvParser({ });
        let csv = json2csvParser.parse(objArray);
        console.log(csv);
        return csv;
    }
}
