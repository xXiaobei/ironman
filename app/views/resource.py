# 资源视图
from flask import Blueprint
from flask import render_template

bp_tmp_folder = 'templates/_resource'
bp_resc = Blueprint("resc", __name__, template_folder=bp_tmp_folder)


@bp_resc.route("/")
def index():
    """控制台首页视图"""
    return render_template("index.html")
