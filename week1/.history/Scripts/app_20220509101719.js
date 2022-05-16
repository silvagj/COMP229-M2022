//IIFE -- Immediately Invoked Function Expression
// Anonymous Self-Executing Function

(function(){

    function Start()
{
    console.log("Test");
}

window.addEventListener("load", Start);
})();