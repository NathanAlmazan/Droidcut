class JobsModel {
    constructor(jobs) {
        let jobList = [];
        Object.keys(jobs).forEach(obj => {
            const currJob = jobs[obj];
            currJob.uid = obj;
            jobList.push(currJob);
        })

        this.jobs = jobList;
    }

    getAllJobs() {
        return this.jobs;
    }
    
    getUserJobs(username) {
        const userJobs = this.jobs.filter(job => job.barber === username);
        return userJobs;
    }
}

export default JobsModel
