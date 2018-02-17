
$("#submit").click( function( event ){
    var name = $("#name").val();
    var email = $("#email").val();
    var tel = $("#tel").val();
    event.preventDefault();
    $.ajax({
        method: "POST",
        url: "form.php",
        data: {name: name, email: email, tel: tel}
    }).done(function(msg){
        var obj = $.parseJSON(msg);
        console.log(obj);
        if (obj.hasOwnProperty('success')) {
            $("#success").html(obj.success);
            $(".error").remove();
        } else {
            $("#success").empty();
            var i = 0;
            $.each(obj, function(key, value){
                i++;
                var errorElem = $(".form-group input#"+key);
                var error = errorElem.next();

                if ($.isEmptyObject(value)) {
                    if (!error.is('span')) {
                        errorElem.after("<span class='error'>Поле " + key + " введено не верно.</span>");
                    }
                } else {
                    if (error.is('span')) {
                        error.remove();
                    }
                }
            });
        }
    });
});

var tel = $("#tel");
var tele = document.getElementById('tel');

tel.bind('click', focus);
tel.bind('focus', focus);
tel.bind('keydown', format);
tel.bind('blur', blur);

var seleStart;

function blur(){
    seleStart = tele.selectionStart;
}

function format(e){
    var key = e.key;
    var keyCode = e.keyCode;
    var str = $("#tel").val();
    if (seleStart > 0 ) {
        tele.selectionStart = seleStart++;
    }
    var pos = tele.selectionStart;
    console.log(pos);

    if (pos >= 0 && pos <= 3) {
        pos = 4;
    }
    var posDel = pos + 1;
    var charDel = str.charAt(pos); // char to delete
    tel.unbind('focus', focus);
    tel.unbind('click', focus);
    tel.bind('focus', repeat_focus(pos));
    tel.bind('click', repeat_focus(pos));
    if ((keyCode <= 47 || keyCode >=65) && keyCode !== 8 && keyCode !== 46 && keyCode !== 9){
        return false;
    } else if (key === 'Backspace'){
        backspace(str, pos, posDel);
        return false;
    } else if (key === 'Delete'){
        btnDelete(str, pos, posDel, 0);
        return false;
    } else if (key === 'Tab') {
        tel.blur();
        tel.nextSibling.focus();
        return false;
    }
    selectReplaceChar(str, pos, posDel, charDel);
}

function repeat_focus(start){
    tele.setSelectionRange(start, start);
}

function backspace(str, pos, posDel){
    var re= /[\d]/gi;
    var charDel = str.charAt(pos-1);
    var tel = $("#tel");
    var i = 0;
    if (charDel.match(re) !== null) {
        if (pos > 0 && pos <= 4) {
            return false;
        }
        tel.val(delChars(str, pos - 1, posDel - 1));
        tel.val(insertChars(str, pos - 1, posDel - 1, '_'));
        tele.setSelectionRange(pos - 1, pos - 1);
        seleStart--;
    } else {
        backspace(str, pos-1, posDel-1);
    }
}

function btnDelete(str, pos, posDel, i){
    var re= /[\d]/gi;
    var charDel = str.charAt(pos);
    var tel = $("#tel");
    if (charDel.match(re) !== null) {
        if (pos >= 0 && pos < 4) {
            tele.setSelectionRange(4,4);
            return false;
        }
        tel.val(delChars(str, pos, posDel));
        tel.val(insertChars(str, pos, posDel, '_'));
        tele.setSelectionRange(pos + 1, pos + 1);
    } else {
        if (i > 10) {
            tele.selectionStart = 4;
            tele.selectionEnd = 4;
            return false;
        }
        btnDelete(str, pos+1, posDel+1, ++i);
    }
}

function selectReplaceChar(str, pos, posDel, charDel){
    var re = /[\(\)-]/gi;
    while (charDel.match(re) !== null) {
        charDel = str.charAt(posDel++);
        pos++;
    }
    $("#tel").val(delChars(str, pos, posDel));
    tele.setSelectionRange(pos, pos);
}

function insertChars(str, from, to, insert) {
    return str.substring(0,from)+insert+str.substring(to);
}

function delChars(str, from, to) {
    return str.substring(0,from)+str.substring(to);
}

function focus(){
    this.value = '380(__)___-__-__';
    tele.setSelectionRange(4,4);
}