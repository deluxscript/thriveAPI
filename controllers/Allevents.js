const Allevents = (req, res, db) => {
	const { id } = req.params;
	db.select('*').from('event')
		.then(singleevent => {
			if(singleevent.length) {
				res.json(singleevent)
			}
			else {
				res.status(400).json('No user found')
			}
			
		})
		.catch(err => res.status(400).json('No user found'))
}

module.exports = {
    Allevents: Allevents
}