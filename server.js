const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.post("/hooking", (req, res) => {
    console.log(req.body, "후킹동작!!")
    exec('mkdir ../zzzzzzzzzzzzzzz', (err, stdout, stderr) => {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (err !== null) {
            console.log('exec error: ' + err);
        }
        res.json({
            msg : "hello there!"
        })
    })    
})

app.listen(PORT, () => {
    console.log(`PORT ${PORT} listening...!`)
});