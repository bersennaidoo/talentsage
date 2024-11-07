var url;

export const newBooking = () => {
  $("#newUser").on("click", function () {
    $("#dlg").dialog("open").dialog("setTitle", "New User");
    $("#fm").form("clear");
    url = "/api/heroes";
  });
};

export const editBooking = () => {
  $("#editUser").on("click", function () {
    var row = $("#dg").datagrid("getSelected");
    if (row) {
      $("#dlg").dialog("open").dialog("setTitle", "Edit User");
      $("#fm").form("load", row);
      url = "/api/heroes/" + row.id;
    }
  });
};

export const destroyBooking = () => {
  $("#destroyUser").on("click", function () {
    var row = $("#dg").datagrid("getSelected");
    if (row) {
      $.messager.confirm(
        "Confirm",
        "Are you sure you want to destroy this booking?",
        function (r) {
          if (r) {
            $.post(
              `/api/heroes/delete/${row.id}`,
              function (result) {
                if (result) {
                  $("#dg").datagrid("reload"); // reload the user data
                } else {
                  $.messager.show({
                    // show error message
                    title: "Error",
                    msg: result,
                  });
                }
              },
              "json"
            );
          }
        }
      );
    }
  });
};

export const saveBooking = () => {
  $("#saveUser").on("click", function () {
    $("#fm").form("submit", {
      url: url,
      onSubmit: function () {
        return $(this).form("validate");
      },
      success: function (result) {
        var result = eval("(" + result + ")");
        if (result.errorMsg) {
          $.messager.show({
            title: "Error",
            msg: result.errorMsg,
          });
        } else {
          $("#dlg").dialog("close"); // close the dialog
          $("#dg").datagrid("reload"); // reload the user data
        }
      },
    });
  });
};
