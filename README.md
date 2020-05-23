### 核心知识点

>媒体查询
```css
/* 默认手机端 */
/* ipad适配 */
@media(min-width:768px){

}
```

>菜单下拉交互

```javascript
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
```
>`cssrem`插件

自动将`px`转化为`rem`
