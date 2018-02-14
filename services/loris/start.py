from werkzeug.serving import run_simple
import sys
from os import path
from loris.webapp import create_app

extra_files = []

project_dp = path.dirname(path.dirname(path.realpath(__file__)))
conf_fp = path.join(project_dp, 'etc', 'loris2.conf')
extra_files.append(conf_fp)
sys.path.append(path.join(project_dp)) # to find any local resolvers

app = create_app(debug=False, config_file_path=conf_fp) # or 'opj'

run_simple('0.0.0.0', 5004, app, use_debugger=False, use_reloader=True,
        extra_files=extra_files)