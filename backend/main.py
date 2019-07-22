from flask import Flask, render_template, jsonify
from flask_cors import CORS  # flask_cors 解决跨域调用问题

# 指定静态文件路径为前端最终打包完成的路径中的static （dist/static）
# 指定模板文件路径为前端最终打包完成的路径dist
app = Flask("__name__", static_folder="../dist/static",
            template_folder="../dist")

CORS(app=app)


@app.route("/")
def index():
    # 渲染的模板为前端打包后的index.html
    return render_template("index.html")


@app.route("/test")
def test():
    return jsonify("Test result is success.")


if __name__ == "__main__":
    app.run(debug=True)
