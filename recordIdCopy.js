// 保存完了後にレコード番号をフィールドにコピーするカスタマイズ
(function () {
  'use strict';

  kintone.events.on('app.record.create.submit.success', function (event) {
    const recordId = event.recordId; // 保存後のID取得
    const appId = kintone.app.getId(); // アプリIDを取得

    const body = {
      app: appId,
      id: recordId,
      record: {
        'レコード番号copy': {
          value: recordId.toString()
        }
      }
    };

    return kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', body).then(function () {
      return event;
    });
  });
})();
