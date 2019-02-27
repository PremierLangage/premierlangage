function getInputs(){
    let inputs = {};
    $( "[id^='form_']" ).each(function() {
        let id = this.id.slice(5); // name of the variable
        let value = $(this).val();
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

function onEvaluatedPL(response) {
    if (response.exercise) {
        $("#exercise").html(response.exercise);
    }
    if (response.feedback) {
        const node = $("#feedback");
        node.hide();
        setTimeout(function () {
            node.html(response.feedback);
            node.show();
        }, 100);
    }
    emitOnAfterPL();
}

function onFailedPL(error) {
    const node = $("#feedback");
    node.hide();
    setTimeout(function () {
        node.html(JSON.stringify(error));
        node.show();
    }, 100);
}

function emitOnBeforePL() {
    if (window.onBeforeSubmitPL) {
        window.onBeforeSubmitPL();
    }
}

function emitOnAfterPL() {
    if (window.onAfterSubmitPL) {
        window.onAfterSubmitPL();
    }
}

function previewPL(activityId, sessionId) {
    let submitButton = $("#submit_button");
    const downloadButton = $( "#download_env_button" );
    const loadingIndicator = $("#loading-indicator");
    loadingIndicator.hide();
    
    function toggleButtons(disable) {
        submitButton.prop('disabled', disable);
        loadingIndicator.hide();
        if (disable) {
            loadingIndicator.show();
        }
        componentHandler.upgradeDom();
    }

    submitButton.click(function() {
        emitOnBeforePL();
        toggleButtons(true);
        
        const postData = {
            name: "evaluate_pl",
            data: {
                answers: getInputs(),
                id: activityId,
                session_id: sessionId,
                other: [],
            },
        };

        $.ajax({
            type : "POST",
            url : "/filebrowser/option",
            data: JSON.stringify(postData, null, '\t'),
            contentType: 'application/json;charset=UTF-8',
            success: function(response) {
                onEvaluatedPL(response);
                toggleButtons(false);
        
            },
            error: function(error) {
                onFailedPL(error);
                toggleButtons(false);
            }
        });
    });
    
    downloadButton.click(function() {
        window.onbeforeunload = function () {}
    });

   // MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    
    if(window.top != window.self) {
        $('#home-link').remove();
    }

}

function evaluatePL(url) {
    const submitButton = $("#submit_button");
    const saveButton = $("#save_button");
    const loadingIndicator = $("#loading-indicator");

    loadingIndicator.hide();

    function toggleButtons(disable) {
        submitButton.prop('disabled', disable);
        saveButton.prop('disabled', disable);
        loadingIndicator.hide();
        if (disable) {
            loadingIndicator.show();
        }
        componentHandler.upgradeDom();
    }
      
    submitButton.click(() => submitForm('submit'));
    saveButton.click(() => submitForm('save'));

    function submitForm(action) {
        emitOnBeforePL();
        toggleButtons(true);
        const postData = {
            requested_action: action, 
            inputs: getInputs()
        };

        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(postData, null, '\t'),
            contentType: 'application/json;charset=UTF-8',
            success: function (response) {
                onEvaluatedPL(response);
                toggleButtons(false);
            },
            error: function (error) {
                onFailedPL(error);
                toggleButtons(false);
            }
        });
    }
}
