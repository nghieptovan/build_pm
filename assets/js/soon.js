
export function soonjs(){

    $(document).ready(function(){
        var soons = document.querySelectorAll('#soon-sep');
        // console.log(soons);
          Soon.create(soons[0]);
    });
   
}
