from __future__ import print_function
import psycopg2, datetime, time, psycopg2.extras, json, collections
from sabre import Sabre
from config import HOST, USER, PASS, DBNAME
from math import radians, cos, sin, asin, sqrt

class Database:

    def __init__(self, host = HOST, user = USER, password = PASS,
                 db = DBNAME):
        self.host = HOST
        self.user = USER
        self.password = PASS
        self.db = DBNAME

    def connect(self):
        self.connection = psycopg2.connect(host=self.host,
                                          user=self.user,
                                          password=self.password,
                                          dbname=self.db,
                                          cursor_factory=psycopg2.extras.DictCursor)

    def execute_query(self, sql, args = (), commit = False):
        self.connect()

        with self.connection.cursor() as cursor:
            cursor.execute(sql, args)
            if not commit:
                result = cursor.fetchall()
            self.connection.close()
            return result

    def retrieve_flights(self, origin, destination, bookingclass):
        sql = "SELECT * FROM {} WHERE  destinationplacename = %s and subcatdescription = %s " \
              "and categorydescription = 'Air Transportation' and productpackagename like %s" \
              "ORDER BY productadvertisedprice ASC limit 3".format('"Hackathon"."Procat"')
        return self.execute_query(sql, (destination, bookingclass, '%' + origin + '%'))

    def retrieve_acc(self, destination, rating):
        sql = "SELECT * FROM {} WHERE  destinationplacename = %s and ratingvalue = %s " \
              "and categorydescription = 'Accommodation' ORDER BY productadvertisedprice " \
              "ASC limit 3".format('"Hackathon"."Procat"')
        return self.execute_query(sql, (destination, rating))

    def retrieve_packages(self, destination, ndays = ''):
        ndays_sql = ''
        if ndays:
            ndays_sql = ' and durationvalue = %s '
        sql = "SELECT * FROM {} WHERE  destinationplacename = %s {}" \
              "and categorydescription = 'Tour' ORDER BY productadvertisedprice " \
              "ASC limit 3".format('"Hackathon"."Procat"', ndays_sql)
        return self.execute_query(sql, (destination, ndays))

    def retrieve_destinations(self):
        sql = "select distinct(destinationplacename) as place from {} ".format('"Hackathon"."Procat"')
        results =  self.execute_query(sql)
        objects_list = []
        for row in results:
            d = collections.OrderedDict()
            d['place'] = row['place']
            objects_list.append(d)

        return json.dumps(objects_list)

    def retrieve_origins(self):
        sql = "select DISTINCT(split_part(productpackagename, ' ' , 1 )) as origin from  \"Hackathon\".\"Procat\" " \
              "where categorydescription = 'Air Transportation'"
        results =  self.execute_query(sql)
        objects_list = []
        for row in results:
            d = collections.OrderedDict()
            d['place'] = row['origin']
            objects_list.append(d)

        return json.dumps(objects_list)


    def retrieve_fares_prediction(self):
        return \
        {'sabre_prediction' :
            {
              "OriginLocation": "SYD",
              "DestinationLocation": "TBU",
              "DepartureDateTime": "2017-05-01T00:00:00",
              "ReturnDateTime": "2017-05-20T00:00:00",
              "Recommendation": "Buy Now",
              "LowestFare": 725,
              "Direction": "Increase",
              "CurrencyCode": "AUD",
              "Probability": 75,
            },
        'flight': {

        }
        }

    def retrieve_similar_fares(self):
        return [{
          "OriginLocation": "SYD",
          "DestinationLocation": "NAN",
          "DepartureDateTime": "2017-05-01T00:00:00",
          "ReturnDateTime": "2017-05-20T00:00:00",
          "Recommendation": "Buy Soon",
          "LowestFare": 672,
          "Direction": "Increase",
          "CurrencyCode": "AUD",
          "Probability": 55,
        },
        {
            "OriginLocation": "SYD",
            "DestinationLocation": "NOU",
            "DepartureDateTime": "2017-05-01T00:00:00",
            "ReturnDateTime": "2017-05-20T00:00:00",
            "Recommendation": "Buy Now",
            "LowestFare": 572,
            "Direction": "Increase",
            "CurrencyCode": "AUD",
            "Probability": 70,
        },
        {
            "OriginLocation": "SYD",
            "DestinationLocation": "VLI",
            "DepartureDateTime": "2017-05-01T00:00:00",
            "ReturnDateTime": "2017-05-20T00:00:00",
            "Recommendation": "Buy Soon",
            "LowestFare": 560,
            "Direction": "Increase",
            "CurrencyCode": "AUD",
            "Probability": 40,
        }
        ]


    def retrieve_similar_acc(self):
        return [{
          "OriginLocation": "SYD",
          "DestinationLocation": "NAN",
          "DepartureDateTime": "2017-05-01T00:00:00",
          "ReturnDateTime": "2017-05-20T00:00:00",
          "Recommendation": "Buy Soon",
          "LowestFare": 672,
          "Direction": "Increase",
          "CurrencyCode": "AUD",
          "Probability": 55,
        },
        {
            "OriginLocation": "SYD",
            "DestinationLocation": "NOU",
            "DepartureDateTime": "2017-05-01T00:00:00",
            "ReturnDateTime": "2017-05-20T00:00:00",
            "Recommendation": "Buy Now",
            "LowestFare": 572,
            "Direction": "Increase",
            "CurrencyCode": "AUD",
            "Probability": 70,
        },
        {
            "OriginLocation": "SYD",
            "DestinationLocation": "VLI",
            "DepartureDateTime": "2017-05-01T00:00:00",
            "ReturnDateTime": "2017-05-20T00:00:00",
            "Recommendation": "Buy Soon",
            "LowestFare": 560,
            "Direction": "Increase",
            "CurrencyCode": "AUD",
            "Probability": 40,
        }
        ]




