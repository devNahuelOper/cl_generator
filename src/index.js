import { coverLetterAutomator } from "../coverLetter.js";
// import PDFDocument from "pdfkit";
// import fs from "fs";
// const PDFDocument = require("pdfkit");
// const fs = require("fs");
// import * as PDFDocument from "../pdfkit.standalone";
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const PDFDocument = require("pdfkit");
// const fs = require("fs");

$(document).ready(function () {

  // $('.main').css({fontFamily: "Helvetica", padding: "40px 0"});
  const form = $("form");
  let name = $("#name").val();
  let company = $("#company").val();
  let mission = $("#mission").val();
  let position = $("#position").val();

  $("input").each(function () {
    $(this).change(function (e) {
      $(this).val(e.target.value);
      console.log(this.value);
      const makeLetter = coverLetterAutomator(
        $("#name").val(),
        $("#company").val(),
        $("#mission").val(),
        $("#position").val()
      );
      // const letter = $("<p>").text(`${makeLetter}`);
      // $(".main").append(letter);
      // $("#letter").text(`${makeLetter}`);
      $(".name").text($("#name").val());
      $(".company").text($("#company").val());
      $(".mission").text($("#mission").val());
      $(".position").text($("#position").val());
    });
  });

  $("#link").click((e) => {
    // makePdf(`${$('#company').val()}_CL`, content);
    e.preventDefault();
    let pdfDoc = new PDFDocument();
    pdfDoc.pipe(
      fs.createWriteStream(
        `/Users/nahuelgorosito/Desktop/${$("#company").val()}.pdf`
      )
    );
    pdfDoc.text(content);
    pdfDoc.end();
    console.log("PDF Made!");
  });
});



