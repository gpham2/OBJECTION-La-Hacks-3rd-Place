from api.routes.classify.model.model import classifyInput
from newspaper import Article
from flask import Blueprint, request
_classify = Blueprint('classify', __name__)

@_classify.route('/url', methods=['POST'])
def extract():
    request_url = request.get_json()
    url = None
    if request_url:
        if 'url' in request_url:
            url = request_url['url']
    article = Article(url)
    article.download()
    article.parse()
    return classifyInput(article.text);