# 第三方插件初始化

from flask_mongoengine import MongoEngine

# Mongodb
mdb = MongoEngine()


def init_exts(app):
    """初始化插件"""
    mdb.init_app(app)
