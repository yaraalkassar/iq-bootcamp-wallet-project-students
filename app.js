$(document).ready(function(){
    $('.modal-trigger').leanModal();
  });

   $(document).ready(function() {
    $('select').material_select();
  });

  $('.select-wallet').change(function(e){
    
    if(e.target.value==="createWallet"){
       $('#modal1').openModal();
    }
 
});
