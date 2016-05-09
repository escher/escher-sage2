/**
 * escher-sage2
 * Zachary King 2016
 * License: MIT
 */

/* global $, d3, escher, SAGE2_App */
'use strict'

function addCSS (url, callback) {
    var fileref = document.createElement('link')
    if (callback) fileref.onload = callback
    fileref.setAttribute('rel', 'stylesheet')
    fileref.setAttribute('type', 'text/css')
    fileref.setAttribute('href', url)
    document.head.appendChild(fileref)
}

var escher_sage2 = SAGE2_App.extend({
	init: function(data) {
		this.SAGE2Init('div', data)

		this.element.id = 'div' + data.id

		this.resizeEvents = 'continuous'

		var sel = d3.select(this.element)

        // add the stylesheet
        var path = this.resrcPath
        addCSS(path + 'scripts/css/bootstrap.min.css', function () {
            addCSS(path + 'scripts/css/builder.min.css', function () {
                d3.json(path + 'scripts/maps/e_coli_core.Core metabolism.json', function (error, data) {
                    console.log(data)
                    // load the builder
                    escher.Builder(data, null, null, sel, {
                        menu: 'zoom',
                        never_ask_before_quit: true,
                    })
                })
            })
        })
    },

    load: function(date) {
	},

	draw: function(date) {
	},

	resize: function(date) {
	},

	event: function(eventType, position, user_id, data, date) {
	}
})
