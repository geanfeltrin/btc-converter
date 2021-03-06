const { expect } = require('chai');
const { exec } = require('child_process');
const pkg = require('../package.json');

const btcConverter = '../src/main.js';

describe('Main CLI', () => {
  it('should return version of btc-converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });

  it('should return the description when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('Convert Bitcoint to any currency defined')).to.be.true;
      done();
    });
  });

  it('should return the currency option when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('--currency')).to.be.true;
      done();
    });
  });

  it('should return the amount option when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('--amount')).to.be.true;
      done();
    });
  });
});
