
var emails = []

// hide form-group
$('#form').hide()
$('#output').hide()

document.getElementById('inputfile')
    .addEventListener('change', function() {
        
        var fr=new FileReader();
        fr.onload=function(){
            emails = fr.result.split('\n')
            // count numebr of @
            var count = 0
            for (var i = 0; i < emails.length; i++) {
                if (emails[i].includes('@')) {
                    count++
                }
            }

            if (count < 100) {
                document.getElementById('error').textContent="Invalid email file. Please select another file";
                $('#form').hide()
                $('#output').hide()
            } else {
                document.getElementById('error').textContent="";
                // make form-group visible
                $('#form').show()
                $('#output').show()
            }
        }
            
        fr.readAsText(this.files[0]);
    })

// connect submit button to function
document.getElementById('submit').addEventListener('click', function() {
    // get input from form
    var size = document.getElementById('num').value

    // get checkbox value
    var check2022 = document.getElementById('2022-year').checked
    var check2023 = document.getElementById('2023-year').checked
    var check2024 = document.getElementById('2024-year').checked
    var check2025 = document.getElementById('2025-year').checked

    var emails_touch = [...emails]

    if (!check2022) {
        // for each email in emails, if the email starts with 22 remove it from emails_touch
        for (var i = 0; i < emails_touch.length; i++) {
            if (emails_touch[i].startsWith('2022')) {
                emails_touch.splice(i, 1)
                i--
            }
        }
    }
    if (!check2023) {
        // for each email in emails, if the email starts with 23 remove it from emails_touch
        for (var i = 0; i < emails_touch.length; i++) {
            if (emails_touch[i].startsWith('23')) {
                emails_touch.splice(i, 1)
                i--
            }
        }
    }
    if (!check2024) {
        // for each email in emails, if the email starts with 24 remove it from emails_touch
        for (var i = 0; i < emails_touch.length; i++) {
            if (emails_touch[i].startsWith('24')) {
                emails_touch.splice(i, 1)
                i--
            }
        }
    }
    if (!check2025) {
        // for each email in emails, if the email starts with 25 remove it from emails_touch
        for (var i = 0; i < emails_touch.length; i++) {
            if (emails_touch[i].startsWith('25')) {
                emails_touch.splice(i, 1)
                i--
            }
        }
    }
    

    // pick a random set of emails with size size and display them
    var output = []
    for (var i = 0; i < size; i++) {
        var random = Math.floor(Math.random() * emails_touch.length)
        output.push(emails_touch[random])
    }
    console.log(output)
    document.getElementById('output').innerHTML = output.join('\n')

})