const meetingRooms = (schedule) => {
    const hours = {};
    let detected = true;

    schedule.some((period) => {
        for (let i = period[0]; i <= period[1]; i += 1) {
            if (!hours[i]) hours[i] = 1;
            else {
                hours[i] += 1;
                detected = false;
                break;
            }
        }

        if (!detected) return true;
    });

    return detected;
};

module.exports = meetingRooms;