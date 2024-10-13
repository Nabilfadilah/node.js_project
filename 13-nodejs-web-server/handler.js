exports.sayHello = (req, res) => {
    const response = {
        message: 'Hi, Gordonn'
    }

    res.statusCode = 200;
    res.setHeader('Conent-Type', 'application/json');
    res.end(JSON.stringify(response));
}