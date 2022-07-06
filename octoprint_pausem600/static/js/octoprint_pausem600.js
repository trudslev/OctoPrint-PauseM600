/*
 * View model for OctoPrint-Octoprint_pausem600
 *
 * Author: Sune Trudslev
 * License: AGPLv3
 */
$(function() {
    function Octoprint_pausem600ViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: Octoprint_pausem600ViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ /* "loginStateViewModel", "settingsViewModel" */ ],
        // Elements to bind to, e.g. #settings_plugin_octoprint_pausem600, #tab_plugin_octoprint_pausem600, ...
        elements: [ /* ... */ ]
    });
});
