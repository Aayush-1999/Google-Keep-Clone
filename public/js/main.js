document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems,{
        coverTrigger:false,
        constrainWidth:false
    });
});