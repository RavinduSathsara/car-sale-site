import React, { useState } from "react";

const FinanceCalculator = () => {
  const [amount, setAmount] = useState();
  const [downpayment, setDownPayemt] = useState();
  const [interestRate, setInterestRate] = useState();
  const [loanTerms, setLoanTerms] = useState();
  const [monthlyPayment, setMonthlyPayment] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullPayment = amount - downpayment;
    const inter = interestRate / 100;
    const month = (fullPayment * inter + fullPayment) / loanTerms;
    setMonthlyPayment(month.toFixed(2));
  };

  return (
    <>
      <h1 className="text-center">Finance Calculator</h1>

      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">Amount</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  className="form-control"
                  placeholder="Amount"
                  required
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">Down Payment</label>
                <input
                  type="number"
                  id="downpayment"
                  name="downpayment"
                  className="form-control"
                  placeholder="Down Payment"
                  required
                  onChange={(e) => {
                    setDownPayemt(e.target.value);
                  }}
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">INTEREST RATE</label>
                <input
                  type="number"
                  id="interestRate"
                  name="interestRate"
                  className="form-control"
                  placeholder="INTEREST RATE"
                  required
                  onChange={(e) => {
                    setInterestRate(e.target.value);
                  }}
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">LOAN TERMS</label>
                <input
                  type="number"
                  id="loanTerms"
                  name="loanTerms"
                  className="form-control"
                  placeholder="LOAN TERMS"
                  required
                  onChange={(e) => {
                    setLoanTerms(e.target.value);
                  }}
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="">MONTHLY PAYMENT</label>
                <input
                  type="number"
                  id="monthlyPayment"
                  readOnly
                  step="0.01"
                  name="monthlyPayment"
                  className="form-control"
                  value={monthlyPayment}
                  placeholder="MONTHLY PAYMENT"
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <button type="submit" className="btn">
            Calculate
          </button>
          <button type="reset" onClick={() => handleSubmit} className="btn">
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default FinanceCalculator;
