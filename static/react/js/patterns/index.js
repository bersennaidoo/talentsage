"use strict";
(() => {
  // static/js/patterns/booking-table/booking-grid.ts
  var url;
  var newBooking = () => {
    $("#newUser").on("click", function() {
      $("#dlg").dialog("open").dialog("setTitle", "New User");
      $("#fm").form("clear");
      url = "/api/heroes";
    });
  };
  var editBooking = () => {
    $("#editUser").on("click", function() {
      var row = $("#dg").datagrid("getSelected");
      if (row) {
        $("#dlg").dialog("open").dialog("setTitle", "Edit User");
        $("#fm").form("load", row);
        url = "/api/heroes/" + row.id;
      }
    });
  };
  var destroyBooking = () => {
    $("#destroyUser").on("click", function() {
      var row = $("#dg").datagrid("getSelected");
      if (row) {
        $.messager.confirm("Confirm", "Are you sure you want to destroy this booking?", function(r) {
          if (r) {
            $.post(`/api/heroes/delete/${row.id}`, function(result2) {
              if (result2) {
                $("#dg").datagrid("reload");
              } else {
                $.messager.show({
                  // show error message
                  title: "Error",
                  msg: result2.errorMsg
                });
              }
            }, "json");
          }
        });
      }
    });
  };
  var saveBooking = () => {
    $("#saveUser").on("click", function() {
      $("#fm").form("submit", {
        url,
        onSubmit: function() {
          return $(this).form("validate");
        },
        success: function(result) {
          var result = eval("(" + result + ")");
          if (result.errorMsg) {
            $.messager.show({
              title: "Error",
              msg: result.errorMsg
            });
          } else {
            $("#dlg").dialog("close");
            $("#dg").datagrid("reload");
          }
        }
      });
    });
  };

  // static/js/patterns/index.ts
  var Main = () => {
    newBooking();
    editBooking();
    destroyBooking();
    saveBooking();
  };
  Main();
})();
//# sourceMappingURL=http://localhost:1313/react/js/patterns/index.js.map
