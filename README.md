# 🛡️ HomeNet Honeypot

**HomeNet Honeypot** is a tool to help you monitor and visualize potential intrusion attempts on your home Wi-Fi network. It uses [Cowrie](https://github.com/cowrie/cowrie), a medium-interaction SSH/Telnet honeypot, and visualizes attack data in a custom Flask + Chart.js web dashboard.

---

## 🚀 Features

- 🕵️‍♂️ Emulates a fake SSH service to lure and log attackers
- 📊 Interactive dashboard displaying attack attempts by IP
- 🔍 Live logs from Cowrie rendered with real-time updates
- 🧰 Fully software-based (no Raspberry Pi needed)

---

## 🧠 Technologies Used

- Python 3
- Cowrie Honeypot
- Flask
- Chart.js (for frontend visualizations)

---

## 🧑‍💻 How to Set It Up

> Works best on Linux (Ubuntu/Debian). For Windows, use WSL.

### 1. Clone the Repository

```
git clone --recurse-submodules https://github.com/yourusername/homenet-honeypot.git
cd homenet-honeypot
```

### 2. Install Cowrie

```
cd honeypots
git clone https://github.com/cowrie/cowrie.git
cd cowrie
python3 -m venv cowrie-env
source cowrie-env/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
cp etc/cowrie.cfg.dist etc/cowrie.cfg
```

### 🔧 Enable JSON logging in etc/cowrie.cfg:

```
[output_jsonlog]
enabled = true
```

Start Cowrie:

```
bin/cowrie start
```

Test attack:

```
ssh root@localhost -p 2222
```

### 3. Set Up the Flask Dashboard

In another terminal:

```
cd dashboard
python3 -m venv venv
source venv/bin/activate
pip install flask
```

Run the Flask app:

```
python app.py
```

Visit: http://localhost:5000

### 📸 Screenshot
![image](https://github.com/user-attachments/assets/e711474d-e1f9-43ce-a695-0ff24c2b05a8)
