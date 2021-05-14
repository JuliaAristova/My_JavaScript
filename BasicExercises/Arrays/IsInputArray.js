/*
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true
 */
var td1 = "w3resource";
var  td2 = [1,2,3,4,5];

    function is_array(inputData) {
        var result = Array.isArray(inputData);
        if (result) {
            return true;
        } else {
            return false;
        }


        document.getElementById("p1").innerHTML = is_array(td1) + "<br>" + is_array(td2);
    }

    //
    // var is_array = function(input) {
    //     if (toString.call(input) === "[object Array]")
    //         return true;
    //     return false;
    // };
    // console.log(is_array('w3resource'));
    // console.log(is_array([1, 2, 4, 0]));

