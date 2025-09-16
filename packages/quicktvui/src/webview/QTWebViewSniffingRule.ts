export interface QTWebViewSniffingRule {
  urlRule?: QTWebViewSniffingUrlRuleItem
  urlExcludeRule?: QTWebViewSniffingUrlRuleItem
  headerRule?: QTWebViewSniffingHeaderRuleItem
  headerExcludeRule?: QTWebViewSniffingHeaderRuleItem
}

export interface QTWebViewSniffingUrlRuleItem {
  overrideRules?: Array<string>
  addRules?: Array<string>
  delRules?: Array<string>
}

export interface QTWebViewSniffingHeaderRuleItem {
  overrideRules?: { [key: string]: string }
  addRules?: { [key: string]: string }
  delRules?: Array<string>
}
