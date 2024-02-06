function delayedFx(){
    setTimeout(function(){
        SomeAction();
    }, 3000);
    return Promise;
}

delayedFx();
