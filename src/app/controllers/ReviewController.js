class ReviewController{
    index(req, res){
        res.render('review')
    }

    show(req, res){
        res.send('Review');
    }
}

module.exports = new ReviewController;
