'use strict';

var user = {
    name: 'John Linder',
    sex: 'male',
    id: '123456789',
    phone: '+380631234567',
    email: 'linder@gmail.com',

    render: function(){
        var html = '';
        var data = document.querySelector('#userInfo');

        for(var i in this){
            if(typeof this[i] === 'function')

            continue;

            html += `<p><span>${i}</span>: ${this[i]}</p>`;
        }
        return data.innerHTML = html;
    }
}

user.render('userInfo');