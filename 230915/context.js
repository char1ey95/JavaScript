var a = 10;

function b() {
    console.log("b")
    function c() {
        console.log("c in b")
    }

    c();
}

b();