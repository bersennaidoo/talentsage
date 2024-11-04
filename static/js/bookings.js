$(function () {
  $("#dialog-create").dialog({
    autoOpen: false,
    buttons: {
      Create: function () {
        /*var bandName = $("#bandName").val();
        var clubName = $("#clubName").val();
        var date = $("#Date").val();
        var startTime = $("#startTime").val();
        var endTime = $("#endTime").val();
        var fee = $("#Fee").val();
        var row = $(this).data("editingRow");*/

        // ajax request to backend with form data

        $(".edit").attr("disabled", false);
        $(".delete").attr("disabled", false);

        $(this).dialog("close");
      },
      Cancel: function () {
        $(".edit").attr("disabled", false);
        $(".delete").attr("disabled", false);
        $(this).dialog("close");
      },
    },
  });
  $(".create").on("click", function () {
    $(".edit").attr("disabled", true);
    $(".delete").attr("disabled", true);

    $("#dialog-create")
      .dialog("option", {
        title: "Create Booking",
      })
      .dialog("open");
  });
});

$(function () {
  $("#dialog-edit").dialog({
    autoOpen: false,
    buttons: {
      Update: function () {
        var date = $("#Date").val(),
          startTime = $("#startTime").val(),
          endTime = $("#endTime").val();
        row = $(this).data("editingRow");

        row.find("td").eq(1).text(date);
        row.find("td").eq(2).text(startTime);
        row.find("td").eq(3).text(endTime);

        $(".create").attr("disabled", false);
        $(".delete").attr("disabled", false);
        $(this).dialog("close");
      },
      Cancel: function () {
        $(".create").attr("disabled", false);
        $(".delete").attr("disabled", false);

        $(this).dialog("close");
      },
    },
  });

  $("table").on("click", ".edit", function () {
    $(".create").attr("disabled", true);
    $(".delete").attr("disabled", true);
    var row = $(this).parents("tr"),
      date = row.find("td").eq(1).text(),
      startTime = row.find("td").eq(2).text(),
      endTime = row.find("td").eq(3).text();

    $("#Date").val(date);
    $("#startTime").val(startTime);
    $("#endTime").val(endTime);

    $("#dialog-edit")
      .dialog("option", {
        title: "Edit Booking",
      })
      .data("editingRow", row)
      .dialog("open");
  });
});

$(function () {
  $("#dialog-delete").dialog({
    autoOpen: false,
    buttons: {
      Delete: function () {
        $(".create").attr("disabled", false);
        $(".edit").attr("disabled", false);
        $(this).dialog("close");
      },
      Cancel: function () {
        $(".create").attr("disabled", false);
        $(".edit").attr("disabled", false);

        $(this).dialog("close");
      },
    },
  });

  $("table").on("click", ".delete", function () {
    $(".create").attr("disabled", true);
    $(".edit").attr("disabled", true);
    $("#dialog-delete")
      .dialog("option", {
        title: "Delete Booking",
      })
      .dialog("open");
  });
});
