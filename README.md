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

- Clone this repository.
  ```
  git clone https://github.com/lgarin211/CORDOVA-CORE-FOR-WEBVIEW
  ```
- Make sure you are using the latest version of `node`, `java`, and `android`. Then, install the dependencies using npm.
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

## Registration, Installation and Setup On Codemagic

---

- [Register and log in to Codemagic](https://codemagic.io/start/)
- Select your project on Github and choose the option to manually set up the `.yaml`.
- Copy and paste `codemagic.yaml` from your repository to the configuration editor of the project on Codemagic.
- In the environment variables section, add a new variable called `CM_API_TOKEN` and populate it with your Codemagic API token.

## Application Usage

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


## Changing Configuration On Codemagic and Your Computer

---

You can change the build configuration by updating the workflow in the `codemagic.yaml` and `config.xml` file, or directly in the Codemagic configuration UI.

## About the Developer

---

![Profile Picture](https://lgarin211.github.io/assets/img/profile-img.jpg)

Name: Agustinus Pardamean Lumban Tobing<br>
Education: Computer Science, Binus University<br>
Portfolio: [Click Here](https://lgarin211.github.io)<br>
Github Account: [lgarin211](https://github.com/lgarin211)<br>
Sincerely,
Agustinus Pardamean Lumban Tobing
