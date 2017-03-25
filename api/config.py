import configparser, os

config = configparser.ConfigParser()
config.read(os.getenv('CONFIG_FILE', 'config'))

# database config

HOST = config.get('database', 'HOST')
DBNAME = config.get('database', 'DBNAME')
USER = config.get('database', 'USER')
PASS = config.get('database', 'PASS')