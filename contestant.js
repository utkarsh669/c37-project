class Contestant{
    constructor(){
        this.index=null;
        this.answer=0;
        this.name=null;
     
    }
    getCount(){
        var constestantCountRef=database.ref('constestantCount');
        constestantCountRef.on("value",function(data){
        contestantCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            contestantCount: count
        });
    }
    update(){
        var contestantIndex="contestants/contestant"+contestantCount;
        database.ref(contestantIndex).set({
         name:this.name,
         answer:this.answer
        });
    }
    static getContestantInfo(){
        var constestantInfoRef=database.ref('contestants');
      constestantInfoRef.on("value",(data)=>{
          allConstestants=data.val();
      
      })  
    }
}