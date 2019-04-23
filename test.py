import requests
import psycopg2
import time

def req(numberStop):
	cookies = {
		'old_full_version': '1',
		'full_version': '1',
		'city^[key^]': 'kharkiv',
		'lang': 'ua',
		'_ga': 'GA1.3.597882238.1555523992',
		'_gid': 'GA1.3.1007004257.1555955227',
		'_gat_UA-26195241-1': '1',
	}

	headers = {
		'Accept-Encoding': 'gzip, deflate, br',
		'Accept-Language': 'en-US,en;q=0.9',
		'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Mobile Safari/537.36',
		'Accept': '*/*',
		'Referer': 'https://www.eway.in.ua/ua/cities/kharkiv/routes',
		'X-Requested-With': 'XMLHttpRequest',
		'Connection': 'keep-alive',
	}
	numberStop = str(numberStop)
	response = requests.get('https://www.eway.in.ua/ajax/ua/kharkiv/stopPopup/' + numberStop, headers=headers, cookies=cookies)

	name = response.content.decode('utf-8').split('\'gps_stop_popup_stop_name\'>')[1].split('</span>')[0];
	f = open("demofile2.txt", "a")
	f.write('update stops SET name_id = \'%s\' WHERE stop_id like \'%s\'; \n' % (name, numberStop))
	f.close()
	
	
conn = psycopg2.connect(dbname='postgres', user='postgres', 
                        password='root', host='localhost')
cursor = conn.cursor()
cursor.execute('SELECT DISTINCT stop_id FROM public.stops WHERE name_id is NULL')
records = cursor.fetchall()
for i in records:
	req(i[0])
cursor.close()
conn.close()
	

