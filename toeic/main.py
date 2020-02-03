findstr = '문항'

document = 0

file = open('.\\data.part5', 'rt', encoding='UTF8')
lines = file.readlines()

storefile = open('.\\dummy.part5', 'wt', encoding='UTF8')

for line in lines:
    if findstr in line[:3]:
        storefile.close()
        document += 1
        storefile = open('.\\data\\'+str(document)+'.part5', 'wt', encoding='UTF8')
    
    storefile.write(line)
    
file.close()

file =open('.\\max.js', 'wt', encoding='UTF8')
file.write('const quizmax = '+str(document)+';')