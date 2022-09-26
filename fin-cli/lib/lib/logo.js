const fs = require('fs');
const path = require('path');
const Logger = require('./logger');
const config = require('../cli/ConfigCli');
const VERSION = require(path.join(__dirname, '..', '..', 'package')).version;

Logger.log(`
███████╗██╗███╗   ██╗     ██████╗██╗     ██╗
██╔════╝██║████╗  ██║    ██╔════╝██║     ██║
█████╗  ██║██╔██╗ ██║    ██║     ██║     ██║
██╔══╝  ██║██║╚██╗██║    ██║     ██║     ██║
██║     ██║██║ ╚████║    ╚██████╗███████╗██║
╚═╝     ╚═╝╚═╝  ╚═══╝     ╚═════╝╚══════╝╚═╝
v${VERSION}

=================== FIN CLI SHELL ===================

Welcome to the FIN CLI shell for interacting with the 
Fedora Repository backed FIN Server

- Project info - 
Server: https://github.com/UCDavisLibrary/fin-server
CLI: https://github.com/UCDavisLibrary/fin-cli`);
config.display();