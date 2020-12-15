# Node.js testing frameworks comparison

## Why

The comparison was made for determining the most fitting testing framework for my Node.js libraries. Note that the comparison is only about backend (or universal) JS libraries, frontend is not considered as a criteria here.

## Compared frameworks

- Jest
- Mocha + assert
- Mocha + earl
- uvu
- tape
- oletus

## Environment

- Node.js 15.4
- Linux 5.7.19-2-MANJARO
- pnpm 5.13.6

## How I measured stuff

### Version

checked in package.json

### Minimum Node.js version

checked in package.json `"engines"` field

### ESM Support

googled / tried using ES Modules / `.mjs` extension

### Install size

created `/tmp/test` folder and installed the module and then did `du -sh node_modules`

### Deps count

ran `pnpm ls --depth=Infinity --parseable | uniq | wc -l` after installing

### TS Support

tried to import and checked if it's typed

### Coverage support

checked READMEs / examples

### Test run speed

With [`gnomon`](https://github.com/paypal/gnomon).

## Results table

I split the results of my small research into objective and subjective. Objective are the ones that don't depend much on outer factors like my laptop or CI performance or a Node.js version.

### Objective results

These results don't depend much on the conditions on which machine I run these tests, what Node.js version I use, etc. These stats can be considered universal for most cases.

> w/ = with, ootb = out of the box, 🏅 = best result

| Framework                  | node version | ESM support  | Coverage | size (w/ deps) | deps count | TS support | types             | pretty output | grouping tests         |
| -------------------------- | ------------ | ------------ | -------- | -------------- | ---------- | ---------- | ----------------- | ------------- | ---------------------- |
| jest@26.6.3                | 10.14.2      | w/ a flag    | ✔️       | 47M            | 56938      | `ts-jest`  | w/ `@types/jest`  | ✔️            | `describe`             |
| uvu@0.5.0-next.1           | 8            | ✔️           | w/ `c8`  | 652K           | 8          | `ts-node`  | ✔️                | ✔️            | `suite`                |
| mocha@8.2.1 + assert       | 10.12        | ✔️           | w/ `c8`  | 7.5M           | 96         | `ts-mocha` | w/ `@types/mocha` | ✔️            | `mocha`                |
| mocha@8.2.1 + earljs@0.1.8 | 10.12        | ✔️           | w/ `c8`  | 23M            | 824        | `ts-mocha` | w/ `@types/mocha` | ✔️            | `mocha`                |
| tape@5.0.1                 | ?            | w/ `tape-es` | w/ `c8`  | 5.3M           | 64         | `ts-node`  | w/ `@types/tape`  | w/ `tap-spec` | `group` w/ `tape-plus` |
| oletus@3                   | 12           | ✔️           | w/ `c8`  | 60K 🏅         | 2 🏅       | `ts-node`  | ✖️                | ✔️            | ✖️                     |

more coming soon...

### Subjective results

> 🏅 = fastest

| Framework                  | test run speed |
| -------------------------- | -------------- |
| jest@26.6.3                | 1.1402s        |
| uvu@0.5.0-next.1           | 0.4743s 🏅     |
| mocha@8.2.1 + assert       | 0.5752s        |
| mocha@8.2.1 + earljs@0.1.8 | 0.7187s        |
| tape@5.0.1                 | 0.5517s        |
| oletus@3                   | 0.4999s        |

### Conclusion

- **oletus** is the 2nd fastest, but lacks types and grouping tests
- **jest** is the heaviest, slowest and doesn't have ESM support out of the box
- **uvu** is the fastest test runner, while having ESM and types out of the box

I would pick `uvu` for new projects because despite rich feature support, it's still very small and very fast.
