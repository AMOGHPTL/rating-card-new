const btn = document.querySelector('.btn');
const nums = document.querySelectorAll('.nums');
const box_selected = document.querySelector('.box_selected');
const container  = document.querySelector('.container');
const container2 = document.querySelector('.container--thanks');

    

 for(let num of nums){
    num.addEventListener('click',function(){
        for(let num of nums){
            num.classList.remove('nums--selected');
        }
        num.classList.toggle('nums--selected');
        box_selected.innerText = `You selected ${num.innerText} out of 5`;
     });
   
 }


 btn.addEventListener('click', function(){
    container.classList.add('hidden');
    container2.classList.remove('hidden');
 });





