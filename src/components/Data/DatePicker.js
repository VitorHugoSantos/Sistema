export default {
    shortcuts: [{
        text: 'Last week',
        onClick(picker, date) {
            var end = new Date();
            console.log(date)
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
        }
    },
    {
        text: 'Last month',
        onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
        }
    },
    {
        text: 'Last 3 months',
        onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
        }
    }]
}