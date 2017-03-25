FROM python:2-onbuild

MAINTAINER Claudio Aracena

ADD . /api
WORKDIR /api

EXPOSE 5000

CMD gunicorn server:app -w 4 -b 0.0.0.0:5000 --log-level info