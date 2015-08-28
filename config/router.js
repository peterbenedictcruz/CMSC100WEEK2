var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router){
	router.route('/students')
	.get(student.find)
	
	router.route('/teachers')
	.get(teacher.find)	
	.post(teacher.write)
	.put(teacher.place)
	.delete(teacher.remove);
	
	return router;
};