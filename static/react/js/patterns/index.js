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
        Submit: function() {
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
    $("#dialog-create-form").on("submit", function() {
      $.ajax({
        type: "POST",
        url: "/api/heroes",
        data: $("#dialog-create-form").serialize(),
        success: function(data) {
          $("#dialog-create").dialog("close");
        }
      });
    });
    $("table").on("click", ".create", function() {
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
  var BookingTableListJson = () => {
    $(function() {
      var num = 1;
      $.getJSON("/api/heroes", (data) => {
        const html = data.reduce((result, entry) => `
      ${result}
      <tr>
        <th scope="row">${num++}</th>
        <td>${entry.bandname}</td>
        <td>${entry.clubname}</td>
        <td>${entry.date}</td>
        <td>${entry.startTime}</td>
        <td>${entry.endTime}</td>
        <td>${entry.fee}</td>
        <td>
            <button class="create"><i class="fas fa-book"></i></button>
        </td>
        <td>
            <button class="edit"><i class="fas fa-edit"></i></button>
        </td>
        <td>
            <button class="delete"><i class="bi bi-trash"></i></button>
        </td>
      </tr>`, "");
        $("#booking-tbody").html(html);
      });
    });
  };

  // static/js/patterns/index.ts
  var Main = () => {
    BookingTableListJson();
    BookingTableCreate();
    BookingTableEdit();
    BookingTableDelete();
  };
  Main();
})();
//# sourceMappingURL=http://localhost:1313/react/js/patterns/index.js.map
