class DecisionTree {
  constructor(data) {
    this.data = data;
    this.rules = [];
    this.defaultRule = null;
    this.decisionMade = false;
  }

  addRule(condition, action) {
    this.rules.push({condition, action});
    return this;
  }

  caseCondition(condition, action) {
    this.addRule(condition, action);
    return this;
  }

  setDefaultRule(action) {
    this.defaultRule = action;
    return this;
  }

  decide() {
    if (this.decisionMade) {
      throw new Error("Decision already made. You cannot call decide() more than once.");
    }
    
    let result = null;
    for (let i = 0; i < this.rules.length; i++) {
      let rule = this.rules[i];
      if (rule.condition(this.data)) {
        result = rule.action(this.data);
        this.decisionMade = true;
        return result;
        break;
      }
    }
    if (!result && this.defaultRule) {
      result = this.defaultRule(this.data);
      this.decisionMade = true;
      return result;
    }
  }
}