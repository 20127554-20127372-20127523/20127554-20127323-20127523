class EventsController{
    index(req, res){
        res.render('events')
    }

    show(req, res){
        res.send('Events');
    }
}

module.exports = new EventsController;
