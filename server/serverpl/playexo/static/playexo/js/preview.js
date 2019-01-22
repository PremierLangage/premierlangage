function previewPL(activityId, sessionId) {
    let submit_button = $( "#submit_button" );
    submit_button.click(function() {
        submit_button.prop('disabled', true);

        const inputs = getInputs();
        const data = {
            answers: inputs,
            id: activityId,
            session_id: sessionId,
            other: [],
        }

        let status = {
            name: "preview_pl",
            requested_action: 'submit',
            data: data,
        };

        $.ajax({
            type : "POST",
            url : "/filebrowser/option",
            data: JSON.stringify(status, null, '\t'),
            contentType: 'application/json;charset=UTF-8',
            success: function(returned_status) {
                status = returned_status;
                onReturn(status.exercise, status.navigation, status.feedback);
                submit_button.prop('disabled', false);
            },
            error: function(error) {
                submit_button.prop('disabled', false);
            }
        });
    });
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

    if(window.top != window.self) {
        $('#home-link').remove();
    }

    $( "#download_env_button" ).click(function() {
        window.onbeforeunload = function () {}
    });

    function getInputs(){
        var inputs = {};
        $( "[id^='form_']" ).each(function() {
            var id = this.id.slice(5); // name of the variable
            var value = $(this).val();
            if ($(this).is(':radio')) {
                if($(this).is(':checked')) {
                    inputs[id]=value;
                }
            }
            else if ($(this).is(':checkbox')) {
                if($(this).is(':checked')) {
                    if (id in inputs) {
                        inputs[id].push(value);
                    }
                    else {
                        inputs[id] = [value]
                    }
                }
            }
            else {
                inputs[id]=value;
            }
        });
        return inputs;
    }

    function onReturn(exercise, navigation, feedback) {
        if (exercise) {
            $( "#exercise" ).html(exercise);
        }
        if (feedback) {
            f = $( "#feedback" );
            f.hide();
            setTimeout(function () {
                f.html(feedback);
                f.show();
            },  100);
        }
    }
}