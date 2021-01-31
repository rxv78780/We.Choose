$(document).ready(function () {
    $("#questionare").hide();
    var count = 0;
    var usercount = "";
    var emailarr = [];
    var Q1ans = [];
    var Q2ans = [];
    var Q3ans = [];
  
    function QALoad() {
      
        var jqxhr = $.getJSON("FoodData.json", function (json) {

            //var myfile = JSON.stringify(json)

            $('#Question').text(json.QA1[count].question);

            jQuery.each(json.QA1[0].answer, function (i, val) {
                i++;
                $("#Q" + i).text(val);
                i--;
            });
            $('input:radio').removeAttr('checked');
            $('#' + json.User[usercount].answer[count]).attr('checked', true);

            console.log("success" + json.User[usercount].answer[count]);

            count++;
            if (count > 2) {
                count = 0;
            }
           
            

        })
            .done(function () {
                console.log("second success");
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
        //$.ajax({
        //    url: "FoodData.json",
        //    dataType: "json",
        //    success: function (data) {
        //        $('#Question').text(data.QA1[count].question);
        //        count++;
        //        jQuery.each(data.QA1[0].answer, function (i, val) {
        //            i++;
        //            $("#Q" + i).text(val);
        //            i--;
        //        });
        //        $('#' + data.User[usercount].answer).attr("selected", "selected");
        //        count++;
        //        var newMovie = { cast: 'Jack Nicholson', director: 'someone' } // a new movie object

        //        // add a new movie to the set
        //       // data.push(JSON.stringify(newMovie));
        //        console.log("success" + data.Question1);
        //        // Here, `data` will be the object resulting from deserializing the JSON
        //        // Store `data` somewhere useful, perhaps you might have a `friends`
        //        // variable declared somewhere; if so:
        //       // friends = data;
        //    },
        //    error: function () {
        //        // Handle the error
        //    }
       // });

        //var jqxhr = $.getJSON("FoodData.json", function (json) {

        //    //var myfile = JSON.stringify(json)

        //    $('#Question').text(json.QA1[count].question);

        //    jQuery.each(json.QA1[0].answer, function (i, val) {
        //        i++;
        //        $("#Q" + i).text(val);
        //        i--;
        //    });
        //    count++;
        //    var newMovie = { cast: 'Jack Nicholson', director:'someone'} // a new movie object

        //    // add a new movie to the set
        //    json.push(JSON.stringify(newMovie));   
        //    console.log("success" + json.Question1);

        //})
        //    .done(function () {
        //        console.log("second success");
        //    })
        //    .fail(function () {
        //        console.log("error");
        //    })
        //    .always(function () {
        //        console.log("complete");
        //    });

        //// Perform other work here ...

        //// Set another completion function for the request above
        //jqxhr.always(function () {
        //    console.log("second complete");
        //});
    }
    $("#email").focusout(function () {
        count = 0;
    });
    
    $('#btn').click(function () {
        $("#questionare").show();
        $("#nme").hide();
       // $("#questionare").css("visibility", "visible");
        var name = $("#email").val();

        if (name == "RAY") {
            usercount = 0;
        }
        else if (name =="TOM") {
            usercount = 1;
        }
        else if (name == 'LUFFY') {
            usercount = 2;
        }
        else if (name == 'SANAKA') {
            usercount = 3;
        }
        //   $("#questionare").css("visibility", "visible");
        if (usercount != "") { QALoad();}
        
    });

    $('#btn2').click(function () {
        $("#email").val('');
        $("#nme").show();
     
            $("#questionare").hide();
        });


   

});