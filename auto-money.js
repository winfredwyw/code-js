var autoMoney=(function(){
   var money=0,
       retmoney='';
   return{
     set_money:function(a){
       money=a;
       retmoney='';
       return this;
     },
     get_money:function(){
       var b=money;
       var c=0;
       while(parseInt(b/1000)>0){
          c=1;
          if(c==1){
            retmoney=','+(b%1000).toString()+retmoney;
          }else{
            retmoney=retmoney+','+(b%1000).toString();
          }          
          b=parseInt(b/1000);
       }
       retmoney=b.toString()+retmoney;
       return retmoney;
     }
   }
}());
