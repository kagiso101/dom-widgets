function billWithSettings() {
    //setting values counter
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    //using values counter
    var callCostTotal = 0
    var smsCostTotal = 0


    //CALL COST
    function setCallCost(callCost) {
        theCallCost = callCost;
    }

    function getCallCost() {
        return theCallCost
    }
    //SMS COST
    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    }

    function getSmsCost() {
        75
        return theSmsCost
    }
    //WARNING LEVEL
    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }

    function getWarningLevel() {
        return theWarningLevel
    }
    //CRITICAL LEVEL
    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel() {
        return theCriticalLevel
    }
    //USING SET VALUES 
    function makeCall() {
        callCostTotal += theCallCost
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

    function sendSms() {
        smsCostTotal += theSmsCost
    }
    return {
        //SETTING VALUES
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        //USING VALUES
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms
    }
}