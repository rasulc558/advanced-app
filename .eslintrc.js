module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended'
  ],
  overrides: [
    {
      files: ['global.d.ts'],
      rules: {
        'no-undef': 'off'
      }
    }
  ],
  parserOptions: {
    parser: '@typescript-eslint-parser',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next'
  ],
  rules: {
    // Отступы. Тип предупреждения "ошибка". Количество отступов 2
    indent: [2, 2],
    // Это из плагина react/eslin extention. Аналог первой строки, только работает для jsx
    'react/jsx-indent': [2, 2],
    // Отступы когда передаем пропсы
    'react/jsx-indent-props': [2, { indentMode: 2, ignoreTernaryOperator: true }],
    // Указываем файл где можно использовать jsx
    'react/jsx-filename-extension': [2, { extensions: ['js', 'jsx', 'ts', 'tsx'] }],
    // Ругается на абсолютные пути, поэтому отключаем
    'import/no-unresolved': 'off',
    // Чтобы не просил использовать дефолтный экспорт по умолчанию отключаем
    'import/prefer-default-export': 'off',
    // Если переменная неипользуется будем выдавать варнинг
    'no-unused-vars': 'warn',
    // Дефолтные значения пропрсов тоже уберем
    'react-require-default-props': 'off',
    // Так как реакт грузится по умолчанию, то отключаем
    'react/react-in-jsx-scope': 'off',
    // Предупреждение если разворачивеам пропсы (как правило используем в ui )
    'react/jsx-props-no-spreading': 'warn',
    // Чтобы не требовал использовать обычные функции для компонентов, а не стрелочные, то отключим
    'react/function-component-definition': 'off',
    // Ругается на enum поэтому отключил
    'no-shadow': 'off',
    'no-undef': 'warn',
    // Ипорты мы настроили в вебкае
    'import/extensions': 'off',
    'object-curly-spacing': ['warn', 'always'],
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-tag-spacing': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // Чтобы не ругался на комменты ts-ignore
    '@typescript-eslint/ban-ts-comment': 'off',
    // Требует точно указывать значения переменных и дефолтных параметров, чтобы избежать null , undefined
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    // Настроки для i18 чтобы не ругался на атрибуты
    'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }]
  },
  globals: {
    // Чтобы не ругался на глобальные переменные
    __IS_DEV__: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
