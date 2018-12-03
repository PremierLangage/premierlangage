angular.module('app')
.component('app', {
    templateUrl: '/static/filebrowser/app.component.html',
    controller: function(AppService) {        
        const instance = this;
        instance.loading = true;

        instance.documents = function() {
            return AppService.documents;
        };

        instance.hasRepo = function() {
            const selection = AppService.explorerSelection;
            return selection && selection.repo;
        }

        instance.repo = function() {
            return AppService.explorerSelection.repo;
        }

        window.onbeforeunload = function(e) {
            e.preventDefault();
            e.returnValue = '';
            return '';
        };

        AppService.loadExplorer(() => {
            instance.loading = false;
        });     
    }
});