module.exports = {
  iOSRepo: 'https://github.com/fg2q1q3q/hera-ios-sample.git',
  androidRepo: 'https://github.com/fg2q1q3q/hera-android-sample.git',
  androidAPKName: 'app/build/outputs/apk/debug/app-debug.apk',
  androidManifestFile: 'app/src/main/AndroidManifest.xml',
  androidMainActivity: 'SampleActivity',
  tmpDistDir: 'heraTmp',
  platformDir: 'heraPlatforms', // 存放客户端代码的文件夹
  iosScheme: 'HeraDemo',
  iosProjDir: 'heraPlatforms/ios/',
  androidConfigFile:
    'heraPlatforms/android/app/src/main/java/com/weidian/lib/hera/app/SampleActivity.java',
  iosConfigFile: 'heraPlatforms/ios/WDHodoer/WDHodoer/File/WDHFileDownload.m',
  defaultPort: 8081
}
