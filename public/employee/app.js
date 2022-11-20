const express = require('express');
const path = require('path');
const app = express();
const port = 3007

app.use(express.static(path.join(_dirname, './login.html')))

app.get("./login.html", (req, res)=> {
    console.log('accessing route /, METHOD = GET');
    res.sendFile(path.join(_dirname, './login.html'));
});

app.get('./sign.html', (req, res) => {
    console.log('accessing the route /login, METHOD = GET');
    res.sendFile(path.join(_dirname, './sign.html'))
})

app.get('', (req,res) => {

})

app.listen(port, () => {
    console.log('Express server listening on port: ' + port);
})