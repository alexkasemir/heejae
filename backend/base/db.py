import os
import psycopg2

# Make sure you have a local db of matching name
db_name = "heejae"

conn = psycopg2.connect(
        database=db_name,
    )

cursor = conn.cursor()
cursor.execute("CREATE TABLE asdf (id text PRIMARY KEY);")
conn.commit()
