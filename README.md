# Warn Me

Application designed to remind me to check my emails.
<h1 align="center">
 <img src="./assets/emails.png" width="300px"></img>
</h1>

### **Installation**

```
  npm install

```
### **Run**

```
  npm start

```

### **Build**

```
  npm run build
```
or

```
  npm run package
```

### Installation on linux

```
  cd out && ls
```
move the compiled file
```
 sudo mv warn_me-linux-x64 /opt    
```
create a symbolic link
```
 sudo ln -s /opt/warn_me-linux-x64/warn_me /usr/local/bin/warn-me     
```
open a text editor with sudo permission
```
 sudo nano ~/.local/share/applications/warn-me.desktop
```
Copy inside
```
  [Desktop Entry]
  Type=Application
  Name=Warn-me
  Icon=/opt/warn_me-linux-x64/resources/app/assets/emails.png
  Exec="/opt/warn_me-linux-x64/warn_me"
  Comment=Warn-me
  Categories=Development;Code;
```
Press Ctrl+O and Ctrl+x to save.
done.

**Open the app launcher and search for "warn me"**

 Baseada em: https://github.com/maykbrito/insta-post-reminder