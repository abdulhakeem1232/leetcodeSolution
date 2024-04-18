var checkRecord = function (s) {
    let absent = 0, late = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'A') {
        else if (s[i] == 'L') {
        else {
            late++
            if (late == 3) return false
        }
            absent++
        }

            late = 0
        }
            late=0
    }
    return absent < 2
"
