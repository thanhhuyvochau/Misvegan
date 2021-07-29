Array.prototype.forEach.call(document.body.querySelectorAll("*[data-mask]"), applyDataMask);

function applyDataMask(field) {
    var mask = field.dataset.mask.split('');


    function stripMask(maskedData) {
        function isDigit(char) {
            return /\d/.test(char);
        }
        return maskedData.split('').filter(isDigit);
    }


    function applyMask(data) {
        console.log("DATA:" + data);
        return mask.map(function(char) {

            if (char != '_') return char;
            if (data.length == 0) return char;

            return data.shift();
        }).join('')
    }

    function reapplyMask(data) {

        return applyMask(stripMask(data));
    }

    function changed() {
        var oldStart = field.selectionStart;
        var oldEnd = field.selectionEnd;
        console.log(oldStart);
        console.log(oldEnd)
        field.value = reapplyMask(field.value);

        field.selectionStart = oldStart;
        field.selectionEnd = oldEnd;
    }

    field.addEventListener('click', changed)
    field.addEventListener('keyup', changed)
}