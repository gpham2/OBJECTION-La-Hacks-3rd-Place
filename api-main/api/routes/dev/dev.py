from flask import Blueprint, jsonify, request
from api.routes.classify.model.model import classifyInput
from newspaper import Article

_dev = Blueprint('dev', __name__)


# default
@_dev.route('/objection/', methods=['GET'])
def welcome():
    return 'OBJECTION!!'

# variable query
@_dev.route('/<int:n>/', methods=['GET'])
def num(n):
    return f"The number is {str(n)}."

# json type
@_dev.route('/person/', methods=['GET'])
def person():
    return jsonify({'name':'Jimit',
                    'address':'India'})

# special errcode
@_dev.route('/teapot/', methods=['GET'])
def teapot():
    return "Would you like some tea?", 418

@_dev.route('/url', methods=['POST'])
def extract():
    request_url = request.get_json()

    url = None
    if request_url:
        if 'url' in request_url:
            url = request_url['url']
    article = Article(url)
    article.download()
    article.parse()
    return classifyInput(article.text)

