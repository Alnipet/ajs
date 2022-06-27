import { version } from '../package.json';

function info() {
  const m = new Map();
  m.set('name', 'ajs');
  m.set('version', version);
  return m;
}

export default {
  info,
};
