class HistoryModel {

    setHistoryFromDatabase(history) {
        this.history = history;
    }

    setHistory(barber, contact, haircut, schedule, customer, status, uid) {
        this.history = {
            barber: barber,
            contact_number: contact,
            haircut: haircut,
            is_available: true,
            schedule_datetime: schedule,
            scheduled_by: customer,
            status: status,
            time_stamp: new Date().getTime(),
            unique_id: uid
        }
    }

    convertObjectToArray(object) {
        let historyList = [];
        Object.keys(object).forEach(obj => {
            const currHaircut = object[obj];
            currHaircut.uid = obj;
            historyList.push(currHaircut);
        })

        this.historyList = historyList;
    }

    getAllHistory() {
        return this.historyList;
    }

    getHistory() {
        return this.history;
    }

    getUserHistory(username) {
        const usrHistory = this.historyList.filter(history => history.barber === username);
        return usrHistory;
    }
}

export default HistoryModel