/* Add your JavaScript to this file */
onload= function(){

    var email = document.querySelector('#email');
    var message = document.querySelector('.message');


    addEventListener('submit', function (element){
        element.preventDefault();               

        if(!email.value==''){
            message.innerHTML = `Thank you! Your email address ${email.value} has been added to our mailing list!`;
            email.value = '';            
        }
        else{
            
            message.innerHTML = 'Please enter a valid email address';
            email.value = '';
        }
    })


};