const express = require("express");
const router = express.Router();
const cors = require("cors");
 
router.use(cors());
 
const fs = require("fs");
const PDFDocument = require("./pdfkit-tables");
 
router.post("/generateDiscountReport", async function (req, res, next) {
    //load cuurent time
    var currentDate = new Date();
 
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    var datestamp =
    "DATE:- " +
        year +
        "-" +
        (month + 1) +
        "-" +
        date;
        "-" +
        hours +
        "-" +
        minutes +
        "-" +
        seconds;
 
    var timestamp =
    "TIME:- " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
 
        
    const discountReportRequest = req.body.discount;
 
    // Create The PDF document

    var myDoc = new PDFDocument({ bufferPages: true });

    let buffers = [];
    myDoc.on("data", buffers.push.bind(buffers));
    myDoc.on("end", () => {
        let pdfData = Buffer.concat(buffers);
 
        res.writeHead(200, {
            "Content-Length": Buffer.byteLength(pdfData),
            "Content-Type": "application/pdf",
            "Content-disposition": `attachment;filename=Discount_${datestamp}.pdf`,
        })
            .end(pdfData);
 
    });

    myDoc
        .fillColor("#444444")
        .fontSize(20)
        .text("Discount Report", 110, 57)
        .fontSize(10)
        .text("Infact Solution", 200, 50, { align: "right" })
        .text("Colombo", 200, 65, { align: "right" })
        .text("Sri Lanka", 200, 80, { align: "right" })
        .text(datestamp,200,95,{align: "right"})
        .text(timestamp,200,110,{align: "right"})
        .moveDown();
 
                           
 
    // Create the table - https://www.andronio.me/2017/09/02/pdfkit-tables/
    const table = {
        headers: ["Product Name", "Percentage","Market Price", "Ammount", "Starting Date", "Ending Date"],
        rows: [],
    };
 
    for (const discount of discountReportRequest) {
        table.rows.push([
            discount.productName,
            discount.percentage+"%",
            "Rs."+discount.marketPrice+".00",
            "Rs."+discount.ammount+".00",
            discount.startingdate,
            discount.endingdate
        ]);
    }

    myDoc.moveDown().table(table, 15, 155, { width: 590 });

    myDoc.end();

});
 
module.exports = router;

