//#Patterns: no-caller


function foo(n) {
    if (n <= 0) {
        return;
    }
    //#Err: no-caller
    arguments.callee(n - 1);
}

function foo(n) {
    if (n <= 0) {
        return;
    }

    foo(n - 1);
}
