exports.find = function(req, res){
	res.send('Find a teacher!');
};

exports.write = function(req, res){
	res.send('Create a teacher');
};

exports.place = function(req, res){
	res.send('update a teacher');
};

exports.remove = function(req, res){
	res.send('delete a teacher');
};