parkApp.controller('PhotoController', ['$scope', '$http', 'Upload', function($scope, $http, Upload) {
  console.log('pc hit');
  var vm = this;
    // file variables
    $scope.file = '';
    $scope.uploads = [];
    $scope.comment = '';
    $scope.userId = '';
    $scope.journalId = '';

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

    vm.deleteImage = function(id){
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this photo!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel please!",
        closeOnConfirm: false,
        closeOnCancel: false },
        function(isConfirm){
          if (isConfirm) {
            swal("Deleted!", "That image was weak anyway.", "success");
            $http.delete("/uploads/" + id)
            .then(function(){
              getImages();
            })
          } else {
            swal("Cancelled", "Your photo is safe :)", "error");
          }// end else
        });// end swal alert
      };// end deleteImage

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
                'comment': $scope.comment,
                'userId': $scope.userId,
                'journalId': $scope.journalId
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
