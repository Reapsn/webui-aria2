function webdav_del(uri) {
    
    if ( "" == uri) {
        return;
    }
    
    $.ajax({
       type: 'DELETE',
       url: uri,
       async: false,
       error: function(msg){
           if (404 == msg.staus) {
               // ignore 404
               return;
           }
           alert("delete failed, uri: " + uri + "\r\n" + msg.responseText);
       },
    });
}
