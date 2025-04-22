from flask import Flask, render_template, jsonify
import json
import os

app = Flask(__name__)

COWRIE_LOG_PATH = "../honeypots/cowrie/var/log/cowrie/cowrie.json"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/logs")
def logs():
    if not os.path.exists(COWRIE_LOG_PATH):
        print("Loaded logs:")
        return jsonify([])
    with open(COWRIE_LOG_PATH) as f:
        data = [json.loads(line) for line in f if line.strip()]
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)