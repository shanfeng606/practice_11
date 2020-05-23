var isdown=false;
$('#btn').click(function(){
    if(!isdown){
        $('.nav-item').css({ 
            'height':'125px',
            'top':'1.5rem'       
        });
        isdown=true;
    }else{
        $('.nav-item').css({ 
            'height':'1.5rem',
            'top':0      
        });
        isdown=false;
    }
})