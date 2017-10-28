function webdav_del(uri) {
    
    if ( "" == uri) {
        return;
    }
    
    $.ajax({
       type: 'DELETE',
       url: uri,
       async: false,
       error: function(msg){
           alert("delete failed, uri: " + uri + "\r\n" + msg);
       },
    });
}
