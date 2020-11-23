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

- Node.js 15.2.1
- Linux 5.7.19-2-MANJARO
- pnpm 5.10.1

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

googled things

## Results table

I split the results of my small research into objective and subjective. Objective are the ones that don't depend much on outer factors like my laptop or CI performance or a Node.js version.

### Objective results

These results don't depend much on the conditions on which machine I run these tests, what Node.js version I use, etc. These stats can be considered universal for most cases.

| Framework        | minimum node version | ESM support                         | install size (with deps) | deps count | TS support      | types          |
| ---------------- | -------------------- | ----------------------------------- | ------------------------ | ---------- | --------------- | -------------- |
| jest@26.6.3      | 10.14.2              | w/ `--experimental-vm-modules` flag | 47M                      | 56938      | with `ts-jest`  | `@types/jest`  |
| uvu@0.5.0-next.1 | 8                    | out of the box                      | 652K                     | 8          | with `ts-node`  | out of the box |
| mocha@8.2.1      | 10.12.0              | out of the box                      | 7.5M                     | 96         | with `ts-mocha` | `@types/mocha` |

more coming soon...

### Subjective results

coming soon...
