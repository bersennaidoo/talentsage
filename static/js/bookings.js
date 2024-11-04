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

        $(this).dialog("close");
      },
      Cancel: function () {
        $(this).dialog("close");
      },
    },
  });
  $(".create").on("click", function () {
     
		$( "#dialog-create" )
        .dialog( "option", {
            title: "Create Booking",
        })
        .dialog( "open" ); 
  });
});

$(function() {
    $( "#dialog-edit" ).dialog({
		autoOpen: false,
		buttons: {
			Update: function() {
				var date = $( "#Date" ).val(),
					startTime = $( "#startTime" ).val(),
                    endTime = $("#endTime").val()
					row = $( this ).data( "editingRow" );

				row.find( "td" ).eq( 1 ).text( date );
				row.find( "td" ).eq( 2 ).text( startTime );
				row.find( "td" ).eq( 3 ).text( endTime );
				$( this ).dialog( "close" );
			},
			Cancel: function() {
				$( this ).dialog( "close" );
			}
		}
	});

	$( "table" ).on( "click", ".edit", function() {
		var row = $( this ).parents( "tr" ),
			date = row.find( "td" ).eq( 1 ).text(),
			startTime = row.find( "td" ).eq( 2 ).text(),
			endTime = row.find( "td" ).eq( 3).text();
		
		$( "#Date" ).val( date );
		$( "#startTime" ).val( startTime );
		$( "#endTime" ).val( endTime );

		$( "#dialog-edit" )
			.dialog( "option", {
				title: "Edit Booking",
			})
			.data( "editingRow", row )
			.dialog( "open" ); 
	});
})

$(function() {
    $( "#dialog-delete" ).dialog({
		autoOpen: false,
		buttons: {
			Delete: function() {
                $(this).dialog("close")
			},
			Cancel: function() {
				$( this ).dialog( "close" );
			}
		}
	});

	$( "table" ).on( "click", ".delete", function() {

		$( "#dialog-delete" )
			.dialog( "option", {
				title: "Delete Booking",
			})
			.dialog( "open" ); 
	});
})