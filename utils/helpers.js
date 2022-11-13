module.exports = {
    formatTime: (date) => {
        return date.toLocaleTimeString();
    },
    formateDate: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date()}/${new Date(date).getFullYear()}}`;
    }
};