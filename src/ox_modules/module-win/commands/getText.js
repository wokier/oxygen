/*
 * Copyright (C) 2015-present CloudBeat Limited
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */

/**
 * @summary Returns the text (rendered text shown to the user; whitespace-trimmed) of an element.
 * @function getText
 * @param {String|Element} locator - Element locator.
 * @param {Number=} timeout - Timeout in milliseconds. Default is 60 seconds.
 * @return {String} - Element's text.
 * @for android, ios, hybrid, web
 * @example <caption>[javascript] Usage example</caption>
 * win.init(caps);//Starts a mobile session and opens app from desired capabilities
 * var a = win.getText("id=TextArea");//Gets the text from an element.
 */
module.exports = function(locator, timeout) {
    this.helpers.assertArgumentTimeout(timeout, 'timeout');

    var el = this.helpers.getElement(locator, true, timeout);
    var text = el.getText();
    if (text) {
        return text.trim().replace(/\s+/g, ' ');
    }
    return text;
};
