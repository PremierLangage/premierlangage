
import random
import string
 
def secret_key(size=50):
        pool = string.ascii_letters + string.digits + string.punctuation
        return "".join(random.SystemRandom().choice(pool) for i in range(size))


print("SECRET_KEY='"+secret_key()+"'")
