class MenuController{
    index(req, res){
        res.render('menu')
    }

    show(req, res){
        res.send('Menu');
    }
}

module.exports = new MenuController;
