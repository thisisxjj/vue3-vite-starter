module.exports = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'babel-jest',
      {
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
        plugins: ['@vue/babel-plugin-jsx', '@babel/plugin-transform-runtime'] // 新增
      }
    ]
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'components/(.*)$': '<rootDir>/src/components/$1'
  },
  testEnvironment: 'jest-environment-jsdom'
}
