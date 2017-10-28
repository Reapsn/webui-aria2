function webdav_del(uri) {
    
    if ( "" == uri) {
        return;
    }
    
    $.ajax({
       type: 'DELETE',
       url: uri,
       async: false,
       error: function(msg){
           alter(msg + "\r\nfailing delete uri:" + uri);
       },
    });
}