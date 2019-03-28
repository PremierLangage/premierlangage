'use strict';

class Nodes {

    constructor() {
        this._save = $('.action-save');
        this._submit = $('.action-submit');

        this._container = $(".exercise-container");
        this._header = $('.exercise__header');
        this._title = $('.exercise__title');
        this._author = $('.exercise__author');
        this._body =  $('.exercise__body');
        this._instructions = $('.exercise__instructions');
        this._form = $('.exercise__form');
        this._actions = $('.exercise__actions');
        this._spinner = $('.exercise__spinner');
        this._feedback = $('.exercise__feedback');
    }

    get save() { return this._save; }
    get submit() { return this._submit; }
    get title() { return this._title; }
    get author() { return this._author; }
    get container() { return this._container; }
    get header() { return this._header; }
    get body() { return this._body; }
    get instructions() { return this._instructions; }
    get form() { return this._form; }
    get actions() { return this._actions; }
    get spinner() { return this._spinner; }
    get feedback() { return this._feedback; }

}

class Activity {

    constructor(options) {
        this.options = options;
        this.nodes.spinner.slideUp();
        this.nodes.actions.slideDown();

        this.addListeners();

        MathJax.Hub.Queue(["Typeset", MathJax.Hub]); // fix #198

        if (window.onReadyPL) {
            window.onReadyPL(this.nodes);
        }
    }

    /**
     * Creates new instance of Activity for test activity.
     * @param {string} activityId the id of the activity
     * @param {string} sessionId  the id of the session
     * @returns {Activity} new Activity object
     */
    static withTest(activityId, sessionId) {
        return new Activity({
            activityId: activityId,
            sessionId: sessionId
        });
    }

    /**
     * Creates new instance of Activity for eval activity.
     * @param {*} url the url of the activity
     * @returns {Activity} new Activity object
     */
    static withEval(url) {
        return new Activity({
            url: url
        });
    }

    get nodes() {
        return this._nodes || (this._nodes = new Nodes());
    }

    get inputs() {
        const inputs = {};
        $( "[id^='form_']" ).each(function() {
            const id = this.id.slice(5); // name of the variable
            const value = $(this).val();
            if ($(this).is(':radio')) {
                if($(this).is(':checked')) {
                    inputs[id] = value;
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
                inputs[id] = value;
            }
        });
        return inputs;
    }

    /** Adds listeners to buttons */
    addListeners() {
        if (this.nodes.save) {
            this.nodes.save.click(() => this.didTapSave());
        }

        if (this.nodes.submit) {
            this.nodes.submit.click(() => this.didTapSubmit());
        }
    }

    /** Handles save button click */
    didTapSave() {
        this.nodes.actions.slideUp();
        this.nodes.spinner.slideDown();
        this.evaluate(this.options.url, {
            requested_action: 'save', 
            inputs: this.inputs
        });
    }

    /** Handles submit button click */
    didTapSubmit() {
        if (!window.onBeforeSubmitPL || window.onBeforeSubmitPL(this.nodes) === true) {
            this.nodes.actions.slideUp();
            this.nodes.spinner.slideDown();

            if (this.options.url) {
                this.evaluate(this.options.url, {
                    requested_action: 'submit', 
                    inputs: this.inputs
                });
            } else {
                this.evaluate("/filebrowser/option", {
                    name: "evaluate_pl",
                    data: {
                        answers: this.inputs,
                        id: this.options.activityId,
                        session_id: this.options.sessionId,
                        other: [],
                    },
                });
            }
        }
    }

    /**
     * Sends a post request to the server to evaluate the answers
     * @param {*} url the request url
     * @param {*} data the post data
     */
    evaluate(url, data) {
        const that = this;
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(data, null, '\t'),
            contentType: 'application/json;charset=UTF-8',
            success: function(response) {
                that.onSuccess(response);
                that.nodes.spinner.slideUp();
                that.nodes.actions.slideDown();
            },
            error: function(error) {
                that.onFailed(error);
                that.nodes.spinner.slideUp();
                that.nodes.actions.slideDown();
            }
        });
    }

    /**
     * Handles ajax success response
     * @param {*} response the response of the ajax request
     */
    onSuccess(response) {
        if (response.exercise) {
            this.nodes.container.html(response.exercise);
            this._nodes = new Nodes();
        }

        if (response.feedback) {
            this.nodes.feedback.html(response.feedback);
        }

        MathJax.Hub.Queue(["Typeset", MathJax.Hub]); // fix #198

        if (window.onAfterSubmitPL) {
            window.onAfterSubmitPL(this.nodes);
        }
    }

    /**
     * Handles ajax error response
     * @param {*} error the error of the ajax request
     */
    onFailed(error) {
        this.nodes.feedback.hide();
        this.nodes.feedback.html(JSON.stringify(error));
    }

}
