(function () {
  'use strict';
  const EVENTS = [
    'app.record.create.show',
    'app.record.edit.show',
    'app.record.detail.show'
  ];
  kintone.events.on(EVENTS, function (event) {
    const recordId = kintone.app.record.getId();
    if (!recordId) return event;
    const targetField = 'レコード番号copy';
    if (event.record[targetField]) {
      event.record[targetField].value = recordId.toString();
    }
    return event;
  });
})();
