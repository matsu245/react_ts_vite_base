import js from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tailwindcss from 'eslint-plugin-tailwindcss';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist', 'eslint.config.js'],
  languageOptions: {
    ecmaVersion: 2020,
    parser: typescriptParser,
    globals: globals.browser,
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    tailwindcss: tailwindcss,
    'unused-imports': unusedImports,
    import: importPlugin,
    prettier: prettier,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'unused-imports/no-unused-imports': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
          'newlines-between': 'always', // グループ毎に改行を入れる
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'react-router-dom',
            group: 'external',
            position: 'before', // react-router-domを必ず外部ライブラリのグループに先に持ってくる
          },
        ],
      },
    ],

    'prettier/prettier': [
      'warn',
      {
        // Prettierの設定（オプションを追加できます）
      },
    ],
    'tailwindcss/classnames-order': 'off', // クラス名のソートは prettier-plugin-tailwindcss に任せる
    'tailwindcss/no-custom-classname': 'off',
    ...js.configs.recommended.rules,
    ...tseslint.configs.recommended.rules,
  },
});
