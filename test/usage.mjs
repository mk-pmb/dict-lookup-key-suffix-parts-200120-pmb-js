// -*- coding: utf-8, tab-width: 2 -*-

import equal from 'equal-pmb';

// ¦mjsUsageDemo¦+
import dictLookupKeySuffixParts from '..';
// ¦mjsUsageDemo¦- importPkgName

// ¦mjsUsageDemo¦+
const pageTitles = {
  'nic.local': 'Register your local mDNS domain today!',
  'login.nic.local': 'Manage your mDNS domain',
  'mbox.local': 'Free email accounts for everyone!',
  'imap.mbox.local': 'FAQ: How to receive your mail',
  'smtp.mbox.local': 'FAQ: How to send mail',
  'gopher.mbox.local': false,
};

function bestTitle(domain) {
  const parts = domain.split(/\./);
  return dictLookupKeySuffixParts(pageTitles, parts, { glue: '.' });
}

equal(bestTitle('local'), false);
equal(bestTitle('.local'), false);

const nicTitle = bestTitle('nic.local');
equal(nicTitle, {
  key: 'nic.local',
  nSkip: 0,
  nUsed: 2,
  partsUsed: ['nic', 'local'],
  val: 'Register your local mDNS domain today!',
});

equal(bestTitle('www.nic.local'), { ...nicTitle, nSkip: 1 });
equal(bestTitle('some.random.subdomain.nic.local'), { ...nicTitle, nSkip: 3 });

equal(bestTitle('www.mbox.local').key, 'mbox.local');
equal(bestTitle('imap.mbox.local').key, 'imap.mbox.local');
equal(bestTitle('bogus.imap.mbox.local').key, 'imap.mbox.local');
equal(bestTitle('spam.goes.here.smtp.mbox.local').key, 'smtp.mbox.local');
equal(bestTitle('whatever-except-gopher.mbox.local').key, 'mbox.local');
equal(bestTitle('gopher.mbox.local').val, false);

equal(bestTitle('unknown.local'), false);
pageTitles[''] = 'Unknown domain';
equal(bestTitle('unknown.local'), {
  key: '',
  nSkip: 2,
  nUsed: 0,
  partsUsed: [],
  val: 'Unknown domain',
});

// ¦mjsUsageDemo¦-





console.info('+OK usage test passed.');
