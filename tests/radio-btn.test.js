function RadioBillBtn() {
    //SETTING THE VALUES COUNTER
    var theCallCost = 0
    var theSmsCost = 0
    var theWarningLevel = 0
    var theCriticalLevel = 0
    //USING THE VALUES COUNTER 
    var callCostTotal = 0
    var smsCostTotal = 0
    //SETTING & GETTING THE CALL COST
    function setCallCost(callCost) {
        theCallCost = callCost
    }
    function getCallCost() {
        return theCallCost
    }
    //SETTING & GETTING THE SMS COST
    function setSmsCost(smsCost) {
        theSmsCost = smsCost
    }
    function getSmsCost() {
        return theSmsCost
    }
    //SETTING & GETTING THE WARNING LEVEL
    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel
    }
    function getWarningLevel() {
        return theWarningLevel
    }
    //SETTING & GETTING THE CRITICAL LEVEL
    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel
    }
    function getCriticalLevel() {
        return theCriticalLevel
    }
    //MAKING A CALL
    function makeACall() {
        if (!hasReachedCriticalLevel()) {
            callCostTotal += theCallCost
        }
    }
    function getTotalCost() {
        return callCostTotal + smsCostTotal
    }
    function getTotalCallCost() {
        return callCostTotal
    }
    function getTotalSmsCost() {
        return smsCostTotal
    }
    //MAKING AN SMS
    function makeSms() {
        if (!hasReachedCriticalLevel()) {
            smsCostTotal += theSmsCost
        }
    }
    //USING THE  WARNING & CRITICAL LEVELS

    function hasReachedCriticalLevel() {
        return getTotalCost() >= getCriticalLevel()
    }

    function totalClassName() {
        if (hasReachedCriticalLevel()) {
            return "critical"
        }
        if (getTotalCost() >= getWarningLevel()) {
            return "warning"
        }
    }
    return {
        //SETTING THE CALL COST
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeACall,
        getTotalCost,
        getTotalSmsCost,
        getTotalCallCost,
        makeSms,
        totalClassName
    }
}