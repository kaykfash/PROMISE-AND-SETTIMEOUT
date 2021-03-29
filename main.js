// Settimeout function Example

const displayMsg = document.getElementById('display-msg')

      displayMsg.addEventListener('click',function(){
        setTimeout(function (){
            alert(' You are Welcome')
        },4000)
      })