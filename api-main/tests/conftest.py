import pytest
from api import create_app


@pytest.fixture(scope='module')
def test_client():
    flask_app = create_app('flask_test.cfg')

    # Create a test client using the Flask application configured for testing
    with flask_app.test_client() as testing_client:
        # Establish an application context
        with flask_app.app_context():
            yield testing_client  # this is where the testing happens!

'''
from api.schema import User
@pytest.fixture(scope='module')
def new_user():
    user = User('sweeneyngo@gmail.com', 'uh')
    return user
'''