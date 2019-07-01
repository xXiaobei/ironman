from flask import Flask
from config import config, MongoConfig

# 实例化app,指定名称为__name__
app = Flask(__name__)
# 初始化app相关配置
app.config.from_object(config["production"])
# 初始化Mongodb配置
app.config["MONGODB_SETTINGS"] = {
    "db": MongoConfig.DB_NAME,
    "port": MongoConfig.DB_PORT,
    "host": MongoConfig.DB_URI,
    "username": MongoConfig.DB_USER,
    "password": MongoConfig.DB_PWD
}


@app.route("/")
def index():
    return "hello world!"


if __name__ == "__main__":
    print(app)
    app.run(debug=False)
