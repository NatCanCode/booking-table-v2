### Install Prettier by running:
```
npx prettier . --write
```

### Then install ESLint following the official documentation https://eslint.org/docs/latest/use/getting-started
### Run:
```
npm init @eslint/config
```

### Add rules to the eslintrc.json file:
```
"rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
}
```
The first value is the error level of the rule and can be one of these values:
"off" or 0 - turn the rule off
"warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
"error" or 2 - turn the rule on as an error (exit code will be 1)

### Add this other rule to the eslintrc.json file:
```
{
    "extends": "eslint:recommended"
}
```
All the rules marked “recommended” on the rules page will be turned on. 
Alternatively, you can use configurations that others have created by searching for “eslint-config” on https://www.npmjs.com/search?q=eslint-config 

### Test individual file by running:
```
npx eslint folder/file
```
```
npx eslint routes/reservation.js
```

### You can view all the CLI options by running:
```
npx eslint -h
```
--------------------------------------------------------------------------------------------------------------