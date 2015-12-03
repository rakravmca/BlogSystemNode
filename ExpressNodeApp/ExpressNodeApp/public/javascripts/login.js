$(function () {
});

function auntheticate() {
    var username = 'rakesh';//$("#username").val();
    var email = $("#email").val();
    var pass = 'mindfire';//$("#password").val();
    
    /*
    * Perform some validation here.
    */
    var obj = {
        username: 'rakesh',
        password: 'mindfire'
    };
    
    //$.post('/login/auntheticate', JSON.stringify(obj), function (result) {
    //    if (result) {
    //        document.location.href = '/home';
    //    }
    //});

    $.ajax({
        url: '/auntheticate',
        dataType: "json",
        type: "post",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(obj),
        success: function (result) {
            if (result) {
                document.location.href = '/home';
            }
        },
        error: function (jqXHR, textstatus, errorThrown) {
            alert('text status ' + textstatus + ', err ' + errorThrown);
        }
    });
}