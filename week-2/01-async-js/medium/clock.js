function clockIn24Hours(){
    setInterval(() => {
        const time = new Date();
        let finalOutput = `${time.getHours()}:${time.getMinutes()}::${time.getSeconds()}`
        console.log(finalOutput);
    }, 1000);    
}

function clockIn12Hours() {
    setInterval(() => {
        const time = new Date();
        if(time.getHours() > 12) {
            let finalOutput = `${time.getHours() - 12}:${time.getMinutes()}::${time.getSeconds()} PM`;
            console.log(finalOutput);
        }else {
            let finalOutput = `${time.getHours()}:${time.getMinutes()}::${time.getSeconds()} AM`;
            console.log(finalOutput);
        }
    }, 1000)
}

clockIn12Hours();