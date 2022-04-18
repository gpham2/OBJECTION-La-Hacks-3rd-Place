'''
from api.schema import User


def test_new_user():
    """
    GIVEN a User model
    WHEN a new User is created
    THEN check the email, hashed_password, and role fields are defined correctly
    """
    user = User('sweeneyngo@gmail.com', 'uh')
    assert user.email == 'sweeneyngo@gmail.com'
    assert user.hashed_password != 'uh'
    assert user.role == 'user'
'''