/*
* @Author: xshis
* @Date:   2018-05-23 11:45:50
* @Last Modified by:   xshis
* @Last Modified time: 2018-05-23 11:45:52
*/
$(function ()
{
        $('.change a').click(function ()
        {
            $('.signform').animate({height: 'toggle', opacity: 'toggle'}, 'slow');
        });
})

function startloginform() {
document.getElementById('signform').style.display=""
}

function startcartform() {
    document.getElementById('thiscartfrom').style.display=""
    }
function signclose() {
    document.getElementById('signform').style.display="none"
    document.getElementById('registerform').style.display="none"
}
function loading() {
    document.getElementById('registerloading').style.display=""
}

function cartformclose() {
    document.getElementById('thiscartfrom').style.display="none"
}
