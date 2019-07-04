# 第三方插件初始化

from flask import Flask
from flask_mongoengine import MongoEngine
from flask_assets import Bundle, Environment
from config import config, MongoConfig
from app.views import dashboard, domain, resource, role, server, template

# Mongodb
mdb = MongoEngine()

# 静态文件管理
bundle = {
    "lib_css": Bundle(
        'css/lib/bootstrap.min.css',
        'css/lib/material-dashboard.min.css',
        'css/lib/jquery-confirm.min.css',
        'css/main.css'
    ),
    'lib_js': Bundle(
        'js/lib/jquery-3.3.1.min.js',
        'js/lib/popper.min.js',
        'js/lib/bootstrap.min.js',
        'js/lib/material-dashboard.min.js',
        'js/lib/bootstrap-material-design.min.js',
        'js/lib/jquery-confirm.min.js',
        'js/main.js'
    )
}


def init_exts(app):
    """初始化插件"""

    # Mongoengine　数据库插件
    mdb.init_app(app)
    # Flask-assets 静态文件管理
    assets = Environment(app)
    assets.register(bundle)
    # Flask-blueprint 路由注册,参数url_prefix为蓝图前缀 http://localhost/dash
    app.register_blueprint(dashboard.bp_dash, url_prefix="/")
    app.register_blueprint(dashboard.bp_dash, url_prefix="/dash")
    app.register_blueprint(domain.bp_domain, url_prefix="/domain")
    app.register_blueprint(resource.bp_resc, url_prefix="/resc")
    app.register_blueprint(role.bp_role, url_prefix="/role")
    app.register_blueprint(server.bp_serv, url_prefix="/serv")
    app.register_blueprint(template.bp_temp, url_prefix="/temp")


def init_app():
    """初始化app"""

    # 实例化app,指定名称为__name__
    app = Flask(__name__)
    # 加载app配置
    app.config.from_object(config["production"])
    # 加载mongodb配置
    app.config["MONGODB_SETTINGS"] = {
        "db": MongoConfig.DB_NAME,
        "port": MongoConfig.DB_PORT,
        "host": MongoConfig.DB_URI,
        "username": MongoConfig.DB_USER,
        "password": MongoConfig.DB_PWD
    }
    # 初始化第三方插件
    init_exts(app)

    return app
