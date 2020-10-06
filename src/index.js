import { coverLetterAutomator } from '../coverLetter.js';


$(document).ready(function () {
  // $('.main').css({fontFamily: "Helvetica", padding: "40px 0"});
  const form = $('form');
  let name = $('#name').val();
  let company = $("#company").val();
  let mission = $("#mission").val();
  let position = $("#position").val();

    

  $('input').each(function () {
    $(this).change(function (e) {
      $(this).val(e.target.value);
      console.log(this.value);
      const makeLetter = coverLetterAutomator($('#name').val(), $("#company").val(), $("#mission").val(), $("#position").val());
      // const letter = $("<p>").text(`${makeLetter}`);
      // $(".main").append(letter);
      // $("#letter").text(`${makeLetter}`);
      $(".name").text($('#name').val());
      $(".company").text($("#company").val());
      $(".mission").text($("#mission").val());
      $(".position").text($("#position").val());
    });
  });
   
})