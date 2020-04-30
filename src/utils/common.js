import attLableName from "./attLableName.json"
import Api from "../server/index"

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
    },

     // 国际合作项目 特殊附件内容处理，获取流程主表信息
     async edaOwnDeclareInfo(parentCode) {
        let data = await Api.getEdaOwnDeclareInfo({ parentCode })
        return data
    },
    /**
     * 外网申请业务的 附件的 根据 主表名 去匹对
     * 返回 {}
     */
    async getAttLabelName(tableName, parentCode) {
        // 处理特殊业务问题
        if(tableName === "EDA_OWN_DECLARE") {
            // 获取相关的信息后处理 附件内容
            let data = await Api.getEdaOwnDeclareInfo({ parentCode });
            let temp = false;
            return new Promise(resolve => {
                if(data.tsm1 == "1") {
                    temp = {
                        attLabel: attLableName.labeName[tableName + "_AttName_One"], // 外网附件的名称
                        attApi: attLableName.labeName[tableName + "_AttApi_One"], //外网的附件 api
                        fileApi: attLableName.labeName[tableName + "_Docs_One"] // 外网的导出文件的 api
                    }
                } else if(data.tsm1 == "2") {
                    temp = {
                        attLabel: attLableName.labeName[tableName + "_AttName_Two"], // 外网附件的名称
                        attApi: attLableName.labeName[tableName + "_AttApi_Two"], //外网的附件 api
                        fileApi: attLableName.labeName[tableName + "_Docs_Two"] // 外网的导出文件的 api
                    }
                }
                resolve(temp)
            })

        } else {
            if (attLableName.labeName[tableName]) {
                let temp = {
                    attLabel: attLableName.labeName[tableName + "_AttName"], // 外网附件的名称
                    attApi: attLableName.labeName[tableName + "_AttApi"], //外网的附件 api
                    fileApi: attLableName.labeName[tableName + "_Docs"] // 外网的导出文件的 api
                }
                console.log(temp)
                return new Promise(resolve => {
                    resolve(temp)
                })
                // return temp
            } else {
                return false
            }
        }
    },
    /**
     * 流程审批的最后一步 结束步骤 处理业务相关问题
     * 返回 {Boolean}}
     */
    async flowSuccHandle (flowId, flowInid) {
        //判断是最后一步，才执行下面逻辑
        this.isLastStep(flowId, flowInid).then(res => {
            if(res) {
                 //入园申请流程
                this.isFlagFlow(flowId, "ENTER_PARK_FLOW").then(res => {
                    if(res.result) {
                        //请求中间表获取最后一步是否通过审核
                        this.checkFlowResult(flowInid).then(res => {
                            //请求添加当前业务的入园权限
                            if(res.result == "3") {
                                //添加到入园权限表
                                this.enterParkCreated(flowInid).then(res => {
                                    console.log(res)
                                    return true
                                })
                            } else {
                                console.log(res.result)
                            }
                        })
                    } else {
                        return false
                    }
                }).then(res => {
                    if(res === false) {
                        //内控系统拨款申报流程
                        this.isFlagFlow(flowId, "ALLOCATE_FUNDS_FLOW").then(res => {
                            if(res.result) {
                                this.checkFlowResult(flowInid).then(res => {
                                    let isSuc = "0";
                                    if(res.result == "3") {
                                        isSuc = "1"
                                    }
                                    /**
                                     * 内控系统拨款申报流程
                                     */
                                    this.allocateFundCreated(flowInid, isSuc)
                                })
                            } else {
                                return false
                            }
                        }).then(res => {
                            if(res === false) {
                                this.isFlagFlow(flowId, "EDA_GARDEN_INFO_MANAGE").then(res => {
                                    if(res.result) {
                                        this.checkFlowResult(flowInid).then(res => {
                                            if(res.result == "3") {
                                                //新增园区信息
                                                this.addEdaGardenInfoManage(flowInid)
                                            }
                                        })
                                    } else {
                                        return false
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    },
    // 判断流程的步骤是否为最后一步
    async isLastStep(flowId, flowInid) {
        let data = await Api.HandleLastFlowStep.checkLastStep({
            flowId: flowId,
            flowInid: flowInid
        })
        return data.result
    },
    /**
     * 检查flowId流程是否为flowFlag标记的流程
     * @param {*} flowId 业务流程id
     * @param {*} flowInid 发起流程id
     * @param {*} flowFlag 流程业务的标识，内网定义的
     */
    async isFlagFlow(flowId, flowFlag) {
        return await Api.HandleLastFlowStep.checkFlagFlow({
            flowId: flowId,
            flowFlag: flowFlag
        })
    },
    checkCurStepSuccess(flowInid) {

    },
    // 根据流程实例，赋予当前申报企业的入园权限
    async enterParkCreated(flowInid) {
        //添加到入园权限表
        return await Api.HandleLastFlowStep.parkCompanyChangeEnterAuth({ flowInid })
    },
    /**
     * 请求添加当前业务的拨款权限
     */
    async allocateFundCreated(flowInid, isSuc) {
        //请求添加当前业务的拨款权限,不管是否通过都添加到拨款权限表，审核结果也需要传过去
        return await Api.HandleLastFlowStep.edaAllocateFundsChangeAllocateAuth({ flowInid, isSuc})
    },
    // 新增园区信息
    async addEdaGardenInfoManage(flowInid) {
        return Api.HandleLastFlowStep.edaGardenInfoManageSave({ flowInid })
    },
    // 判断当前步骤是否审核通过
    async checkFlowResult(flowInid) {
         //3通过   4不通过
        return await Api.HandleLastFlowStep.checkFlowResult({
            flowInid
        })
    }
}