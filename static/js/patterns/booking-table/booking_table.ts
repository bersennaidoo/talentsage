export const BookingTableCreate = () => {
  $("#dialog-create").dialog({
    closeOnEscape: false,
    height: 400,
    modal: true,
    autoOpen: false,
    open: function() {
        $(".ui-dialog-titlebar-close").hide()
    },
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

        $(".edit").attr("disabled", false as any);
        $(".delete").attr("disabled", false as any);

        $(this).dialog("close");
      },
      Cancel: function () {
        $(".edit").attr("disabled", false as any);
        $(".delete").attr("disabled", false as any);
        $(this).dialog("close");
      },
    },
  });
  $(".create").on("click", function () {
    $(".edit").attr("disabled", true as any);
    $(".delete").attr("disabled", true as any);

    $("#dialog-create")
      .dialog("option", {
        title: "Create Booking",
      })
      .dialog("open");
  });
};

export const BookingTableEdit = () => {
  $("#dialog-edit").dialog({
    modal: true,
    autoOpen: false,
    open: function() {
        $(".ui-dialog-titlebar-close").hide()
    },
    buttons: {
      Update: function () {
        var date = $("#Date").val(),
          startTime = $("#startTime").val(),
          endTime = $("#endTime").val(),
        row = $(this).data("editingRow");

        row.find("td").eq(1).text(date);
        row.find("td").eq(2).text(startTime);
        row.find("td").eq(3).text(endTime);

        $(".create").attr("disabled", false as any);
        $(".delete").attr("disabled", false as any);
        $(this).dialog("close");
      },
      Cancel: function () {
        $(".create").attr("disabled", false as any);
        $(".delete").attr("disabled", false as any);

        $(this).dialog("close");
      },
    },
  });

  $("table").on("click", ".edit", function () {
    $(".create").attr("disabled", true as any);
    $(".delete").attr("disabled", true as any);
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
}

export const BookingTableDelete = () => {
  $("#dialog-delete").dialog({
    modal: true,
    autoOpen: false,
    open: function() {
        $(".ui-dialog-titlebar-close").hide()
    },
    buttons: {
      Delete: function () {
        $(".create").attr("disabled", false as any);
        $(".edit").attr("disabled", false as any);
        $(this).dialog("close");
      },
      Cancel: function () {
        $(".create").attr("disabled", false as any);
        $(".edit").attr("disabled", false as any);

        $(this).dialog("close");
      },
    },
  });

  $("table").on("click", ".delete", function () {
    $(".create").attr("disabled", true as any);
    $(".edit").attr("disabled", true as any);
    $("#dialog-delete")
      .dialog("option", {
        title: "Delete Booking",
      })
      .dialog("open");
  });
}
