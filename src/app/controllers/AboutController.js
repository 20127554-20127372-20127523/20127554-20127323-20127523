class AboutController{
    index(req, res){
        res.render('about')
    }

    show(req, res){
        res.send('About');
    }
}

module.exports = new AboutController;
