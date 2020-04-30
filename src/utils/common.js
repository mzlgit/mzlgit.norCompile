/**
 * 通用方法
 */

export default {
    /**
     * 返回固定的时间格式
     * 支持：yyyy-mm-dd  hh:mm
     *      yyyy-mm-dd
     */
    fixDate: function (timestamp, type = "dateTime") {
        let date = timestamp;
        let temp = "";
        let year = new Date(date).getFullYear();
        let month = new Date(date).getMonth() + 1 + "";
        let day = new Date(date).getDate() + "";
        let hh = new Date(date).getHours() + "";
        let mm = new Date(date).getMinutes() + "";
        if (Number(month) < 10) {
            month = "0" + month
        }
        if (Number(day) < 10) {
            day = "0" + day
        }
        if (Number(hh) < 10) {
            hh = "0" + hh
        }
        if (Number(mm) < 10) {
            mm = "0" + mm
        }
        if (type === "dateTime") {
            temp = year + "-" + month + "-" + day + " " + hh + ":" + mm
        } else if (type === "date") {
            temp = year + "-" + month + "-" + day
        }
        // 返回
        return temp
    }
}