let time = "1:00:45PM";

function timeConversion(time) {
    
    let s = time.split(":");
    let amORpm = s[2].charAt(2).toLowerCase();
    if (amORpm === 'a' && parseInt(s[0]) === 12) s[0] = '00';
    if (amORpm === 'p' && parseInt(s[0]) < 12) s[0] = parseInt(s[0]) + 12;
    s[2] = s[2].split('').slice(0,2).join('');
    console.log( s.join(':'));
}

timeConversion(time)