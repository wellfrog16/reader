module.exports = {
  'processors': ['@mapbox/stylelint-processor-arbitrary-tags'],
  'extends': 'stylelint-config-standard',
  'rules': {
    'indentation': 4, // 4个空格
    'no-empty-source': null,
    'selector-class-pattern': '^[a-z]+[a-z\\d/-]*[a-z\\d]$',  // class名字规则
    'selector-id-pattern': '^[a-zA-Z\\d]+$',  // id名字规则
    'max-nesting-depth': 3, // 最大嵌套深度
    'string-quotes': 'single',  // 单引号
    'function-url-quotes': 'always',  // 单引号
    'property-no-unknown': [ true, {'ignoreProperties': ['return']} ],
    'selector-list-comma-newline-after': 'never-multi-line' // 不允许多行
  }
}