# 服务器视图
from flask import Blueprint
from flask import render_template

bp_tmp_folder = 'templates/_server'
bp_serv = Blueprint("serv", __name__, template_folder=bp_tmp_folder)


@bp_serv.route("/")
def index():
    """控制台首页视图"""
    return render_template("index.html")
