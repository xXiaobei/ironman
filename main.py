from flask import render_template
from app.extensions import init_app

# 初始化app和插件
app = init_app()


@app.route("/")
def index():
    return render_template("index.html")
    # return "hello world!"


@app.route("/terminal")
def server():
    return render_template("_server/index.html")


@app.route("/domain")
def domain():
    return render_template("_domain/index.html")


@app.route("/role")
def role():
    return render_template("_role/index.html")


@app.route("templet")
def template():
    return render_template("_template/index.html")


@app.route("resource")
def resource():
    """resource"""
    return render_template("_resource/index.html")


if __name__ == "__main__":
    app.run(debug=True)
