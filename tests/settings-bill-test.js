	//CALL COST
	describe("the bill with settings factory function", function () {
		it("Should be able to set call cost", function () {
			var settingsBill = billWithSettings();
			settingsBill.setCallCost(1.85),
				assert.equal(1.85, settingsBill.getCallCost());

			var settingsBill2 = billWithSettings();

			settingsBill2.setCallCost(2.75),
				assert.equal(2.75, settingsBill2.getCallCost());
		})
		//SMS COST
		it("Should be able to set the sms cost", function () {
			let settingsBill = billWithSettings();

			settingsBill.setSmsCost(0.85);
			assert.equal(0.85, settingsBill.getSmsCost());

			let settingsBill2 = billWithSettings();

			settingsBill2.setSmsCost(0.75);
			assert.equal(0.75, settingsBill2.getSmsCost());
		})
		//CALL AND SMS COST
		it("Should be able to set the call and sms", function () {
			let settingsBill = billWithSettings();

			settingsBill.setSmsCost(0.85);
			settingsBill.setCallCost(1.85);
			assert.equal(0.85, settingsBill.getSmsCost());
			assert.equal(1.85, settingsBill.getCallCost());

			let settingsBill2 = billWithSettings();

			settingsBill2.setSmsCost(0.75);
			settingsBill2.setCallCost(2.75);
			assert.equal(0.75, settingsBill2.getSmsCost());
			assert.equal(2.75, settingsBill2.getCallCost());
		})
		//WARNING LEVEL
		it("Should be able to set the warning level", function () {
			let settingsBill = billWithSettings();

			settingsBill.setWarningLevel(20);
			assert.equal(20, settingsBill.getWarningLevel());

			let settingsBill2 = billWithSettings();

			settingsBill2.setWarningLevel(40);
			assert.equal(40, settingsBill2.getWarningLevel());
		})
		//CRITICAL LEVEL
		it("Should be able to set the critical level", function () {
			let settingsBill = billWithSettings();

			settingsBill.setCriticalLevel(50);
			assert.equal(50, settingsBill.getCriticalLevel());

			let settingsBill2 = billWithSettings();

			settingsBill2.setCriticalLevel(60);
			assert.equal(60, settingsBill2.getCriticalLevel());
		})
	})

	//USING THE VALUES SET
	describe("Use values function", function () {
		it("Should be able to use the call cost set", function () {
			var settingsBill = billWithSettings();

			settingsBill.setCallCost(2.25);
			settingsBill.setSmsCost(0.85);
    
			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();

			assert.equal(6.75, settingsBill.getTotalCost())
			assert.equal(6.75, settingsBill.getTotalCallCost())
			assert.equal(0.00, settingsBill.getTotalSmsCost())
		})

		it("Should be able to use the call cost set for 2 calls at 1.35 each", function () {
			var settingsBill = billWithSettings();

			settingsBill.setCallCost(1.35);
			settingsBill.setSmsCost(0.85);

			settingsBill.makeCall();
			settingsBill.makeCall();


			assert.equal(2.70, settingsBill.getTotalCost())
			assert.equal(2.70, settingsBill.getTotalCallCost())
			assert.equal(0.00, settingsBill.getTotalSmsCost())
		})
		it("Should be able to send 2's at 0.85 each", function () {
			var settingsBill = billWithSettings();

			settingsBill.setCallCost(1.35);
			settingsBill.setSmsCost(0.85);

			settingsBill.sendSms();
			settingsBill.sendSms();


			assert.equal(1.70, settingsBill.getTotalCost())
			assert.equal(0.00, settingsBill.getTotalCallCost())
			assert.equal(1.70, settingsBill.getTotalSmsCost())
		})
		it("Should be able to send 2's at 0.85 each and make a call at 1.35", function () {
			var settingsBill = billWithSettings();

			settingsBill.setCallCost(1.35);
			settingsBill.setSmsCost(0.85);

			settingsBill.sendSms();
			settingsBill.makeCall();
			settingsBill.sendSms();


			assert.equal(3.05, settingsBill.getTotalCost())
			assert.equal(1.35, settingsBill.getTotalCallCost())
			assert.equal(1.70, settingsBill.getTotalSmsCost())
		})
	})