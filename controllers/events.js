
const eventHandler = (req, res, db) => {

    const {title, eventdate, location, imgurl, description} = req.body;

    // if(!title || !imgURL || !location) {
    //     return res.status(400).json('incorrect form submission');
    // }

    db('event')
        .returning('*')
        .insert({
            title: title,
            eventdate: eventdate,
            location: location,
            imgurl: imgurl,
            description: description
        })
        .then(singleevent => {
            res.json(singleevent[0]);
        })
        .catch(err => res.status(400).json(err))
    }

module.exports = {
eventHandler: eventHandler
}