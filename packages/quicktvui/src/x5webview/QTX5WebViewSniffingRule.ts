export interface QTX5WebViewSniffingRule {
  urlRule?: QTX5WebViewSniffingUrlRuleItem
  urlExcludeRule?: QTX5WebViewSniffingUrlRuleItem
  headerRule?: QTX5WebViewSniffingHeaderRuleItem
  headerExcludeRule?: QTX5WebViewSniffingHeaderRuleItem
}

export interface QTX5WebViewSniffingUrlRuleItem {
  overrideRules?: Array<string>
  addRules?: Array<string>
  delRules?: Array<string>
}

export interface QTX5WebViewSniffingHeaderRuleItem {
  overrideRules?: { [key: string]: string }
  addRules?: { [key: string]: string }
  delRules?: Array<string>
}
