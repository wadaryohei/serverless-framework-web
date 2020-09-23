## Serverless Framework Architecture - FrontEnd -

Serverless FrameworkでAWS環境を構築したバックエンド側の環境とフロント側を接続する。

> React / Amplify

before Development

```
amplify init
```

①バックエンド側でdeploy後に生成されるaws-exportsをコピーしてきて中身の値はenvに記載。
②バックエンド側で生成されるFunctionsのHello Functionのエンドポイントをenvに記載。
③appSyncのconsoleにいってSchemaからコードを生成するためにadd codegenする。

バックエンド側がしっかりとdeployされていれば恐らくこれだけで動くようになるはず。