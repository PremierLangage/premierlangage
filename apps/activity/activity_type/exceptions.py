from rest_framework.exceptions import APIException

class ErrorInSurvey(APIException):
    status_code = 422
    default_detail = "There is en error in the survey. Please contact your teacher."
