# Cordova Webview

[![Cordova](https://img.shields.io/badge/version-9.0.3-brightgreen)](https://cordova.apache.org/)
[![Gradle](https://img.shields.io/badge/version-7.1.1-blue)](https://gradle.org/install/)
[![Java](https://img.shields.io/badge/version-11.0.20-red)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
[![Android Tools](https://img.shields.io/badge/API%20Level-33-important)](https://developer.android.com/studio/command-line/sdkmanager)

## Table of Contents

1. [Introduction](#introduction)
   - [About Android](#about-android)
   - [About Codemagic](#about-codemagic)
   - [About Cordova](#about-cordova)
   - [About Github](#about-github)
2. [Installation and Setup On Your Machine](#installation-and-setup-on-your-machine)
3. [Registration, Installation and Setup On Codemagic](#registration,-installation-and-setup-on-codemagic)
4. [Application Usage](#application-usage)
5. [Changing Configuration On Codemagic and Your Computer](#changing-configuration-on-codemagic-and-your-computer)
6. [About the Developer](#about-the-developer)

## Introduction

---

This project uses Codemagic as a CI/CD to automate the build and distribution process of Android applications. The build script is provided in `.yaml` file format.

### About Android

Android is a Linux-based operating system designed for touchscreen mobile devices such as smartphones and tablet computers. Android was initially developed by Android, Inc., with financial backing from Google, which later bought it in 2005.

### About Codemagic

Codemagic is a CI/CD tool that is a good choice for Flutter developers. It not only reduces CI/CD configuration time for Flutter, but also provides a feature-rich host for your application. Codemagic has the capability to test, build, and launch Flutter applications with a single click or one command from your command line.

### About Cordova

Cordova is a platform for building native mobile applications using HTML, CSS, and JavaScript. It is a platform involving web applications that have been packaged for local distribution and have access to native device APIs.

### About Github

Github is a Git-based web hosting service for software development projects that use the Git revision monitoring system. Github offers all of Git's distributedrevision management and source code functions as well as its own added features.

## Installation and Setup On Your Machine

---

To use this project, follow these steps:

- Clone Or Fork this repository.
  ```
  git clone https://github.com/lgarin211/CORDOVA-CORE-FOR-WEBVIEW.git
  ```
- Make sure you are using the latest version of `node`. Then, install the dependencies using npm.
  ```
  npm install
  npm ci
  ```
- Install SDKMAN, Java, and Gradle.
  ```
  curl -s "https://get.sdkman.io" | bash
  source "$HOME/.sdkman/bin/sdkman-init.sh"
  sdk install java 11.0.20-amzn
  sdk install gradle 7.1.1
  ```
- Install [Android Studio](https://developer.android.com/studio) and Android Tools API level 33.

- Install Cordova Environmen
  ```
   npm install -g cordova
  ```

## Registration, Installation and Setup On Codemagic

---

- [Register and log in to Codemagic](https://codemagic.io/start/)
- Select your project on Github and choose the Repository to manually set up the `codemagic.yaml`.
- Read te `codemagic.yaml` from your repository to the configuration from your github of the project on Codemagic.
- In the environment variables section, add a new variable called `CM_API_TOKEN` and populate it with your Codemagic API token.
- Plese Cek your `codemagic.yaml` and `config.xml` for makesure what you will be complate
- After All The Setup is ready lets select start build on codemagic aplication

## Application Usage On Your Computer

---

- Add the android platform for the application with the command `cordova platform add android`.
- Generate a keystore using the following command, replace `CUSTEM` with your key alias name and `@CUSTEM211` with your desired password.
  ```
  keytool -genkeypair -v -keystore CUSTEM.keystore -storepass @CUSTEM211 -keyalg RSA -keysize 2048 -validity 10001 -alias Dcustem -storetype PKCS12 -dname "CN=Custem, OU=Custem2, O=Custem3, L=Custem3, ST=java, C=id"
  ```
- Build Bundle and APK
  ```
  cordova build android --release -- --keystore=./CUSTEM.keystore --storePassword=@CUSTEM211 --alias=Dcustem --password=@CUSTEM211 --packageType=bundle
  ```
  ```
  cordova build android --release -- --keystore=./CUSTEM.keystore --storePassword=@CUSTEM211 --alias=Dcustem --password=@CUSTEM211 --packageType=apk
  ```

# Changing Configuration On Codemagic and Your Computer

You can change the build configuration by updating the workflow in the `codemagic.yaml` and `config.xml` files, or directly in the Codemagic configuration UI.

## Explanation about `codemagic.yaml`

```
workflows:
  cordova-android:
    name: Cordova Android Workflow
    environment:
      node: latest
      java: latest
      android: latest
    scripts:
      - name: Install SDK and Dependencies
        script: |
          npm install
          npm ci
          curl -s "https://get.sdkman.io" | bash
          source "$HOME/.sdkman/bin/sdkman-init.sh"
          sdk install java 11.0.20-amzn
          sdk install gradle 7.1.1
      - name: Add Android Platform
        script: |
          cordova platform add android
      - name: Build keystore
        script: |
          keytool -genkeypair -v -keystore CUSTEM.keystore -storepass @CUSTEM211 -keyalg RSA -keysize 2048 -validity 10001 -alias Dcustem -storetype PKCS12 -dname "CN=Custem, OU=Custem2, O=Custem3, L=Custem3, ST=java, C=id"
      - name: Build Bundel .adb
        script: |
          cordova build android --release -- --keystore=./CUSTEM.keystore --storePassword=@CUSTEM211 --alias=Dcustem --password=@CUSTEM211 --packageType=bundle
      - name: Build Aplication .apk
        script: |
          cordova build android --release -- --keystore=./CUSTEM.keystore --storePassword=@CUSTEM211 --alias=Dcustem --password=@CUSTEM211 --packageType=apk
      - name: Compress The Aplication
        script: |
          echo "Compresing..."
          mkdir uploadfile
          cp -r platforms uploadfile
          cp -r CUSTEM.keystore uploadfile
          zip -r ready.zip uploadfile
          echo "get ready for upload"
      - name: Upload APK
        script: |
          echo "Deploying app to Codemagic..."
          curl -v -X POST \
            -F "file=/Users/builder/clone/ready.zip" \
            -H "x-auth-token: $CM_API_TOKEN" \
            -H "content-type: multipart/form-data" \
            https://api.codemagic.io/artifacts/upload
    artifacts:
      - /Users/builder/clone/ready.zip
    publishing:
      email:
        recipients:
          - lagustinus211@gmail.com

```

### Cordova Android Workflow

This is an automated workflow for building and distributing Cordova Android applications using GitHub Actions. The workflow is designed to automate the process of building, signing, compressing, and uploading the application to Codemagic.

### Workflow Steps

#### 1. Install SDK and Dependencies

First, this workflow installs Node.js, Java, Android SDK, and other necessary tools for building Cordova Android applications. This includes the installation of Node.js, SDKman, Java 11, and Gradle 7.1.1.

#### 2. Add Android Platform

Once the dependencies are installed, Cordova adds the Android platform to your project.

#### 3. Build Keystore

Next, the workflow generates a keystore used for signing the application. The keystore is saved as `CUSTEM.keystore` with the specified password.

#### 4. Build Bundle (.adb)

After creating the keystore, the application is built in bundle format (.adb) using the previously generated keystore.

#### 5. Build Application (.apk)

In addition to the bundle format, the application is also built in the .apk format using the same keystore.

#### 6. Compress the Application

Once the application is successfully built, the workflow compresses it into a zip file named `ready.zip`. All necessary files, including the Android platform and keystore, are included in the zip file.

#### 7. Upload APK

The final step is to upload the built application to Codemagic using curl. This allows you to easily distribute your application through Codemagic.

### Artifact

The artifact produced by this workflow is `ready.zip`, which contains everything needed to distribute the Cordova Android application.

### Contact Information

If you have any questions or need further assistance, you can contact us via email at lagustinus211@gmail.com.

Enjoy automating the build and distribution process of your Cordova Android application with this workflow!

## Explanation about `config.xml`

```
<?xml version='1.0' encoding='utf-8'?>
<widget id="lgarin211.github.io" version="1.0.0" xmlns="http://www.w3.org/ns/widgets"
    xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>YOUR APPS NAME</name>
    <description>YOUR APPS DESCRIPTION</description>
    <author email="lagustinus211@gmail.com" href="https://lgarin211.github.io">
        YOUR EMAIL
    </author>
    <content src="index.html" />
    <allow-navigation href="https://*" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
    <icon src="res/icon.png" />

    <preference name="FadeSplashScreenDuration" value="300" />
    <preference name="SplashShowOnlyFirstTime" value="false" />
    <preference name="SplashScreen" value="none" />
    <preference name="SplashScreenDelay" value="1000" />
    <preference name="AndroidWindowSplashScreenBackground" value="#121212" />
    <preference name="AndroidWindowSplashScreenAnimatedIcon" value="res/icon.png" />

</widget>
```

### Configuration for Your Cordova Android App

This is the configuration file (`config.xml`) for your Cordova Android application. The `config.xml` file contains important metadata and preferences for your app. Below, we provide an explanation of the key elements in this configuration:

- **Widget Information:**

  - **ID:** `lgarin211.github.io`
  - **Version:** `1.0.0`
  - **Name:** Your App Name
  - **Description:** Your App Description
  - **Author:** Your Email
    - Email: lagustinus211@gmail.com
    - Website: [https://lgarin211.github.io](https://lgarin211.github.io)

- **Content Source:** The main HTML file for your app is `index.html`.

- **Allow Navigation:** Your app allows navigation to any website with the `https://*` protocol.

- **Allow Intent:** Your app allows intents to open web pages using `http://*/*` and `https://*/*`.

- **App Icon:** The app icon is sourced from `res/icon.png`.

- **Splash Screen Preferences:**
  - `FadeSplashScreenDuration`: The duration of the fade-out animation for the splash screen (in milliseconds).
  - `SplashShowOnlyFirstTime`: The splash screen is not shown only on the first app launch.
  - `SplashScreen`: The splash screen is set to "none," meaning no default splash screen is used.
  - `SplashScreenDelay`: The delay before the app's main view is displayed after the splash screen (in milliseconds).
  - `AndroidWindowSplashScreenBackground`: The background color of the Android splash screen.
  - `AndroidWindowSplashScreenAnimatedIcon`: The animated icon used in the Android splash screen sourced from `res/icon.png`.

These configuration settings determine various aspects of how your Cordova Android app behaves and appears. You can customize these settings according to your app's requirements. If there are specific points that need attention or changes in the configuration, mention them here.

If you need to make changes to this configuration, you can update the `config.xml` file directly. Remember to keep it in sync with the configuration you use in your Cordova Android build workflow.

For more information on Cordova's configuration options, you can refer to the official Cordova documentation.

## About the Developer

---

![Profile Picture](https://lgarin211.github.io/assets/img/profile-img.jpg)

Name: Agustinus Pardamean Lumban Tobing<br>
Education: Computer Science, Binus University<br>
Portfolio: [Click Here](https://lgarin211.github.io)<br>
Github Account: [lgarin211](https://github.com/lgarin211)<br>
Sincerely,
Agustinus Pardamean Lumban Tobing
