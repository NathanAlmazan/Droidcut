class ScheduleModel {
    constructor(uid, username, datetime) {
        if (datetime !== null) {
            const date = new Date(datetime);
            const options = {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            };
            const datetimeString = date.toLocaleString('en-US', options);

            this.schedule = {
                barber: username,
                haircut: 'n/a',
                is_available: true,
                schedule_datetime: datetimeString,
                scheduled_by: 'n/a',
                time_stamp: `${new Date().getTime()}`,
                unique_id: uid
            };

        } else this.schedule = datetime;
    }

    convertObjectToArray(schedules) {
        let scheduleList = [];
        Object.keys(schedules).forEach(obj => {
            const currSchedule = schedules[obj];
            currSchedule.uid = obj;
            scheduleList.push(currSchedule);
        })

        this.scheduleList = scheduleList;
    }

    getSchedule() {
        return this.schedule;
    }

    getScheduleList() {
        return this.scheduleList;
    }

    getUserScheduleList(username) {
        const userSchedule = this.scheduleList.filter(schedule => schedule.barber === username);
        return userSchedule;
    }
}

export default ScheduleModel