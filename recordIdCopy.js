// 保存完了後にレコード番号をフィールドにコピー → 詳細画面をリロードして反映
(function () {
  'use strict';

  kintone.events.on('app.record.create.submit.success', function (event) {
    const recordId = event.recordId;
    const appId = kintone.app.getId();

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
      // 保存後の詳細画面に遷移 → 強制リロードで最新状態を反映！
      location.reload();
      return event;
    });
  });
})();
