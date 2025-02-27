import docopt from "../mod";

const doc = `
Example of program which uses [options] shortcut in pattern.

Usage:
  ${import.meta.url} [options] <port>

Options:
  -h --help                show this help message and exit
  --version                show version and exit
  -n, --number N           use N as a number
  -t, --timeout TIMEOUT    set timeout TIMEOUT seconds
  --apply                  apply changes to database
  -q                       operate in quiet mode

`;
try {
  console.log(JSON.stringify(docopt(doc, {version: '1.0.0rc2'}), null, '\t'));
} catch (e) {
  console.error(e.message);
}
