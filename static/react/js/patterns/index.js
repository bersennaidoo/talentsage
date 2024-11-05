"use strict";
(() => {
  // static/js/patterns/booking-table/booking_table.ts
  var BookingTableCreate = () => {
    $("#dialog-create").dialog({
      closeOnEscape: false,
      height: 400,
      modal: true,
      autoOpen: false,
      open: function() {
        $(".ui-dialog-titlebar-close").hide();
      },
      buttons: {
        Create: function() {
          $(".edit").attr("disabled", false);
          $(".delete").attr("disabled", false);
          $(this).dialog("close");
        },
        Cancel: function() {
          $(".edit").attr("disabled", false);
          $(".delete").attr("disabled", false);
          $(this).dialog("close");
        }
      }
    });
    $(".create").on("click", function() {
      $(".edit").attr("disabled", true);
      $(".delete").attr("disabled", true);
      $("#dialog-create").dialog("option", {
        title: "Create Booking"
      }).dialog("open");
    });
  };
  var BookingTableEdit = () => {
    $("#dialog-edit").dialog({
      modal: true,
      autoOpen: false,
      open: function() {
        $(".ui-dialog-titlebar-close").hide();
      },
      buttons: {
        Update: function() {
          var date = $("#Date").val(), startTime = $("#startTime").val(), endTime = $("#endTime").val(), row = $(this).data("editingRow");
          row.find("td").eq(1).text(date);
          row.find("td").eq(2).text(startTime);
          row.find("td").eq(3).text(endTime);
          $(".create").attr("disabled", false);
          $(".delete").attr("disabled", false);
          $(this).dialog("close");
        },
        Cancel: function() {
          $(".create").attr("disabled", false);
          $(".delete").attr("disabled", false);
          $(this).dialog("close");
        }
      }
    });
    $("table").on("click", ".edit", function() {
      $(".create").attr("disabled", true);
      $(".delete").attr("disabled", true);
      var row = $(this).parents("tr"), date = row.find("td").eq(1).text(), startTime = row.find("td").eq(2).text(), endTime = row.find("td").eq(3).text();
      $("#Date").val(date);
      $("#startTime").val(startTime);
      $("#endTime").val(endTime);
      $("#dialog-edit").dialog("option", {
        title: "Edit Booking"
      }).data("editingRow", row).dialog("open");
    });
  };
  var BookingTableDelete = () => {
    $("#dialog-delete").dialog({
      modal: true,
      autoOpen: false,
      open: function() {
        $(".ui-dialog-titlebar-close").hide();
      },
      buttons: {
        Delete: function() {
          $(".create").attr("disabled", false);
          $(".edit").attr("disabled", false);
          $(this).dialog("close");
        },
        Cancel: function() {
          $(".create").attr("disabled", false);
          $(".edit").attr("disabled", false);
          $(this).dialog("close");
        }
      }
    });
    $("table").on("click", ".delete", function() {
      $(".create").attr("disabled", true);
      $(".edit").attr("disabled", true);
      $("#dialog-delete").dialog("option", {
        title: "Delete Booking"
      }).dialog("open");
    });
  };

  // static/js/patterns/index.ts
  var Main = () => {
    BookingTableCreate();
    BookingTableEdit();
    BookingTableDelete();
  };
  Main();
})();
//# sourceMappingURL=http://localhost:1313/react/js/patterns/index.js.map
