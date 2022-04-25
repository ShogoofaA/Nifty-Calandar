const today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
const currenthour = moment().hour()


// create an function to save information from the textarea to my localstorage
$('.saveBtn').on('click', saveText);

function saveText() {
    let saved = $(this).siblings('textarea').val();
    let savedID = $(this).siblings('textarea').attr('id');
    localStorage.setItem(saved, savedID)
    console.log('blargh')
}

function getInfo() {
    $('#9').val(localStorage.getItem('9'))
    $('#10').val(localStorage.getItem('10'))
    $('#11').val(localStorage.getItem('11'))
    $('#12').val(localStorage.getItem('12'))
    $('#1').val(localStorage.getItem('1'))
    $('#2').val(localStorage.getItem('2'))
    $('#3').val(localStorage.getItem('3'))
    $('#4').val(localStorage.getItem('4'))
    $('#5').val(localStorage.getItem('5'))
}


// check time by the hour and add a class of past present or future

function currentTime() {
    console.log('siuedfb')
    let textbox = $('.text')
    let textId = textbox[i].id;
    let Id = document.getElementById(textbox[i].id)
    for (var i = 0; i < textbox.length; i++) {
        if (textId < currenthour) {
            $(Id).addClass('past')
        } else if (textId > currenthour) {
            $(Id).addClass("future")
        } else {
            $(Id).addClass("present")
        }
    }
}
setInterval(currentTime(), (1000 * 60))
getInfo()