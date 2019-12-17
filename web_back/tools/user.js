var user={
    login: function (options) {
        $.ajax({
            type:'post',
            url:LOGIN,
            data:{
                user_name:options.data.username,
                password:options.data.password
            },
            success: function (res) {
                if (res.code==200) {
                   options.success()
                }else{
                   options.fail()
                }
            }
    
        })
    },
    logout: function (options) {
        $.ajax({
            type:'post',
            url:LOGOUT,
            success: function (res) {
                if (res.code==200) {
                    options.success()
                }else{
                   options.fail()
                }
            }
        })
    },
    getUser: function (options) {
        $.ajax({
            url:GETUSER,
            success: function (res) {
                if (res.code==200) {
                   options.success(res)
                }
            }
        })
    },
    userInfoGet: function (options) {
        $.ajax({
            url:USERINFO_GET,
            success: function(res){
             if (res.code==200) {
                 options.success(res)
             }
            } 
         }) 
    },
    userInfoEdit: function (options) {
        $.ajax({
            type:'post',
            url:USERINFOEDIT,
            data:options.data,
            contentType:false,
            processData:false,
            success: function (res) {
                if (res.code==200) {
                    options.success(res)
                }
            }
        })
    }
   
}