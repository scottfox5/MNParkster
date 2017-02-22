parkApp.controller('photoController', ['$scope', '$http', 'Upload', function($scope, $http, Upload) {
  console.log('pc hit');

    // file variables
    $scope.file = '';
    $scope.uploads = [];
    $scope.comment = '';
    // $scope.userId = '';

    //loads any already uploaded images
    getImages();

//loads images already uploaded
    function getImages() {
        $http.get('/uploads')
            .then(function(response) {
                $scope.uploads = response.data;
                console.log('GET /uploads ', response.data);
            });
    }

    //file uploading functions
    $scope.submit = function() {
        if ($scope.form.file.$valid && $scope.file) {
            $scope.upload($scope.file);
            console.log('file', $scope.file);
        }
        else {
        }
    };

    $scope.upload = function(file) {

        Upload.upload({
            url: '/uploads',
            data: {
                file: file,
                //can add more variables to data to store in DB
                'comment': $scope.comment
                //'var2': $scope.var2
            }
        }).then(function(resp) {
            console.log('Success ' + resp.config.data.file.name + ' uploaded. Response: ' + resp.data);
            getImages();
        }, function(resp) {
            console.log('Error status: ' + resp.status);
        }, function(evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);

        });
    };



}]);
