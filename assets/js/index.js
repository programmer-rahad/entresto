document.addEventListener("DOMContentLoaded", function () {
  // Bootstrap Modal
  var myModal = new bootstrap.Modal(document.getElementById("infoModal"), {
    keyboard: false,
    backdrop: "static",
  });
  myModal.show();
});

// jQuery
$(document).ready(function () {
  !(function () {
    if (typeof $ === "function") {
      // Form Validation

      valideForm();

      function valideForm() {
        $("form.province-licence").submit(function (e) {
          $(".error-text").hide();
          $(".medical-license-number").removeClass("error");

          var valideSwitch = valideFormSwitch();

          var select_province_valid = valideSwitch[0];

          var license_number_valid = valideSwitch[1];

          if (!select_province_valid) {
            $(".error-province").show();

            $(".error-text.error-province").css("opacity", 1);
          }
          if (license_number_valid) {
            $("#infoModal").modal('show');
            console.log("accepted");
            // return true;
          } else {
            $(".error-licence").show();
            $(".medical-license-number").addClass("error");

            $(".error-text.error-licence").css("opacity", 1);
          }

          return false;
        });
      }

      function valideFormSwitch() {
        var select_province_valid = true;

        var license_number_valid = false;

        var select_province = $("#select_province").val();

        var license_number = $("#medical_license_number").val();

        switch (select_province) {
          case "AB": //D 6 digits - P 4 or 5 digits - N 5 or 6 digits
            if (
              license_number.length >= 4 &&
              license_number.length <= 6 &&
              !isNaN(license_number)
            ) {
              license_number_valid = true;
            }

            break;

          case "SK": //D 6 digits - P 4 or 5 digits - N 7 digits
            if (
              license_number.length >= 4 &&
              license_number.length <= 7 &&
              !isNaN(license_number)
            ) {
              license_number_valid = true;
            }

            break;

          case "BC": //D 5 digits - P 5 digits - N 5 or 7 digits
            if (
              (license_number.length == 5 || license_number.length == 7) &&
              !isNaN(license_number)
            ) {
              license_number_valid = true;
            }

            break;

          case "MB": //D 5 digits - P 5 digits - N 6 digits
            if (
              (license_number.length == 5 || license_number.length == 6) &&
              !isNaN(license_number)
            ) {
              license_number_valid = true;
            }

            break;

          case "ON": //D 5 digits - P 6 digits - N 7 or 8 digits
            if (
              license_number.length >= 5 &&
              license_number.length <= 8 &&
              !isNaN(license_number)
            ) {
              license_number_valid = true;
            }

            break;

          case "QC": //D 5 digits - P 6 digits - N 6 or 7 digits
            if (
              license_number.length >= 5 &&
              license_number.length <= 7 &&
              !isNaN(license_number)
            ) {
              license_number_valid = true;
            }

            break;

          case "NB": //D 8 digits - P 4 digits - N 6 digits | The first two numbers indicate the year in which the physician was first registered. 2 digits-5 digits (##-#####) could also just use 5 digits, with the leading digit always being 0 (0####)
            if (
              ([4, 6].includes(license_number.length) &&
                !isNaN(license_number)) ||
              (license_number.length == 8 &&
                /[a-zA-Z]/.test(license_number.charAt(0)) &&
                license_number.charAt(1) == "-" &&
                !isNaN(license_number.substring(2)))
            ) {
              license_number_valid = true;
            }

            break;

          case "NL": //D 6 digits - P 5 or 6 digits - N 5 digits | Leading letter, space, and 5 digits (A#####)
            //var count_numbers = license_number.replace(/[^0-9]/g, "").length;

            //var count_letters = license_number.replace(/[^a-zA-Z]/g, "").length;

            if (
              (license_number.length >= 5 &&
                license_number.length <= 6 &&
                !isNaN(license_number)) ||
              (license_number.length == 6 &&
                /[a-zA-Z]/.test(license_number.charAt(0)) &&
                !isNaN(license_number.substring(1)))
            ) {
              license_number_valid = true;
            }

            break;

          case "NS": //D 6 digits - P 3 or 4 or 5 digits - N 5 or 6 digits | and all begin with one or more zeros (0#####)
            if (
              license_number.length >= 3 &&
              license_number.length <= 6 &&
              !isNaN(license_number)
            ) {
              license_number_valid = true;
            }

            break;

          case "PI": //D 3 or 4 or 5 digits - P x digits - N 6 digits
            //var count_numbers = license_number.replace(/[^0-9]/g, "").length;

            //var count_letters = license_number.replace(/[^a-zA-Z]/g, "").length;

            if (
              ([3, 4, 6].includes(license_number.length) &&
                !isNaN(license_number)) ||
              (license_number.length == 5 &&
                /[a-zA-Z]/.test(license_number.charAt(0)) &&
                !isNaN(license_number.substring(1)))
            ) {
              license_number_valid = true;
            }

            break;

          case "NT": //D x digits - P 9 or 5 digits - N 9 or 4 or 5 digits
            if (
              license_number.length == 4 ||
              license_number.length == 5 ||
              license_number.length == 9
            ) {
              license_number_valid = true;
            }

            break;

          case "NU": //D x digits - P x digits - N 3 or 4 digits
            if (license_number.length >= 3 && license_number.length <= 4) {
              license_number_valid = true;
            }

            break;

          case "YT": //D x digits - P 9 or 8 digits - N x or x digits
            if (license_number.length >= 8 && license_number.length <= 9) {
              license_number_valid = true;
            }

            break;

          default:
            select_province_valid = false;

            break;
        }

        return [select_province_valid, license_number_valid];
      }
    }

    //switch lang

    var other_lang = window.location.href;

    other_lang = other_lang.replace("/en/", "/fr/");

    $(".language-switcher a").attr("href", other_lang);
  })();
});
