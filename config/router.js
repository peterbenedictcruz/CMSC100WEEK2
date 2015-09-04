var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router){
	router.route('/students')
	.get(student.find)
	.post(student.insert)
	
	router.route('/students/:id')
	.get(student.findOne)
	.put(student.update)
	.delete(student.remove)
	
	router.route('/teachers')
	.get(teacher.find)	
	.post(teacher.write)
	.put(teacher.place)
	.delete(teacher.remove);
	
	return router;
};