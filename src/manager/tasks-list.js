import { existsSync, writeFileSync, readFileSync } from 'node:fs';
import path from 'node:path';

const filePath = path.join('./tasksList.json');

if ( !existsSync(filePath) ) writeFileSync(filePath, JSON.stringify([]), 'utf8')

export const manageTaskList = {
    getList() {
        const originalList = JSON.parse(readFileSync(filePath, 'utf8'))
        
        const list = originalList.map(task => {
            return {
                ...task,
                date: new Date(task.date)
            }
        })
        
        return list
    }, 
    saveList(list) {
        const listToSave = list.map(task => {
            return {
                ...task,
                date: task.date.toISOString()
            }
        })

        writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf8')
    }
}