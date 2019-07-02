from flask import render_template
from app.extensions import init_app

# 初始化app和插件
app = init_app()


@app.route("/")
def index():
    return render_template("index.html")
    # return "hello world!"


if __name__ == "__main__":
    app.run(debug=True)
