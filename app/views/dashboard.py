# 控制台视图
from flask import Blueprint
from flask import render_template

bp_tmp_folder = 'templates/_dashboard'
bp_dash = Blueprint("dash", __name__, template_folder=bp_tmp_folder)


@bp_dash.route("/")
def index():
    """控制台首页视图"""
    return render_template("_dashboard/index.html")
