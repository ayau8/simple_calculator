(function() {
    
    //screen, buttons, equal, clear - 4 variables required
    // screen to be able to reflect the numbers as you click the numbers
    // to be able to evaluate the result as you click equal
    // to be able to clear the numbers as you click C

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');
    

    //dataset.num is used to access data-set in HTML
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    }); 

    equal.addEventListener('click', function(e){
        let answer = eval(screen.value)
        screen.value = answer
    });

    clear.addEventListener('click', function(e){
        screen.value = ""
    });

})();