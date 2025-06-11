from flask import Flask, render_template
from flask_frozen import Freezer
import sys

app = Flask(__name__)
app.config['FREEZER_DESTINATION'] = 'public'

freezer = Freezer(app)

@app.route('/')
def index():
    return render_template('pages/index.html')

@app.route('/project/')
def project():
    return render_template('pages/project.html')

@app.route('/wet-lab/')
def wet_lab():
    return render_template('pages/wet-lab.html')

@app.route('/dry-lab/')
def dry_lab():
    return render_template('pages/dry-lab.html')

@app.route('/results/')
def results():
    return render_template('pages/results.html')

@app.route('/safety/')
def safety():
    return render_template('pages/safety.html')

@app.route('/team/')
def team():
    return render_template('pages/team.html')

@app.route('/contact/')
def contact():
    return render_template('pages/contact.html')

@app.route('/protocols/')
def protocols():
    return render_template('pages/protocols.html')

@app.route('/publications/')
def publications():
    return render_template('pages/publications.html')

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == "build":
        freezer.freeze()
    else:
        app.run(debug=True)
