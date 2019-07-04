# 精品站视图
from flask import Blueprint
from flask import render_template

bp_tmp_folder = 'templates/_domain'
bp_domain = Blueprint("domain", __name__)


@bp_domain.route("/")
def index():
    """控制台首页视图"""
    obj = {"tk": "test_value"}
    return render_template("_domain/index.html", data=obj)
