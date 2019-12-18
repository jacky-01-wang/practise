var article={
    cateGory: function (options) {
        $.ajax({
            url:CATEGORY,
            success: function (res) {
                if (res.code==200) {
                    options.success(res)
                }
            }
        })
    },
   addCate: function (options) {
    $.ajax({
        type:'post',
        url:'http://localhost:8000/admin/category_add',
        data:{
            name:options.data.name,
            slug:options.data.slug
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
   editCate: function (options) {
    $.ajax({
        type:'post',
        url:EDITCATE,
        data:$('form').serialize(),
        success: function (res) {
            options.success()
        }
    })
   },
   delCate: function (options) {
    $.ajax({
        type:'post',
        url:DELCATE,
        data:{id:options.data.id},
        success: function (res) {
            if (res.code==200) {
                options.success()
            }
        }
    })  
   },
   Publish: function (options) {
    $.ajax({
        type:'post',
        url:PUBLISH,
        data:options.data,
        contentType:false,
            processData:false,
        success: function (res) {
           if (res.code==201) {
               options.success(res)
           }
        }

    })
   },
   showPage: function (options) {
    $.ajax({
        url:SEARCH,
        data:{
            page:options.page,
            type:$('#selCategory').val(),
            state:$('#selStatus').val()
      },
      
        success: function (res) {
            if (res.code==200) {
            options.success(res); 
}         
}
})
   },
   delCate: function (options) {
    $.ajax({
        url:DELCATE,
        data:{id:options.data.id},
        success: function (res) {
            if (res.code==200) {
                options.success()
            }
        }
    })
   },
   editCate: function (options) {
    $.ajax({
        type:'post',
        url:EDITCATE,
        data:$('form').serialize(),
        success: function (res) {
            options.success()
        }
    })
   }
}