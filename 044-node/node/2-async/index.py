# run in command line
# python index.py

from datetime import datetime
import time

print 'Before - ' + datetime.now().strftime("%Y-%m-%d %H:%M:%S")
time.sleep(2)
print 'After - ' + datetime.now().strftime("%Y-%m-%d %H:%M:%S")
