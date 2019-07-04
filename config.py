# 程序配置文件

import os

# 程序的根目录
BASEDIR = os.path.abspath(os.path.dirname(__file__))

# 程序静态资源目录
STATIC_DIR = os.path.join(BASEDIR, "static")


class MongoConfig:
    """MongoDB配置"""
    DB_NAME = "ironman"
    DB_PORT = 27017
    DB_USER = "admin"
    DB_PWD = "Follow2018."
    DB_URI = "mongodb://localhost"


class Config:
    """ 配置基类 """
    # 用于CRSF保护
    SECRET_KEY = os.environ.get("SECRET_KEY") or ""
    # SQLALCHEMY 配置，本例中使用Mongodb
    # SQLALCHEMY_COMMIT_ON_TEARDOWN = True
    # SQLALCHEMY_TRACK_MODIFICATIONS = True

    # 系统邮件发件人
    FLASKY_MAIL_SENDED = "orasange@gmail.com"
    # 邮件主题前缀
    FLASKY_MAIL_SUBJECT_PREFIX = "ironMan"


class ProductionConfig(Config):
    """ 生成环境配置 """
    # 数据库地址，本例中使用Mongodb
    SQLALCHEMY_DATABASE_URI = ""


config = {
    'production': ProductionConfig,
    'somethingEles': None
}
