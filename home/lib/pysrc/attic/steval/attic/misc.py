class FunctionTestException(Exception):
	def __init__(self, name, arguments, student_result, teacher_result):
		self.name = name
		self.arguments = arguments
		self.student_result = student_result
		self.teacher_result = teacher_result
	def __repr__(self):
		return """Results of the execution of the function {} shows discrepancies between student and teacher versions:
Arguments: {}
Student result: {}
Teacher result: {}""".format(self.name, self.argument, self.student_result, self.teacher_result)
		
class ExecutionEnvironments(object):
	def __init__(self, student=None, teacher=None):
		self._executed = False
		self.student = CodeExecutionEnvironment.from_file(sys.argv[1]) if student is None else CodeExecutionEnvironment(student)
		self.teacher = CodeExecutionEnvironment.from_file(sys.argv[2]) if teacher is None else CodeExecutionEnvironment(teacher)
	def execute(self):
		self.student.execute()
		self.teacher.execute()
		self._executed = True
	def execute_function(self, name, *kargs, **kwargs):
		StudentTeacherResult = namedtuple("StudentTeacherResult", "student teacher")
		return StudentTeacherResult(*[e.execute_function(name, *kargs, **kwargs) for e in (self.student, self.teacher)])
	def test_results(self, function_name, *argument_sets, result_comparator = (lambda x, y: x.result == y.result)):
		for arguments in argument_sets:
			r = self.execute_function(function_name, *arguments)
			if not result_comparator(r.student.result, r.teacher.result):
				raise FunctionTestException(function_name, arguments, r.student.result, r.teacher.result)
